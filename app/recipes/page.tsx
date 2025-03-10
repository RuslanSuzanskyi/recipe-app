import Container from "../components/Container";
import RecipesContent from "../components/RecipesContent";
import { fetchRecipes } from "../lib/api";

export default async function RecipesPage({
  searchParams,
}: {
  searchParams: { query?: string; cuisine?: string; maxReadyTime?: string };
}) {
  const recipes = await fetchRecipes(
    searchParams.query || '',
    searchParams.cuisine || '',
    searchParams.maxReadyTime || ''
  );

  return (
    <Container>
      <div className="py-8">
        <h1 className="text-2xl font-bold mb-6 text-center">Recipes</h1>
        <RecipesContent recipes={recipes} />
      </div>
    </Container>
  );
};
