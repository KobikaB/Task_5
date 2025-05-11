import React from "react";
import { Link, Outlet } from "react-router";

const Menu = () => {
  return (
    <div className=" h-screen w-screen flex flex-col bg-gray-200 bg-fixed">
     
      <div className="mt-40 font-bold text-4xl text-white bg-blue-400 p-6 rounded-xl shadow-md w-1/2 mx-auto text-center">
        Menu
      </div>

      
      <ul className="flex flex-col items-center mt-8 space-y-4 font-bold">
        <li className="w-full max-w-md px-4">
          <Link
            to="1"
            className="block text-blue-700 hover:text-white hover:bg-blue-500 p-4 rounded-lg shadow-lg "
          >
            Menu 1
          </Link>
        </li>
        <li className="w-full max-w-md px-4">
          <Link
            to="2"
            className="block text-blue-700 hover:text-white hover:bg-blue-500 p-4 rounded-lg shadow-lg "
          >
            Menu 2
          </Link>
        </li>
        <li className="w-full max-w-md px-4">
          <Link
            to="3"
            className="block text-blue-700 hover:text-white hover:bg-blue-500 p-4 rounded-lg shadow-lg "
          >
            Menu 3
          </Link>
        </li>
        <li className="w-full max-w-md px-4">
          <Link
            to="4"
            className="block text-blue-700 hover:text-white hover:bg-blue-500 p-4 rounded-lg shadow-lg "
          >
            Menu 4
          </Link>
        </li>
      </ul>

     
      <Outlet />
    </div>
  );
};

export default Menu;
