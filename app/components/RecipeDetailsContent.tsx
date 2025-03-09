'use client';
import { useParams } from 'next/navigation';
import RecipeIngredientList from './RecipeIngridientList';
import { Suspense } from 'react';
import { useFetchRecipeDetails } from '../hooks/useFetchRecipes';
import RecipeInstructions from './RecipeInstructions';

export default function RecipeDetailsContent() {
  const params = useParams();
  const id = params?.id as string;
  const { recipe, error } = useFetchRecipeDetails(id as string);

  if (error) {
    return <p className="p-6 text-red-500">Error loading recipe details.</p>;
  }

  if (!recipe) {
    return <p className="p-6">Loading recipe details...</p>;
  }

  return (
    <div className="flex flex-col space-y-6">
      <h1 className="text-2xl font-bold">{recipe.title}</h1>
      <div className="flex flex-col space-y-6">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="rounded-lg"
        />
        <div>
          <h2 className="text-xl font-semibold mb-4">Ingredients</h2>
          <Suspense fallback={<div>Loading ingredients...</div>}>
            <RecipeIngredientList ingredients={recipe.extendedIngredients} />
          </Suspense>
          <h2 className="text-xl font-semibold mb-4">Instructions</h2>
          <Suspense fallback={<div>Loading instructions...</div>}>
            <RecipeInstructions instructions={recipe.instructions || ""} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}