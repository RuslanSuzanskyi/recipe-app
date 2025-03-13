import { RecipeInstructionsProps } from "../types/api";

export default function RecipeInstructions({ analyzedInstructions }: RecipeInstructionsProps) {
  if (!analyzedInstructions || analyzedInstructions.length === 0) {
    return <p>No instructions available.</p>;
  }

  return (
    <div>
      {analyzedInstructions.map((instruction, id) => (
        <div key={id} className="space-y-4 list-disc list-inside">
          {instruction.name && <h3 className="text-lg font-medium">{instruction.name}</h3>}
          <ol className="list-none space-y-1">
            {instruction.steps.map((step) => (
              <li key={step.number}>
                <span className="font-medium">Step {step.number}: </span>
                {step.step}
              </li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  );
};
