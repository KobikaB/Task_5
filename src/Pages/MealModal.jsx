import React from "react";
import CloseIcon from "../images/close.svg";

const MealModal = ({ meal, onClose }) => {
  if (!meal) return null;

  return (
    <div className="fixed inset-0 bg-black  flex items-center justify-center ">
      <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
        <button onClick={onClose} className="absolute top-0 right-0">
          <img src={CloseIcon} alt="close" className="w-8 h-8 " />
        </button>
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="w-full h-100 object-cover rounded-md"
        />
        <h2 className="text-2xl font-bold mt-4">{meal.strMeal}</h2>
      </div>
    </div>
  );
};

export default MealModal;
