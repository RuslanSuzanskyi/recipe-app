import { ReactNode } from "react";

export interface SearchParamsProps {
  query?: string;
  cuisine?: string;
  maxReadyTime?: string;
};

export interface SearchFormProps {
  searchParams: SearchParamsProps;
  setSearchParams: (params: SearchParamsProps) => void;
  onSubmit: (event: React.FormEvent) => void;
}

export interface RecipeProps {
  extendedIngredients: IngredientProps[];
  id: number;
  title: string;
  image: string;
  instructions?: string;
  readyInMinutes: number;
  servings: number;
  nutrition?: {
    nutrients: {
      name: string;
      amount: number;
      unit: string;
    };
  }[];
};

export interface RecipesPageProps {
  searchParams: SearchParamsProps;
};

export interface RecipeContextType {
  query: string;
  setQuery: (query: string) => void;
  cuisine: string;
  setCuisine: (cuisine: string) => void;
  maxReadyTime: string;
  setMaxReadyTime: (time: string) => void;
};

export interface RecipeDetailsProps {
  id: number;
  title: string;
  image: string;
  readyInMinutes: number;
  servings: number;
  extendedIngredients: {
    id: number;
    original: string;
  }[];
  instructions: string;
  nutrition?: {
    nutrients: Array<{
      name: string;
      amount: number;
      unit: string;
    }>;
  };
};

export interface RecipeDetailsPageProps {
  params: {
    id: string;
  };
};

export interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
};

export interface InputProps {
  type?: string;
  placeholder?: string;
  value: string | number;
  onChange: (value: string) => void;
  className?: string;
};

export interface SelectProps {
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
};

export interface RecipeListProps {
  recipes: RecipeProps[];
}

export interface RecipeDetailsContentProps {
  recipe: RecipeProps | null;
};

export interface IngredientProps {
  id: number;
  original: string;
};

export interface RecipeInstructionsProps {
  instructions: string;
}
export interface RecipeIngredientsProps {
  ingredients: IngredientProps[];
};


