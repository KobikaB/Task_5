import React from "react";

const Mealdetailp = ({ meal }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-4 w-64">
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="rounded-lg w-full h-40 object-cover"
      />
      <h3 className="text-xl font-semibold mt-2 text-center">{meal.strMeal}</h3>
    </div>
  );
};

export default Mealdetailp;
