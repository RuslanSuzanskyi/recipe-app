'use client';

import { useState, useEffect } from 'react';
import { RecipeProps, RecipeDetailsProps } from '../lib/types';

export function useFetchRecipes(query: string, cuisine: string, maxTime: number | undefined) {
  const [recipes, setRecipes] = useState<RecipeProps[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
      const url = new URL(`${baseUrl}/api/recipes`);
      url.searchParams.append('query', query);
      url.searchParams.append('cuisine', cuisine);
      if (maxTime) url.searchParams.append('maxTime', maxTime.toString());

      try {
        const response = await fetch(url.toString());
        if (!response.ok) throw new Error(`Ошибка загрузки рецептов: ${response.status}`);

        const data = await response.json();
        setRecipes(data.results);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [query, cuisine, maxTime]);

  return { recipes, loading, error };
}

export function useFetchRecipeDetails(id: string) {
  const [recipe, setRecipe] = useState<RecipeDetailsProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
      const url = `${baseUrl}/api/recipes/${id}`;

      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch recipe details');

        const data = await response.json();
        setRecipe(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipeDetails();
  }, [id]);

  return { recipe, loading, error };
}