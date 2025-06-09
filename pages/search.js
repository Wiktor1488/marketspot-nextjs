import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Layout from "../components/Layout";
import ProductGrid from "../components/ProductGrid";
import FilterSidebar from "../components/FilterSidebar";
import Pagination from "../components/Pagination";
import { useApp } from "../context/AppContext";

export default function Search() {
  const router = useRouter();
  const { q } = router.query;
  const { products } = useApp();
  const [sortBy, setSortBy] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    categories: [],
    priceMin: "",
    priceMax: "",
    condition: [],
    locations: [],
  });

  // Filtruj produkty na podstawie wyszukiwania
  const filteredProducts = products.filter((product) => {
    if (q && !product.title.toLowerCase().includes(q.toLowerCase())) {
      return false;
    }
    return true;
  });

  const resultsPerPage = 8;
  const totalPages = Math.ceil(filteredProducts.length / resultsPerPage);
  const startIndex = (currentPage - 1) * resultsPerPage;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + resultsPerPage
  );

  return (
    <>
      <Head>
        <title>{q ? `Wyniki dla "${q}"` : "Wyszukiwanie"} - MarketSpot</title>
      </Head>
      <Layout>
        <div className="container mx-auto px-4 py-6">
          <div className="bg-white rounded-lg shadow-sm p-4 mb-6 flex justify-between items-center">
            <div>
              <span className="text-gray-600">
                Znaleziono {filteredProducts.length}{" "}
                {q ? `ofert dla "${q}"` : "ofert"}
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-600">Sortuj:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="newest">Najnowsze</option>
                <option value="oldest">Najstarsze</option>
                <option value="price-asc">Cena rosnąco</option>
                <option value="price-desc">Cena malejąco</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-1">
              <FilterSidebar filters={filters} setFilters={setFilters} />
            </div>

            <div className="lg:col-span-3">
              {paginatedProducts.length > 0 ? (
                <>
                  <ProductGrid products={paginatedProducts} />
                  {totalPages > 1 && (
                    <Pagination
                      currentPage={currentPage}
                      totalPages={totalPages}
                      onPageChange={setCurrentPage}
                    />
                  )}
                </>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-600 text-lg">
                    Nie znaleziono żadnych ofert
                  </p>
                  <p className="text-gray-500 mt-2">
                    Spróbuj zmienić kryteria wyszukiwania
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
