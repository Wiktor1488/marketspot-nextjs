import Link from "next/link";

const navItems = [
  "Elektronika",
  "Motoryzacja",
  "Dom i Ogród",
  "Moda",
  "Sport",
  "Dla Dzieci",
  "Wakacje",
  "Nieruchomości",
  "Praca",
  "Więcej",
];

export default function Navigation() {
  return (
    <nav className="bg-gray-500">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={`/category/${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-white px-5 py-4 hover:bg-gray-400 hover:border-b-2 hover:border-red-600 transition-all"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
