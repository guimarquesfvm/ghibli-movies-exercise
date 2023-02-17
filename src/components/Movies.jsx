import { useContext } from "react";
import MoviesContext from "../context/MoviesContext";
import Movie from "./Movie";

function Movies() {
  const { moviesArray, favoriteMovies, handleClick } = useContext(
    MoviesContext
  );

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Ghibli Movies</h1>
      <ul
        style={{
          textAlign: "center",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr"
        }}
      >
        {moviesArray.map((movie) => (
          <Movie movie={movie} />
        ))}
      </ul>
      <h1 style={{ textAlign: "center" }}>Favorite Movies</h1>
      <ul
        style={{
          textAlign: "center",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr"
        }}
      >
        {favoriteMovies.length === 0 ? (
          <h2>There are no favorited movies</h2>
        ) : (
          favoriteMovies.map((movie) => <Movie movie={movie} />)
        )}
      </ul>
    </>
  );
}

export default Movies;
