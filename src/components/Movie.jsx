import { useContext } from "react";
import MoviesContext from "../context/MoviesContext";

export default function Movie({ movie }) {
  const { favoriteMovies, handleClick } = useContext(MoviesContext);

  return (
    <div key={movie.id}>
      <li>{movie.title}</li>

      <img
        src={movie.image}
        alt={`${movie.title} cover`}
        style={{ width: 200 }}
      />

      <br />

      <button onClick={(event) => handleClick(event)} name={movie.title}>
        {favoriteMovies.some((e) => e.title === movie.title)
          ? "Favorited"
          : "Favorite"}
      </button>

      <hr />
    </div>
  );
}
