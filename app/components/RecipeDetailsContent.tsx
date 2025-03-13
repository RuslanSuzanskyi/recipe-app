'use client';

import { Suspense } from 'react';
import { useParams } from 'next/navigation';
import RecipeIngredientList from './RecipeIngridientList';
import RecipeInstructions from './RecipeInstructions';
import { useFetchRecipeDetails } from '../hooks/useFetchRecipes';
import Loading from './Loading';

export default function RecipeDetailsContent() {
  const params = useParams();
  const id = params?.id as string;
  const { recipe, error } = useFetchRecipeDetails(id);

  if (error) {
    return <p className="p-6 text-red-500">Error loading recipe details.</p>;
  };

  if (!recipe) {
    return <Loading />;
  };

  return (
    <div className="flex flex-col space-y-6">
      <h1 className="text-2xl font-bold">{recipe.title}</h1>
      <div className="flex flex-col space-y-6">
        <img src={recipe.image} alt={recipe.title} className="rounded-lg" />
        <div>
          <h2 className="text-xl font-semibold mb-4">Ingredients</h2>
          <Suspense fallback={<Loading />}>
            <RecipeIngredientList ingredients={recipe.extendedIngredients} />
          </Suspense>
          <h2 className="text-xl font-semibold mb-4">Instructions</h2>
          <Suspense fallback={<Loading />}>
            <RecipeInstructions analyzedInstructions={recipe.analyzedInstructions || []} instructions={''} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
