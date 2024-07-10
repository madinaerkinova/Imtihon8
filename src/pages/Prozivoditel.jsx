import React, { useState, useEffect } from "react";
import DataImg from "../../public/assets/data.svg";
import Custom2 from "../components/Custom2";
import Custom from "../components/Custom";
import Information from "../components/Information";
import Location from "../components/Location";
import FooterTopp from "../components/FooterTopp";
import CompanyNews from "../components/CompanyNews";
import { Link } from "react-router-dom";

const App = () => {
  const itemsPerPage = 12;
  const totalPages = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);

  const handleCountryChange = (country) => {
    setSelectedCountries((prev) =>
      prev.includes(country)
        ? prev.filter((c) => c !== country)
        : [...prev, country]
    );
  };

  const handleReset = () => {
    setSelectedCountries([]);
    setSearchQuery("");
  };

  const handleShow = () => {
    console.log("Selected Countries:", selectedCountries);
  };

  useEffect(() => {
    const fetchProducts = () => {
      setProducts(
        Array.from({ length: 120 }).map((_, index) => ({
          id: index + 1,
          name: `Product ${index + 1}`,
          description: "Description",
          image: DataImg,
        }))
      );
    };

    fetchProducts();
  }, []);

  const displayedProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const filteredCountries = ["Australia", "Austria", "Belarus", "Belgium", "UK", "Germany", "Israel", "Spain"].filter(
    (country) =>
      country.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto py-6">
        <div className="flex flex-col lg:flex-row">
          {/* Sidebar */}
          <aside className="lg:w-1/4 pr-4 mb-6 lg:mb-0">
            <div className="mb-4">
              <h3 className="font-semibold">Страны</h3>
              <input
                type="text"
                placeholder="Search by country"
                className="mb-4 p-2 border border-gray-300 rounded w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div>
              <h3 className="font-semibold">Countries</h3>
              <ul>
                {filteredCountries.map((country) => (
                  <li key={country}>
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={selectedCountries.includes(country)}
                      onChange={() => handleCountryChange(country)}
                    />
                    {country}
                  </li>
                ))}
              </ul>
            </div>
            <button
              className="mt-4 px-4 py-2 bg-white text-black rounded hover:bg-green-600"
              onClick={handleReset}
            >
              Сбросить
            </button>
            <button
              className="mt-4 ml-2 px-4 py-2 bg-green-700 text-white rounded hover:bg-green-600"
              onClick={handleShow}
            >
              Показать
            </button>
          </aside>

          {/* Product Grid */}
          <section className="lg:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {displayedProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white p-4 shadow rounded transform transition duration-500 hover:scale-105 hover:shadow-lg"
                >
                  <div className="text-center">
                    <img
                      src={product.image}
                      alt="Product"
                      className="mx-auto mb-2"
                    />
                    <h3 className="font-semibold">{product.name}</h3>
                    <p className="text-gray-600">{product.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-6">
              <nav className="flex">
                <button
                  className={`px-3 py-2 mx-1 rounded ${
                    currentPage === 1 ? "bg-gray-300" : "bg-white"
                  }`}
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                >
                  «
                </button>
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    className={`px-3 py-2 mx-1 rounded ${
                      currentPage === index + 1 ? "bg-gray-300" : "bg-white"
                    }`}
                    onClick={() => setCurrentPage(index + 1)}
                  >
                    {index + 1}
                  </button>
                ))}
                <button
                  className={`px-3 py-2 mx-1 rounded ${
                    currentPage === totalPages ? "bg-gray-300" : "bg-white"
                  }`}
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                >
                  »
                </button>
              </nav>
            </div>
          </section>
        </div>
      </main>
      <Custom2 />
      <Custom />
      <CompanyNews />
      <Information />
      <Location />
      <FooterTopp />
    </div>
  );
};

export default App;
