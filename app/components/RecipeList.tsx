import { Suspense } from 'react';
import { RecipeListProps } from '../lib/types';
import Card from './Card';

export default function RecipeList({ recipes }: RecipeListProps) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <Suspense fallback={<div>Loading Recipes</div>}>
        {recipes.map((recipe) => (
          <Card key={recipe.id} recipe={recipe} />
        ))}  
      </Suspense>
    </ul>
  );
}