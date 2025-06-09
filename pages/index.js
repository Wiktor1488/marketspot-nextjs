import Head from "next/head";
import Layout from "../components/Layout";
import ProductGrid from "../components/ProductGrid";
import { useApp } from "../context/AppContext";

export default function Home() {
  const { products } = useApp();

  // Podziel produkty na wyróżnione i ostatnio dodane
  const featuredProducts = products.slice(0, 5);
  const recentProducts = products.slice(0, 10);

  return (
    <>
      <Head>
        <title>MarketSpot - Twoja platforma handlowa</title>
        <meta
          name="description"
          content="Kup i sprzedaj wszystko na MarketSpot"
        />
      </Head>
      <Layout>
        <div className="container mx-auto px-4 py-8">
          {/* Wyróżnione oferty */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Wyróżnione oferty
            </h2>
            {featuredProducts.length > 0 ? (
              <ProductGrid products={featuredProducts} />
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <p className="text-gray-600 text-lg">Brak wyróżnionych ofert</p>
                <p className="text-gray-500 mt-2">
                  Dodaj pierwsze ogłoszenie klikając ikonkę + w headerze!
                </p>
              </div>
            )}
          </section>

          {/* Ostatnio dodane */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Ostatnio dodane
            </h2>
            {recentProducts.length > 0 ? (
              <ProductGrid products={recentProducts} />
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <p className="text-gray-600 text-lg">Brak ogłoszeń</p>
                <p className="text-gray-500 mt-2">
                  Kliknij ikonkę + w headerze, aby dodać pierwsze ogłoszenie
                </p>
              </div>
            )}
          </section>
        </div>
      </Layout>
    </>
  );
}
