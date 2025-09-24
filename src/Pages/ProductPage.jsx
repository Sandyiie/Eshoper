import React, { useContext, useState } from "react";
import { useParams } from "react-router";
import { userContext } from "../context/UserContext";

const ProductPage = () => {
  const { title } = useParams();
  const { data, addItemsWithQuantity } = useContext(userContext);

  const product = data.find((e) => e.title === decodeURIComponent(title));

  const [localQuantity, setLocalQuantity] = useState(1);

  const handleIncrease = () => {
    setLocalQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    setLocalQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-16">
      {product ? (
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-5xl mx-auto flex flex-col md:flex-row gap-8">
          <div className="flex-1 flex items-center justify-center">
            <img
              src={product.image}
              alt={product.title}
              className="w-full max-w-md h-96 object-contain rounded-lg shadow-md"
            />
          </div>

          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {product.title}
              </h2>
              <p className="text-gray-600 mb-6">{product.description}</p>
              <p className="text-2xl font-semibold text-blue-600 mb-6">
                ${product.price}
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
                <button
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded-full font-semibold transition"
                  onClick={handleDecrease}
                >
                  -
                </button>
                <span className="text-lg font-medium">{localQuantity}</span>
                <button
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded-full font-semibold transition"
                  onClick={handleIncrease}
                >
                  +
                </button>
              </div>

              <button
                className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
                onClick={() => addItemsWithQuantity(product, localQuantity)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg mt-20">
          Product not found...
        </p>
      )}
    </div>
  );
};

export default ProductPage;
