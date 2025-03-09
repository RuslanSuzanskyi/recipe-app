"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface RecipeContextType {
    query: string;
    setQuery: (query: string) => void;
    cuisine: string;
    setCuisine: (cuisine: string) => void;
    maxReadyTime: string;
    setMaxReadyTime: (time: string) => void;
}

const RecipeContext = createContext<RecipeContextType | undefined>(undefined);

export function RecipeProvider({ children }: { children: ReactNode }) {
    const [query, setQuery] = useState("");
    const [cuisine, setCuisine] = useState("");
    const [maxReadyTime, setMaxReadyTime] = useState("");

    return (
        <RecipeContext.Provider value={{ query, setQuery, cuisine, setCuisine, maxReadyTime, setMaxReadyTime }}>
          {children}
        </RecipeContext.Provider>
    );
}

export function useRecipeContext() {
    const context = useContext(RecipeContext);
    if (!context) throw new Error("useRecipeContext must be used within a RecipeProvider");
    return context;
}
