import React, { useEffect, useState } from "react";
import Mealdetailp from "./Mealdetailp";
import { useParams } from "react-router";

const Menudetail = () => {
  const { id } = useParams();
  const [menuData, setMenuData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian")
      .then((response) => response.json())
      .then((data) => {
        setMenuData(data.meals);
        console.log(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching menu data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!menuData) {
    return <div>No meals found.</div>;
  }

  return (
    <div className="w-screen bg-blue-200">
      
      <div className="flex flex-wrap justify-around mt-[5%]">
        {menuData.map((meal) => (
          <Mealdetailp key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
};

export default Menudetail;
