// src/moviesApi.js
const BACKEND_URL = "http://localhost:4000/api/movies";

export const updateSearchCount = async (searchTerm, movie) => {
  try {
    await fetch(`${BACKEND_URL}/search`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        search_term: searchTerm,
        movie_id: movie.id,
        poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        title: movie.title,
      }),
    });
  } catch (err) {
    console.error("Error updating search count:", err);
  }
};

export const getTrendingMovies = async () => {
  try {
    const res = await fetch(`${BACKEND_URL}/trending`);
    if (!res.ok) throw new Error("Failed to fetch trending movies");
    return await res.json();
  } catch (err) {
    console.error("Error fetching trending movies:", err);
    return [];
  }
};
