const API_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000/api";

export async function fetchRecipes(query: string, cuisine: string, maxReadyTime: string) {
    const res = await fetch(`${API_URL}/api/recipes?query=${query}&cuisine=${cuisine}&maxReadyTime=${maxReadyTime}`);
    const data = await res.json();

    return data.results || [];
}

export async function fetchRecipeDetails(id: string) {
    const res = await fetch(`${API_URL}/api/recipes/${id}`);
    return res.json();
}
