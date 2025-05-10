import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router"; // Corrected import
import logo1 from "../Images/logo1.webp";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  
  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userData");
    setIsLoggedIn(false);
  };

  return (
    <div className="bg-black h-20 fixed top-0 w-screen z-50">
      <div className="flex items-center justify-between px-4 md:px-10 h-full">
        <img src={logo1} alt="logo" className="h-16 rounded-full bg-amber-200" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-2xl text-white">
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

     
        <ul className="hidden md:flex gap-6 text-2xl text-white">
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
            <div >
            <li className="flex gap-4 items-center">
              <NavLink to="/profile" >Profile</NavLink> 
              <button onClick={handleLogout}>Logout</button>
            </li>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
