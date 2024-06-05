import { useState, useEffect } from "react";

const useFetchMovies = (sort) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiKey = "d1643824a81176e587be5c7c3ea339b6"; // Replace with your TMDb API key

  useEffect(() => {
    const fetchMovies = async () => {
      const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=${sort}`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [sort]);

  return { movies, loading, error };
};

export default useFetchMovies;
