import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black">
      {/*
    - Movie list - popular
      - horizontal cards
    - Nowplaying
    - trending
   */}
      <div className="-mt-32 relative z-20 pl-4">
        <MovieList title={"Now Playing"} movies={movies?.addNowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies?.addPopularMovies} />
        <MovieList title={"Now Playing"} movies={movies?.addNowPlayingMovies} />
        <MovieList title={"Now Playing"} movies={movies?.addNowPlayingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
