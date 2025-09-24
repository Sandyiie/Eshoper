import { createContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export const userContext = createContext();

export const UserProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : false;
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const raw = await res.json();
        setData(raw);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, []);

  function removeItems(titleToRemove) {
    setCart((prevCart) =>
      prevCart.filter((item) => item.title !== titleToRemove)
    );
    toast.success("Item removed from cart!");
  }
  function addItems(product) {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });

    toast.success(`${product.title} added to cart!`);
  }

  const addItemsWithQuantity = (product, quantity) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity }];
      }
    });
  };

  const increaseQuantity = (id) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        const newItem = data.find((item) => item.id === id);
        return [...prevCart, { ...newItem, quantity: 1 }];
      }
    });
  };
  const decreaseQuantity = (id) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === id);
      if (existingItem) {
        if (existingItem.quantity > 1) {
          return prevCart.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
          );
        } else {
          return prevCart.filter((item) => item.id !== id);
        }
      }
      return prevCart;
    });
  };

  return (
    <userContext.Provider
      value={{
        data,
        setData,
        cart,
        setCart,
        removeItems,
        addItems,
        increaseQuantity,
        decreaseQuantity,
        setUser,
        user,
        addItemsWithQuantity,
      }}
    >
      {children}
    </userContext.Provider>
  );
};
