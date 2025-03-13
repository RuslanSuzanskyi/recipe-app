import RecipeList from './RecipeList';
import { RecipesContentProps } from '../types/api';
import { Suspense } from 'react';
import Loading from './Loading';

export default function RecipesContent({ recipes }: RecipesContentProps) {
  if (!recipes || recipes.length === 0) {
    return <p className="p-6 text-red-500">No recipes found</p>;
  }

  return (
    <Suspense fallback={<Loading />}>
      <RecipeList recipes={recipes} />
    </Suspense>
  );
}
