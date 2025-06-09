import { useState } from "react";

export default function ProductDetail({ product }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  // Upewnij się że images jest tablicą
  const images =
    Array.isArray(product.images) && product.images.length > 0
      ? product.images
      : [product.image || "/i1.png"];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Galeria zdjęć */}
        <div>
          {/* Główny obrazek */}
          <div className="relative h-96 bg-gray-100 rounded-lg mb-4 overflow-hidden border border-gray-200 group">
            <img
              src={images[currentImage]}
              alt={`${product.title} - zdjęcie ${currentImage + 1}`}
              className={`w-full h-full object-contain p-4 transition-transform duration-300 ${
                isZoomed ? "scale-150 cursor-zoom-out" : "cursor-zoom-in"
              }`}
              style={{
                imageRendering: "auto",
                filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))",
              }}
              onClick={() => setIsZoomed(!isZoomed)}
              onError={(e) => {
                console.log("Błąd ładowania obrazka:", images[currentImage]);
                e.target.style.display = "none";
                e.target.nextElementSibling.style.display = "flex";
              }}
            />

            {/* Fallback gdy obrazek się nie załaduje */}
            <div
              className="w-full h-full flex flex-col items-center justify-center text-gray-500 absolute inset-0 bg-gray-50"
              style={{ display: "none" }}
            >
              <svg
                className="w-16 h-16 mb-2 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <p className="text-sm">Nie można załadować obrazka</p>
            </div>

            {/* Strzałki nawigacji - pokazują się tylko gdy jest więcej niż 1 obrazek */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-opacity-70"
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
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-opacity-70"
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
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </>
            )}

            {/* Licznik zdjęć */}
            {images.length > 1 && (
              <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                {currentImage + 1} / {images.length}
              </div>
            )}
          </div>

          {/* Miniaturki */}
          {images.length > 1 && (
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-300">
              {images.map((img, index) => (
                <div
                  key={index}
                  className={`w-20 h-20 bg-gray-100 rounded-lg cursor-pointer relative overflow-hidden border-2 flex-shrink-0 transition-all duration-200 ${
                    currentImage === index
                      ? "border-blue-500 shadow-lg ring-2 ring-blue-200"
                      : "border-gray-200 hover:border-gray-400 hover:shadow-md"
                  }`}
                  onClick={() => setCurrentImage(index)}
                >
                  <img
                    src={img}
                    alt={`Miniatura ${index + 1}`}
                    className="w-full h-full object-contain p-1"
                    onError={(e) => {
                      e.target.src =
                        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0zMiA0OEMzNi40MTgzIDQ4IDQwIDQ0LjQxODMgNDAgNDBDNDAgMzUuNTgxNyAzNi40MTgzIDMyIDMyIDMyQzI3LjU4MTcgMzIgMjQgMzUuNTgxNyAyNCA0MEMyNCA0NC40MTgzIDI3LjU4MTcgNDggMzIgNDhaIiBzdHJva2U9IiM5Q0EzQUYiIHN0cm9rZS13aWR0aD0iMiIvPgo8L3N2Zz4K";
                    }}
                  />
                  {/* Wskaźnik aktywnej miniaturki */}
                  {currentImage === index && (
                    <div className="absolute inset-0 bg-blue-500 bg-opacity-20 rounded-lg"></div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Info o obrazkach */}
          <div className="mt-4 text-center text-sm text-gray-500">
            {isZoomed && "Kliknij aby pomniejszyć"}
            {!isZoomed && images.length > 1 && "Kliknij aby powiększyć"}
            {!isZoomed && images.length === 1 && "Kliknij aby powiększyć"}
          </div>
        </div>

        {/* Reszta komponentu pozostaje bez zmian */}
        <div>
          <h1 className="text-3xl font-bold mb-3 text-gray-800">
            {product.title}
          </h1>
          <div className="text-4xl font-bold text-red-600 mb-6">
            {product.price}
          </div>

          <div className="space-y-3 mb-8 text-gray-600">
            <div className="flex">
              <span className="font-medium w-24">Stan:</span>
              <span>{product.condition}</span>
            </div>
            <div className="flex">
              <span className="font-medium w-24">Lokalizacja:</span>
              <span>{product.location}</span>
            </div>
            <div className="flex">
              <span className="font-medium w-24">Dostawa:</span>
              <span>
                {Array.isArray(product.delivery)
                  ? product.delivery.join(", ")
                  : product.delivery}
              </span>
            </div>
            <div className="flex">
              <span className="font-medium w-24">Wystawiono:</span>
              <span>{product.publishedDate || "Dzisiaj"}</span>
            </div>
            <div className="flex">
              <span className="font-medium w-24">ID:</span>
              <span className="text-sm text-gray-500">{product.id}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors shadow-md">
              Kup teraz
            </button>
            <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-purple-700 transition-colors shadow-md">
              Dodaj do koszyka
            </button>
          </div>

          {/* Informacje o sprzedającym */}
          <div className="flex items-center gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
              {product.seller?.name?.slice(0, 2).toUpperCase() || "AN"}
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-800 text-lg">
                {product.seller?.name || "Anonimowy sprzedawca"}
              </h3>
              <div className="flex items-center gap-2">
                <div className="text-yellow-400 text-lg">
                  {"★".repeat(product.seller?.rating || 4)}
                  {"☆".repeat(5 - (product.seller?.rating || 4))}
                </div>
                <span className="text-sm text-gray-500">
                  ({product.seller?.rating || 4}/5)
                </span>
              </div>
            </div>
            <button className="bg-teal-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-teal-700 transition-colors shadow-md">
              Napisz do sprzedawcy
            </button>
          </div>
        </div>
      </div>

      {/* Opis produktu */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Opis produktu</h2>
        <div className="bg-gray-50 rounded-lg p-6">
          <p className="text-gray-700 leading-relaxed text-lg">
            {product.description}
          </p>
        </div>
      </div>
    </div>
  );
}
