import React from "react";
import { NavLink } from "react-router";

const Footer = () => {
  const linkClass = "hover:text-blue-500 transition";

  return (
    <footer className="bg-gray-900 text-gray-200 py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">About Us</h3>
          <p className="text-gray-400 text-sm">
            We provide high-quality products with a focus on style,
            functionality, and customer satisfaction.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <NavLink to="/" className={linkClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" className={linkClass}>
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={linkClass}>
                About Us
              </NavLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4 text-white">Contact</h3>
          <p className="text-gray-400 text-sm">123 Fashion Street</p>
          <p className="text-gray-400 text-sm">Kathmandu, Nepal</p>
          <p className="text-gray-400 text-sm">Email: info@example.com</p>
          <p className="text-gray-400 text-sm">Phone: +977 9800000000</p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4 text-white">Follow Us</h3>
          <div className="flex gap-4">
            <NavLink
              to="#"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition"
            >
              <i className="fab fa-facebook-f text-white"></i>
            </NavLink>
            <NavLink
              to="#"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-400 transition"
            >
              <i className="fab fa-twitter text-white"></i>
            </NavLink>
            <NavLink
              to="#"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-pink-500 transition"
            >
              <i className="fab fa-instagram text-white"></i>
            </NavLink>
            <NavLink
              to="#"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-700 transition"
            >
              <i className="fab fa-linkedin-in text-white"></i>
            </NavLink>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Skill Shikshya. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
