import { useState } from "react";

const useFilterMovies = (movies) => {
  const [filter, setFilter] = useState("All");

  const filteredMovies =
    filter === "All"
      ? movies
      : movies.filter((movie) => movie.genre_ids.includes(parseInt(filter)));

  return { filteredMovies, filter, setFilter };
};

export default useFilterMovies;
