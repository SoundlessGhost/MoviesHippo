export const getMovies = async () => {
  const res = await fetch("http://localhost:3000/api/movies", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch movies data");
  }
  const movies = await res.json();
  return movies;
};
