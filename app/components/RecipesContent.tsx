'use client';

import { useSearchParams } from 'next/navigation';
import RecipeList from './RecipeList';
import { Suspense } from 'react';
import { useFetchRecipes } from '../hooks/useFetchRecipes';

export default function RecipesContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get('query') || '';
  const cuisine = searchParams.get('cuisine') || '';
  const maxTime = searchParams.get('maxTime') ? Number(searchParams.get('maxTime')) : undefined;

  const { recipes, error } = useFetchRecipes(query, cuisine, maxTime);

  if (error) {
    return <p className="p-6 text-red-500">{error}</p>;
  }

  return (
    <Suspense fallback={<div>Loading recipes...</div>}>
      <RecipeList recipes={recipes || []} />
    </Suspense>
  );
};