import { useState } from "react";
import MoviesContext from "./MoviesContext";

function MoviesProvider({ children }) {
  const API_URL = "https://api-trybe-frontend.vercel.app/api/ghibli-animations";

  const [moviesArray, setMoviesArray] = useState([]);
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useState(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setMoviesArray(data));
  }, []);

  const handleClick = ({ target: { name } }) => {
    const currMovie = moviesArray.find((movie) => movie.title === name);
    if (favoriteMovies.some((movie) => movie === currMovie)) {
      const newArray = favoriteMovies.filter((movie) => movie !== currMovie);
      setFavoriteMovies(newArray);
    } else {
      setFavoriteMovies([...favoriteMovies, currMovie]);
    }
  };

  return (
    <MoviesContext.Provider
      value={{
        favoriteMovies,
        setFavoriteMovies,
        moviesArray,
        setMoviesArray,
        handleClick
      }}
    >
      <div>{children}</div>
    </MoviesContext.Provider>
  );
}

export default MoviesProvider;
