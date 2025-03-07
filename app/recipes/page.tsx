'use client';

import Container from '../components/Container';
import RecipesContent from '../components/RecipesContent';

export default function RecipesPage() {
  return (
    <Container>
      <div className="py-8">
        <h1 className="text-2xl font-bold mb-6 text-center">Recipes</h1>
        <RecipesContent />
      </div>  
    </Container>
  );
}