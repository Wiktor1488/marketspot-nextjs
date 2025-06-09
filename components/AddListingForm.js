import { useState } from "react";
import { useRouter } from "next/router";
import { useApp } from "../context/AppContext";

export default function AddListingForm() {
  const router = useRouter();
  const { addProduct } = useApp();
  const [formData, setFormData] = useState({
    category: "",
    title: "",
    description: "",
    condition: "",
    location: "",
    quantity: 1,
    price: "",
    delivery: [],
    promote: false,
    acceptTerms: false,
  });

  const [activeImageSlot, setActiveImageSlot] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.acceptTerms) {
      alert("Musisz zaakceptować regulamin");
      return;
    }

    if (!formData.title || !formData.price || !formData.category) {
      alert("Wypełnij wszystkie wymagane pola");
      return;
    }

    setIsSubmitting(true);

    try {
      const newProduct = addProduct({
        title: formData.title,
        price: formData.price + " zł",
        location: formData.location || "Nie podano",
        condition: formData.condition,
        delivery: formData.delivery,
        description: formData.description,
        image: "/i1.png", // Używa Twojego obrazka
      });

      alert("Ogłoszenie zostało dodane!");
      router.push(`/product/${newProduct.id}`);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      alert("Błąd przy dodawaniu ogłoszenia");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleDeliveryChange = (option, checked) => {
    setFormData((prev) => ({
      ...prev,
      delivery: checked
        ? [...prev.delivery, option]
        : prev.delivery.filter((item) => item !== option),
    }));
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-8">
      <h2 className="text-2xl font-bold text-red-600 mb-8">
        Dodaj nowe ogłoszenie
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
          {/* Lewa kolumna */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Kategoria *
              </label>
              <select
                value={formData.category}
                onChange={(e) => handleInputChange("category", e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              >
                <option value="">Wybierz kategorię</option>
                <option value="elektronika">Elektronika</option>
                <option value="motoryzacja">Motoryzacja</option>
                <option value="dom-ogrod">Dom i Ogród</option>
                <option value="moda">Moda</option>
                <option value="sport">Sport</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Opis przedmiotu *
              </label>
              <textarea
                value={formData.description}
                onChange={(e) =>
                  handleInputChange("description", e.target.value)
                }
                placeholder="Opisz szczegółowo przedmiot..."
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Stan przedmiotu *
              </label>
              <select
                value={formData.condition}
                onChange={(e) => handleInputChange("condition", e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              >
                <option value="">Wybierz stan</option>
                <option value="nowy">Nowy</option>
                <option value="używany">Używany</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ilość
                </label>
                <input
                  type="number"
                  value={formData.quantity}
                  onChange={(e) =>
                    handleInputChange("quantity", parseInt(e.target.value))
                  }
                  min="1"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cena *
                </label>
                <input
                  type="number"
                  value={formData.price}
                  onChange={(e) => handleInputChange("price", e.target.value)}
                  placeholder="0"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
            </div>
          </div>

          {/* Prawa kolumna */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Zdjęcia
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-gray-400 transition-colors cursor-pointer">
                <div className="text-6xl mb-4 text-gray-400">+</div>
                <div className="text-gray-600">
                  <div>Kliknij lub przeciągnij zdjęcia</div>
                  <div className="text-sm text-gray-500 mt-2">
                    Dodaj do 10 zdjęć (format JPG lub PNG)
                  </div>
                </div>
              </div>

              <div className="flex gap-2 mt-4">
                {[1, 2, 3].map((num) => (
                  <div
                    key={num}
                    className={`w-10 h-10 flex items-center justify-center rounded cursor-pointer ${
                      activeImageSlot === num
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200"
                    }`}
                    onClick={() => setActiveImageSlot(num)}
                  >
                    {num}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Dostawa
              </label>
              <div className="space-y-3">
                {[
                  "InPost Paczkowany",
                  "Kurier",
                  "Poczta Polska",
                  "Odbiór osobisty",
                ].map((option) => (
                  <label key={option} className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={formData.delivery.includes(option)}
                      onChange={(e) =>
                        handleDeliveryChange(option, e.target.checked)
                      }
                      className="rounded"
                    />
                    <span className="text-gray-700">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Lokalizacja
              </label>
              <select
                value={formData.location}
                onChange={(e) => handleInputChange("location", e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="">Wybierz lokalizację</option>
                <option value="Warszawa">Warszawa</option>
                <option value="Kraków">Kraków</option>
                <option value="Kielce">Kielce</option>
                <option value="Wrocław">Wrocław</option>
                <option value="Gdańsk">Gdańsk</option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tytuł ogłoszenia *
          </label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => handleInputChange("title", e.target.value)}
            placeholder="Wpisz tytuł ogłoszenia (min. 10 znaków)"
            className="w-full p-3 border border-gray-300 rounded-md mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="space-y-3 mb-6">
          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={formData.promote}
              onChange={(e) => handleInputChange("promote", e.target.checked)}
              className="rounded"
            />
            <span className="text-gray-700">
              Promuj moje ogłoszenie (dodatkowa opłata)
            </span>
          </label>
          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={formData.acceptTerms}
              onChange={(e) =>
                handleInputChange("acceptTerms", e.target.checked)
              }
              className="rounded"
              required
            />
            <span className="text-gray-700">Akceptuję regulamin serwisu *</span>
          </label>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-slate-600 text-white py-4 rounded-md font-bold text-lg hover:bg-slate-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Dodawanie..." : "Opublikuj ogłoszenie"}
        </button>
      </form>
    </div>
  );
}
