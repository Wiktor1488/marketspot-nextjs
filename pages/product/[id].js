import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import ProductDetail from "../../components/ProductDetail";
import { useApp } from "../../context/AppContext";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;
  const { products } = useApp();

  // Znajdź produkt po ID w AppContext
  const product = products.find((p) => p.id.toString() === id);

  // Fallback - jeśli nie ma produktu w AppContext, użyj mockowanych danych
  const mockProduct = {
    id: id || "123456789",
    title: "iPhone 13 Pro, 128GB, Gray",
    price: "3299 zł",
    condition: "Used",
    location: "Kielce",
    delivery: ["Shipping", "Personal pickup"],
    publishedDate: "Today, 21:37",
    description:
      "This is a high-quality iPhone 13 Pro in excellent condition. The device has been well maintained and comes with original accessories. Perfect for anyone looking for a premium smartphone experience at a great price. All functions work perfectly and the battery life is excellent.",
    image: "/i1.png",
    images: ["/i1.png", "/i1.png", "/i1.png", "/i1.png"],
    seller: {
      name: "John Smith",
      email: "johnsmith@example.com",
      rating: 4,
      avatar: "/i1.png",
    },
  };

  const displayProduct = product || mockProduct;

  return (
    <>
      <Head>
        <title>{displayProduct.title} - MarketSpot</title>
        <meta name="description" content={displayProduct.description} />
      </Head>
      <Layout>
        <div className="container mx-auto px-4 py-6">
          <nav className="text-sm text-gray-600 mb-6">
            <Link href="/" className="text-blue-600 hover:underline">
              Home
            </Link>
            <span className="mx-2">›</span>
            <Link href="/search" className="text-blue-600 hover:underline">
              Electronics
            </Link>
            <span className="mx-2">›</span>
            <Link href="/search" className="text-blue-600 hover:underline">
              Phones
            </Link>
            <span className="mx-2">›</span>
            <span>iPhone</span>
            <span className="mx-2">›</span>
            <span>iPhone 13 Pro</span>
          </nav>

          <ProductDetail product={displayProduct} />
        </div>
      </Layout>
    </>
  );
}
