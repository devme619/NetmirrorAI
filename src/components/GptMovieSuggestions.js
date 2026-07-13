import { useSelector } from "react-redux";
import MovieList from "./MovieList";
const GptMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
  if (!movieNames) return null;

  return (
    <div className="mx-3 mt-4 rounded-2xl bg-black/90 p-3 text-white shadow-lg backdrop-blur-sm sm:mx-4 sm:mt-6 sm:p-4 lg:mx-6">
      <div className="space-y-3">
        {movieNames.map((movie, index) => (
          <MovieList key={movie} title={movie} movies={movieResults[index]} />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
