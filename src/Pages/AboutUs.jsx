import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-50 text-gray-800 ">
      <section className="bg-white py-20 px-6 text-center bg-gradient-to-r from-blue-500 to-indigo-600">
        <h1 className="text-4xl md:text-5xl font-bold mb-4  text-white">
          About Us
        </h1>
        <p className="text-lg md:text-xl  text-white max-w-2xl mx-auto">
          We’re passionate about delivering quality products and unforgettable
          experiences.
        </p>
      </section>

      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Who We Are</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Founded in 2020, our company has grown from a small startup to a
            trusted brand serving thousands of customers worldwide. We
            specialize in curating high-quality fashion, electronics, and
            lifestyle products that blend style with functionality.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 max-w-5xl mx-auto bg-white shadow-2xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 text-center">
          Our Mission
        </h2>
        <p className="text-gray-700 leading-relaxed mb-8 text-lg text-center">
          To empower individuals through accessible, stylish, and reliable
          products that enhance everyday life.
        </p>
        <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800 text-center">
          Core Values
        </h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 text-lg">
          <li className="bg-blue-50 p-4 rounded-xl shadow hover:shadow-md transition">
            Customer-first approach
          </li>
          <li className="bg-blue-50 p-4 rounded-xl shadow hover:shadow-md transition">
            Innovation and creativity
          </li>
          <li className="bg-blue-50 p-4 rounded-xl shadow hover:shadow-md transition">
            Integrity and transparency
          </li>
          <li className="bg-blue-50 p-4 rounded-xl shadow hover:shadow-md transition">
            Sustainability and responsibility
          </li>
        </ul>
      </section>

      <section className="py-16 px-6 max-w-6xl mx-auto relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800 text-center">
          Meet the Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {["Alex", "Priya", "Jordan"].map((name, index) => (
            <div
              key={index}
              className="relative bg-white p-6 shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-4"
            >
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-28 h-28 rounded-full bg-gray-200 flex items-center justify-center text-3xl font-bold text-gray-500 shadow-lg">
                {name.charAt(0)}
              </div>
              <div className="mt-20 text-center">
                <h3 className="text-xl font-semibold">{name}</h3>
                <p className="text-gray-500 mt-1">Product Specialist</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">
            Contact Us
          </h2>
          <p className="text-gray-700 mb-10 text-lg">
            Have questions or feedback? We'd love to hear from you.
          </p>
          <form className="space-y-6 bg-white p-8 rounded-3xl shadow-xl">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-5 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm transition"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-5 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm transition"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full px-5 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm transition"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
