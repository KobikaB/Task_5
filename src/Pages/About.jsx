import React from "react";

const About = () => {
  return (
    <div className="h-screen  bg-blue-300  w-screen ">
      <div className="max-w-3xl mx-auto bg-blue-300  shadow-2xl rounded-2xl p-6 ">
        <h1 className="text-5xl font-extrabold text-center mb-8 mt-30 text-blue-800">
          About FlavorMate
        </h1>

        <p className="text-lg  text-gray-700 mb-6">
          FlavorMate is your personal kitchen. It helps you explore and cook
          tasty meals from all over the world, with a focus on traditional
          Canadian recipes like
          <span className="text-blue-500 font-medium"> Poutine ,</span>
          <span className="text-blue-500 font-medium">Butter Tarts </span> and
          <span className="text-blue-500 font-medium">Nanaimo Bars</span>.
        </p>

        <p className="text-lg  text-gray-700 mb-6">
          Whether you're a beginner or an experienced cook, FlavorMate makes
          meal discovery fun, simple, and exciting. You can browse meals, check
          ingredients, and cook like a pro with our clean and easy-to-follow
          interface.
        </p>

        <p className="text-lg  text-gray-700 mb-6">
          We believe that food is not just for eating - it's a way to connect,
          celebrate cultures, and create memories. That's why we bring you
          authentic flavors right from your browser. 🍁
        </p>
      </div>
    </div>
  );
};

export default About;
