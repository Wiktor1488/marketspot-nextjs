import Image from "next/image";
import { useApp } from "../context/AppContext";

export default function ProductCard({ product }) {
  const { addToCart } = useApp();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    // Krótkie powiadomienie
    const button = e.target;
    const originalText = button.textContent;
    button.textContent = "Dodano!";
    button.classList.add("bg-green-500");
    setTimeout(() => {
      button.textContent = originalText;
      button.classList.remove("bg-green-500");
    }, 1000);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer">
      <div className="h-48 bg-gray-200 relative overflow-hidden">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="h-full flex items-center justify-center text-gray-500">
            Zdjęcie produktu
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-bold text-gray-800 mb-2 line-clamp-2">
          {product.title}
        </h3>
        <p className="text-red-600 font-bold text-lg mb-1">{product.price}</p>
        <p className="text-gray-600 text-sm mb-3">{product.location}</p>
        <button
          onClick={handleAddToCart}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          Dodaj do koszyka
        </button>
      </div>
    </div>
  );
}
