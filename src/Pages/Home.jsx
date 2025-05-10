import React from "react";
import image1 from "../Images/i1.jpg";
import { Link } from "react-router";
import { useEffect } from "react";


const Home = () => {

  

  
  return (
    <>
      <div>
        <img
          src={image1}
          alt="i1"
          className="w-screen h-screen bg-cover  bg-center "
        />
      </div>
      <div className="absolute inset-0 bg-opacity-40 flex flex-col items-center justify-center text-center px-4 ">
        <h1 className="text-white text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg bg-blue-500 p-4 rounded-2xl">
          🍁 Welcome to FlavorMate-Taste the Best of Canada!
        </h1>

        <Link to="/about">
          <button className="bg-amber-500 p-3 m-3 rounded-2xl">
            Learn More
          </button>
        </Link>
      </div>
    </>
  );
};

export default Home;
