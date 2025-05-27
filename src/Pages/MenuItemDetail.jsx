import { useParams } from "react-router";
import { useEffect, useState } from "react";

const MenuItemDetail = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((data) => setMeal(data.meals[0]));
  }, [id]);

  if (!meal) return <p>Loading...</p>;

  const ingredientsWithMeasures = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient && ingredient.trim()) {
      ingredientsWithMeasures.push(`${measure} ${ingredient}`);
    }
  }

  return (
    <div className="p-4 max-w-3xl mx-auto bg-gray-200 ">
      <h1 className="text-3xl font-bold mt-20 ">{meal.strMeal}</h1>
      <p>Category: {meal.strCategory}</p>
      <p>Area: {meal.strArea}</p>
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-full max-w-md mb-4 rounded-xl shadow"
      />

      <h2 className="text-2xl font-semibold mt-4 ">Ingredients</h2>
      <ul className="list-disc list-inside mb-4">
        {ingredientsWithMeasures.map((item) => (
          <li>{item}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mt-4 mb-2">Instructions</h2>
      <p className="mb-4 ">{meal.strInstructions}</p>

      {meal.strYoutube && (
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-2 sm:w-50 md:w-[80%]">
            Watch on YouTube
          </h2>
          <iframe
            className="w-full h-auto"
            src={`https://www.youtube.com/embed/${
              meal.strYoutube.split("=")[1]
            }`}
            title="YouTube video player"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default MenuItemDetail;
