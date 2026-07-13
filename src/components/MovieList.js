import MovieCard from "./MovieCard";
import ShimmerUI from "./ShimmerUI";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-3 py-3 text-white sm:px-4 lg:px-6">
      <h1 className="p-2 text-xl font-semibold sm:text-2xl lg:text-3xl">
        {title}
      </h1>
      <div className="flex overflow-x-auto hide-scrollbar">
        <div className="flex gap-2 sm:gap-3">
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
