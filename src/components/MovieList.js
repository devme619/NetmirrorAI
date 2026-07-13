import MovieCard from "./MovieCard";
import ShimmerUI from "./ShimmerUI";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6 text-white">
      <h1 className="text-3xl p-4">{title}</h1>
      <div className="flex overflow-x-scroll hide-scrollbar">
        <div className="flex">
          {movies && movies.length > 0 ? (
            movies.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie?.poster_path} />
            ))
          ) : (
            <ShimmerUI count={6} />
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
