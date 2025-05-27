import React, { useEffect, useState } from "react";

import Mealdetailp from "./Mealdetailp";

const MenuDetail = () => {
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMeals(data.meals);
      })
      .catch((error) => console.error("API Error:", error));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-white p-6">
      <h1 className="text-4xl font-bold text-center mb-8">All Menu Items</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {meals.map((meal) => (
          <Mealdetailp key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
};

export default MenuDetail;
