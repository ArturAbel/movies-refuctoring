import { useState } from "react";
import useFetchMovies from "../hooks/useFetchMovies";
import useFilterMovies from "../hooks/useFilterMovies";
import MovieItems from "./MovieItems";
import Filters from "./Filters";
import "./MoiveList.css";

const MovieList = () => {
  const [sort, setSort] = useState("popularity.desc");
  const { movies, loading, error } = useFetchMovies(sort);
  const { filteredMovies, filter, setFilter } = useFilterMovies(movies);
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (movieId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(movieId)
        ? prevFavorites.filter((id) => id !== movieId)
        : [...prevFavorites, movieId]
    );
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="movie-list-container">
      <h1 className="movie-list-title">Movie List</h1>
      <Filters
        filter={filter}
        setFilter={setFilter}
        sort={sort}
        setSort={setSort}
      />
      <MovieItems
        movies={filteredMovies}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
      />
    </div>
  );
};

export default MovieList;
