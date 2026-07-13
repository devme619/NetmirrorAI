import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  const movieSections = [
    { title: "Now Playing", movies: movies?.addNowPlayingMovies },
    { title: "Popular", movies: movies?.addPopularMovies },
    { title: "Trending", movies: movies?.addNowPlayingMovies },
    { title: "New Releases", movies: movies?.addNowPlayingMovies },
  ];

  return (
    <div className="bg-black">
      <div className="mt-0 md:-mt-32 relative z-20 pl-4">
        {movieSections.map((section) => (
          <MovieList
            key={section.title}
            title={section.title}
            movies={section.movies}
          />
        ))}
      </div>
    </div>
  );
};

export default SecondaryContainer;
