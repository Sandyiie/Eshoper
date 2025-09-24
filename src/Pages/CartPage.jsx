import React, { useContext } from "react";
import { userContext } from "../context/UserContext";

const CartPage = () => {
  const { cart, removeItems, increaseQuantity, decreaseQuantity, user } =
    useContext(userContext);

  const total = cart
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div className="bg-gray-50 min-h-screen py-8 px-18">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center md:text-center">
        Your Cart
      </h2>

      {cart.length === 0 ? (
        <p className="text-gray-600 text-center text-lg">Your cart is empty.</p>
      ) : (
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1 space-y-4">
            {cart.map((e) => (
              <div
                key={e.id}
                className="bg-white hover:shadow-xl transition flex flex-col md:flex-row items-center md:items-start p-4 gap-4"
              >
                <img
                  src={e.image}
                  alt={e.title}
                  className="w-32 h-32 object-contain rounded"
                />

                <div className="flex-1 flex flex-col gap-4 justify-between h-full w-full">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
                      {e.title}
                    </h3>
                    <p className="text-gray-600 font-medium">
                      Price: <span className="text-blue-600">${e.price}</span>
                    </p>

                    <div className="flex items-center space-x-4">
                      <button
                        className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
                        onClick={() => decreaseQuantity(e.id)}
                      >
                        −
                      </button>
                      <span className="text-gray-800 font-medium">
                        {e.quantity}
                      </span>
                      <button
                        className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
                        onClick={() => increaseQuantity(e.id)}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <button
                    className="mt-4 md:mt-auto w-full md:w-auto bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
                    onClick={() => {
                      if (window.confirm("Remove this item from cart?")) {
                        removeItems(e.title);
                      }
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:w-80 bg-white shadow-md p-6 flex flex-col justify-between sticky top-24 h-fit">
            <p className="text-xl font-semibold text-gray-800 mb-4">
              Total: <span className="text-blue-600">${total}</span>
            </p>
            <button
              className="bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition w-full"
              onClick={() =>
                user
                  ? alert("Processing...")
                  : alert("Please logIn to Checkout")
              }
            >
              CheckOut
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
