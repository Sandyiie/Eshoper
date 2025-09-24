import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/AboutUs";
import Products from "./Pages/Products";
import ProductPage from "./Pages/ProductPage";
import Login from "./Pages/Login";
import CartPage from "./Pages/CartPage";
import { Register } from "./Pages/Register";

function App() {
  let router = createBrowserRouter([
    {
      path: "/",
      Component: Navbar,

      children: [
        { path: "/", Component: Home },

        { path: "/about", Component: About },
        { path: "/products", Component: Products },
        { path: "/products/:title", Component: ProductPage },
        { path: "/cart", Component: CartPage },
        { path: "/login", Component: Login },
        { path: "/register", Component: Register },
        { path: "*", Component: Home },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}

export default App;
