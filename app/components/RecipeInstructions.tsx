import { RecipeInstructionsProps } from "../lib/types";

export default function RecipeInstructions({ instructions }: RecipeInstructionsProps) {
  return (
    <div>
      {instructions || "No instructions available."}
    </div>
  );
};