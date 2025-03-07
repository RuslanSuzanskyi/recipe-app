import { ReactNode } from "react";

export interface SearchParamsProps {
  query?: string;
  cuisine?: string;
  maxTime?: string;
};

export interface RecipeProps {
  id: number;
  title: string;
  image: string;
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
}

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
}

export interface RecipeDetailsPageProps {
  params: {
    id: string;
  };
}

export interface SearchFormProps {
  searchParams: SearchParamsProps;
  setSearchParams: React.Dispatch<React.SetStateAction<SearchParamsProps>>;
  onSubmit: () => void;
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
export interface RecipeIngredientsProps {
  ingredients: IngredientProps[];
}


