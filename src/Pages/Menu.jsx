import React from "react";
import { Link, Outlet } from "react-router";

const Menu = () => {
  return (
    <div>
      <div className="mt-40 font-bold text-3xl bg-blue-400 p-3 w-full text-center">
        Menu
      </div>
      <ul className="ml-2 flex flex-col items-center space-y-2 mt-4">
        <li>
          <Link to="1" className="text-blue-600 hover:underline">
            Menu 1
          </Link>
        </li>
        <li>
          <Link to="2" className="text-blue-600 hover:underline">
            Menu 2
          </Link>
        </li>
        <li>
          <Link to="3" className="text-blue-600 hover:underline">
            Menu 3
          </Link>
        </li>
        <li>
          <Link to="4" className="text-blue-600 hover:underline">
            Menu 4
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Menu;
