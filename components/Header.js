import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useApp } from "../context/AppContext";
import CartModal from "./CartModal";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showCart, setShowCart] = useState(false);
  const router = useRouter();
  const { cart } = useApp();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <header className="bg-slate-600 text-white py-3 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-bold text-white hover:text-gray-200"
          >
            MarketSpot
          </Link>
          <div className="flex gap-3 items-center">
            {/* Dodaj ogłoszenie */}
            <Link
              href="/add-listing"
              className="p-2 hover:bg-slate-500 rounded transition-colors group relative"
              title="Dodaj ogłoszenie"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Dodaj ogłoszenie
              </span>
            </Link>

            {/* Powiadomienia */}
            <button
              className="relative p-2 hover:bg-slate-500 rounded transition-colors group"
              title="Powiadomienia"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a6 6 0 00-6 6c0 3.75 6 10 6 10s6-6.25 6-10a6 6 0 00-6-6z" />
                <circle cx="10" cy="8" r="2" />
              </svg>
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* Koszyk */}
            <button
              onClick={() => setShowCart(true)}
              className="relative p-2 hover:bg-slate-500 rounded transition-colors group"
              title="Koszyk"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  {cartItemsCount}
                </span>
              )}
            </button>

            {/* Profil */}
            <Link
              href="/profile"
              className="p-2 hover:bg-slate-500 rounded transition-colors group"
              title="Profil"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </header>

      <div className="bg-slate-600 pb-4">
        <div className="container mx-auto px-4">
          <form onSubmit={handleSearch} className="flex gap-3">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Wpisz czego szukasz..."
              className="flex-1 px-4 py-3 rounded text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded font-bold transition-colors"
            >
              Szukaj
            </button>
          </form>
        </div>
      </div>

      {showCart && <CartModal onClose={() => setShowCart(false)} />}
    </>
  );
}
