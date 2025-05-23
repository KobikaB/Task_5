import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import logo1 from "../Images/logo1.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);

    navigate("/login", { replace: true });
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-black h-20 fixed top-0 w-screen z-50 ">
      <div className="flex items-center justify-between px-4 md:px-10 h-full">
        <Link to="/">
          <img
            src={logo1}
            alt="logo"
            className="h-12 sm:h-13 md:h-14 lg:h-16 rounded-full bg-amber-200 cursor-pointer "
          />
        </Link>

        <ul className="hidden md:flex items-center gap-6 md:text-xl lg:text-2xl text-white font-bold  ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>

        <ul className="flex gap-6 text-2xl text-white ">
          {!isLoggedIn ? (
            <>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/register">Register</NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="flex  sm:gap-2 md:gap-4  ">
                <Link
                  to="/profile"
                  className=" hover:bg-gray-400 px-3 py-1 rounded-xl  md:text-xl lg:text-2xl"
                >
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className=" hover:bg-gray-400 px-3 py-1 rounded-xl  md:text-xl lg:text-2xl"
                >
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>

        <button
          onClick={toggleMenu}
          className="text-white text-2xl pr-2 md:hidden "
        >
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </button>
      </div>

      {menuOpen && (
        <div className="absolute  top-20 right-0 w-full bg-white text-black shadow-md z-40 flex flex-col px-6 py-4 font-semibold text-lg md:hidden">
          <Link
            to="/"
            onClick={toggleMenu}
            className="py-2 border-b hover:text-amber-600"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={toggleMenu}
            className="py-2 border-b hover:text-amber-600"
          >
            About
          </Link>
          <Link
            to="/menu"
            onClick={toggleMenu}
            className="py-2 border-b hover:text-amber-600"
          >
            Menu
          </Link>
          <Link
            to="/blog"
            onClick={toggleMenu}
            className="py-2 border-b hover:text-amber-600"
          >
            Blog
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
