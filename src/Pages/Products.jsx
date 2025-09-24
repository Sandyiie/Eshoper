import React, { useContext, useState } from "react";
import { userContext } from "../context/UserContext";
import { useNavigate } from "react-router";

const Products = () => {
  const { data, addItems } = useContext(userContext);
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const getFilteredData = () => {
    if (selectedCategory === "All") return data;
    return data.filter((item) => item.category === selectedCategory);
  };

  const filteredData = getFilteredData();

  return (
    <div className="flex min-h-screen px-18 py-8 bg-gray-50">
      <aside className="w-64 bg-white shadow-md p-6 sticky top-0 h-screen">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Categories</h2>
        <ul className="space-y-3">
          {[
            "All",
            "men's clothing",
            "women's clothing",
            "electronics",
            "jewelery",
          ].map((category) => (
            <li
              key={category}
              className={`cursor-pointer px-4 py-2 rounded-lg font-medium text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-blue-600 text-white shadow-lg"
                  : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </li>
          ))}
        </ul>
      </aside>

      <main className="flex-1 p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Products - {selectedCategory}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredData.map((e) => (
            <div
              key={e.id}
              className="relative overflow-hidden hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-1 group cursor-pointer"
              onClick={() => navigate(`/products/${e.title}`)}
            >
              <div className="w-full h-48 overflow-hidden relative">
                <img
                  src={e.image}
                  alt={e.title}
                  className="w-full p-2 h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />

                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300"
                  style={{ backgroundColor: "rgba(0,0,0,0.1)" }}
                >
                  <span className="text-white bg-blue-600 px-4 py-2 rounded-full font-semibold text-sm hover:bg-blue-700">
                    View Product
                  </span>
                </div>
              </div>

              <div className="p-4 flex flex-col items-center text-center">
                <p className="text-lg font-semibold text-gray-800 mb-1 line-clamp-2">
                  {e.title}
                </p>
                <p className="text-blue-600 font-bold text-lg mb-3">
                  ${e.price}
                </p>
                <button
                  className="bg-blue-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300"
                  onClick={(event) => {
                    event.stopPropagation();
                    addItems(e);
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Products;
