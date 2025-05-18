import React from "react";
import { Link } from "react-router";

const Menu = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-300 to-blue-400 flex flex-col items-center mt-15 py-10 px-4">
      <img
        src="./src/images/menubg.jpg"
        alt=" food"
        className="rounded-xl shadow-lg object-cover w-full max-w-5xl h-48 sm:h-72 md:h-96"
      />

      <div className="text-center mb-10 px-2 sm:px-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 ">
          Welcome to Our Menu Page
        </h1>
        <p className="text-white sm:text-lg max-w-2xl mx-auto ">
          Explore our carefully curated menus that offer a wide variety of
          delicious options. Click on "All Menu Details" to dive deep into our
          selections and find your perfect dish!
        </p>
      </div>

      <ul className="flex flex-col items-center font-semibold mb-10 w-full max-w-lg px-4">
        <li>
          <Link
            to="1"
            className="block w-full bg-white text-blue-500 hover:text-white hover:bg-blue-600 transition-colors duration-300 p-4 sm:p-5 rounded-xl shadow-md text-center text-lg sm:text-xl font-semibold"
          >
            All Menu Details
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
