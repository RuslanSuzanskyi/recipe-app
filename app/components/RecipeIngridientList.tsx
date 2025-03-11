import React from "react";
import { RecipeIngredientsProps } from "../lib/types";

export default function RecipeIngredientList ({ ingredients }: RecipeIngredientsProps) {
  if (!ingredients || ingredients.length === 0) {
    return <p>No ingredients available.</p>;
  }

  const uniqueIngredients = Array.from(new Map(ingredients.map((item) => [item.id, item])).values());

  return (
    <div className="mb-10">
      <ul className="space-y-4 list-disc list-inside">
        {uniqueIngredients.map((ingredient) => (
          <li key={ingredient.id}>{ingredient.original}</li>
        ))}
      </ul>
    </div>
  );
}
