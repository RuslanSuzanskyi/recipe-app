import Container from "@/app/components/Container";
import RecipeDetailsContent from "@/app/components/RecipeDetailsContent";

export default function RecipeDetailsPage() {
  return (
    <Container>
      <div className="py-8">
        <RecipeDetailsContent />
      </div>  
    </Container>
  );
}