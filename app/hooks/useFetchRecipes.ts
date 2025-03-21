import { useEffect, useState } from 'react';
import { RecipeProps } from '../types/api';
import { fetchRecipeDetails, fetchRecipes } from '../lib/api';

export function useFetchRecipes(query: string, cuisine: string, maxTime?: number) {
    const [recipes, setRecipes] = useState<RecipeProps[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        async function getRecipes() {
            try {
                const data = await fetchRecipes(query, cuisine, maxTime?.toString() || '');
                setRecipes(Array.isArray(data) ? data : []);
            } catch (err) {
                setError((err as Error).message);
                setRecipes([]);
            } finally {
                setLoading(false);
            }
        }

        getRecipes();
    }, [query, cuisine, maxTime]);

    return { recipes, error, loading };
};

export function useFetchRecipeDetails(id: string) {
  const [recipe, setRecipe] = useState<RecipeProps | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getRecipeDetails() {
      try {
        const data = await fetchRecipeDetails(id);
        setRecipe(data);
      } catch (err) {
        setError((err as Error).message);
      }
    }

    getRecipeDetails();
  }, [id]);

  return { recipe, error };
}
