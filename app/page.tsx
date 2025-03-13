"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import SearchForm from "./components/SearchForm";
import Container from "./components/Container";
import { useRecipeContext } from "./context/RecipeContext";

export default function HomePage() {
  const router = useRouter();
  const { query, setQuery, cuisine, setCuisine, maxReadyTime, setMaxReadyTime } = useRecipeContext();
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    setDisabled(!query && !cuisine && !maxReadyTime);
  }, [query, cuisine, maxReadyTime]);

  function handleSearch() {
    const params = new URLSearchParams();
  
    if (query) params.set("query", query);
    if (cuisine) params.set("cuisine", cuisine);
    if (maxReadyTime) params.set("maxReadyTime", maxReadyTime);
  
    router.push(`/recipes?${params.toString()}`);
  };
  
  return (
    <Container>
      <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-primary to-secondary">
        <h1 className="text-5xl font-bold text-center mb-8">Recipe Finder</h1>
        <div className="w-full max-w-2xl fade-in">
          <SearchForm
            searchParams={{ query, cuisine, maxReadyTime }}
            setSearchParams={(params) => {
              setQuery(params.query || "");
              setCuisine(params.cuisine || "");
              setMaxReadyTime(params.maxReadyTime || "");
            }}
            onSubmit={handleSearch}
          />
        </div>
      </div>
    </Container>
  );
}
