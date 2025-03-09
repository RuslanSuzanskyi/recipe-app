import { RecipeInstructionsProps } from "../lib/types";

export default function RecipeInstructions({ instructions }: RecipeInstructionsProps) {
  return (
    <div>
      <p>{instructions || "No instructions available."}</p>
    </div>
  );
};