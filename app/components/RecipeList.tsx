import { Suspense } from 'react';
import { RecipeListProps } from '../types/api';
import Card from './Card';
import Loading from './Loading';

export default function RecipeList({ recipes }: RecipeListProps) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <Suspense fallback={<Loading />}>
        {recipes.map((recipe) => (
          <Card key={recipe.id} recipe={recipe} />
        ))}  
      </Suspense>
    </ul>
  );
}