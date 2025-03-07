'use client';

import { useSearchParams } from 'next/navigation';
import RecipeList from './RecipeList';
import { useFetchRecipes } from '../hooks/useFetchRecipes';
import { Suspense } from 'react';

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
    <Suspense fallback={<div>Loading...</div>}>
      <RecipeList recipes={recipes || []} />
    </Suspense> 
  );
};