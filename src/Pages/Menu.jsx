import React from "react";
import { Link } from "react-router";
import MenuDetail from "./Menudetail";


const Menu = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-200 to-blue-400 flex flex-col items-center mt-15 py-10 px-4">
      <img
        src="./src/images/menubg1.jpg"
        alt=" food"
        className="rounded-xl shadow-lg object-cover w-full max-w-5xl h-48 sm:h-72 md:h-96"
      />

      <div className="text-center mb-10 px-2 sm:px-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 ">
          Welcome to Our Menu Page
        </h1>
       
      </div>

      <MenuDetail />
    </div>
  );
};

export default Menu;
