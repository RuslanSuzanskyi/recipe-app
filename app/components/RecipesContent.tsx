import RecipeList from './RecipeList';
import { RecipesContentProps } from '../lib/types';
import { Suspense } from 'react';

export default function RecipesContent({ recipes }: RecipesContentProps) {
  if (!recipes || recipes.length === 0) {
    return <p className="p-6 text-red-500">No recipes found</p>;
  }

  return (
    <Suspense fallback={<div>Loading Recipes...</div>}>
      <RecipeList recipes={recipes} />
    </Suspense>
  );
}
