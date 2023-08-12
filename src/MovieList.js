import { Movie } from "./Movie";

// function AddMovie()
export function MovieList({ movieList, setMovieList }) {
  return (
    <div>
      <div className="movie-list">
        {movieList.map((mv, index) => (
          <Movie key={index} movie={mv} id={index} />
        ))}
      </div>
    </div>
  );
}
