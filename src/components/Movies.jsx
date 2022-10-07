import React from "react";
import { Movie } from "./Movie";

function Movies(props) {
  const { movies = [] } = props;

  return (
    <div className="movies">
      {movies.length ? (
        movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
      ) : (
        <p>
          Sorry, try to write something in searching string (for example: matrix
          or avengers)
        </p>
      )}
    </div>
  );
}

export { Movies };
