import React, { useEffect } from "react";
import image1 from "../images/i1.jpg";
import { Link, useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (!userData) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <>
      <div className="relative w-full h-screen ">
        <img
          src={image1}
          alt="i1"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-4xl  md:text-7xl font-extrabold mb-4 bg-blue-500 p-4 rounded-2xl">
            🍁 Welcome to FlavorMate - Taste the Best of Canada!
          </h1>
          <Link to="/about">
            <button className="bg-amber-500 p-3 m-3 rounded-2xl text-lg">
              Learn More
            </button>
          </Link>
        </div>
      </div>

      <div className="w-full bg-gray-100">
        <div className="p-5 text-base sm:text-lg md:text-2xl text-center bg-gray-300">
          <h1>The world chooses Canada for quality and goodness</h1>
          <p>200+ countries worldwide enjoy Canadian food</p>
          <p>5th largest exporter of agri-food and seafood in the world</p>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold underline mt-10">
            Discover Canada - the world's kitchen
          </h2>

          <p className="text-justify mt-5 px-4">
            When it comes to food, Canadians take great pride in sharing the
            best of Canada with the world. The quality and excellence found in
            every product stem from the commitment our farmers, fishers and food
            processors make every day. Sustainably grown and raised.
            Innovatively produced. Trusted quality assurance and food safety
            standards. Distinctively delicious food for your table.
          </p>

          <Link
            className="inline-block bg-black text-white rounded-xl p-3 text-xl mt-6"
            to="/menu"
          >
            Taste the Canadian Difference
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
