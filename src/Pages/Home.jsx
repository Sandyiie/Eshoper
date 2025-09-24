import React, { useContext } from "react";
import { userContext } from "../context/UserContext";
import { useNavigate } from "react-router";

const Home = () => {
  const { data } = useContext(userContext);
  const navigate = useNavigate();

  const mensClothing = data.filter(
    (item) => item.category === "men's clothing"
  );
  const womensClothing = data.filter(
    (item) => item.category === "women's clothing"
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 py-20 px-6 text-center text-white relative overflow-hidden">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
          Discover Your Style
        </h1>
        <p className="text-lg md:text-xl mb-8 drop-shadow-sm">
          Shop the latest trends in men's and women's fashion.
        </p>
        <button
          onClick={() => navigate("/products")}
          className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 transform transition duration-300"
        >
          Explore Now
        </button>

        <div className="absolute top-0 left-0 w-40 h-40 bg-white opacity-10 rounded-full -translate-x-20 -translate-y-20"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-white opacity-10 rounded-full translate-x-32 translate-y-32"></div>
      </section>

      <section className="py-14 px-6 bg-gray-100">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 text-center mb-10">
          Trusted by Top Brands
        </h2>
        <div className="flex justify-center items-center gap-12 flex-wrap">
          {[
            {
              src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
              alt: "Amazon",
            },
            {
              src: "https://www.vexels.com/vectors/preview/194697/fast-delivery-logo-design",
              alt: "Nike",
            },
            {
              src: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Adidas_Logo.svg",
              alt: "Adidas",
            },
            {
              src: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg",
              alt: "Zara",
            },
          ].map((brand, index) => (
            <img
              key={index}
              src={brand.src}
              alt={brand.alt}
              className="h-10 md:h-12 hover:scale-110 transform transition duration-300"
            />
          ))}
        </div>
      </section>

      <section className="px-18 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 text-center md:text-left">
          Men's Clothing
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {mensClothing.map((item) => (
            <div
              key={item.id}
              className="group relative cursor-pointer overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
              onClick={() => navigate(`/products/${item.title}`)}
            >
              <div className="w-full h-72 md:h-64 lg:h-60 overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

                  <div className="relative z-10 flex items-center justify-center h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto">
                    <span className="text-white bg-blue-600 px-4 py-2 rounded-full font-semibold text-sm hover:bg-blue-700">
                      View Product
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                  {item.title}
                </p>
                <p className="text-blue-600 font-bold text-lg">${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-18 pb-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 text-center md:text-left">
          Women's Clothing
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {womensClothing.map((item) => (
            <div
              key={item.id}
              className="group relative cursor-pointer overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
              onClick={() => navigate(`/products/${item.title}`)}
            >
              <div className="w-full h-72 md:h-64 lg:h-60 overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

                  <div className="relative z-10 flex items-center justify-center h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto">
                    <span className="text-white bg-blue-600 px-4 py-2 rounded-full font-semibold text-sm hover:bg-blue-700">
                      View Product
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                  {item.title}
                </p>
                <p className="text-blue-600 font-bold text-lg">${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
