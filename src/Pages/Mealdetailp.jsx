import React from "react";

const Mealdetailp = ({ meal }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-4 w-64 hover:bg-gray-400">
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="rounded-lg w-full h-60 object-cover"
      />
      <h3 className="text-xl font-semibold mt-2 text-center bg-blue-200 ">{meal.strMeal}</h3>
    </div>
  );
};

export default Mealdetailp;
