import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import ai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((state) => state.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const handleGptSearchClick = async () => {
    const gptQuery =
      "Act as a Movie Recommendation System and suggest some movies for the query" +
      searchText.current.value +
      ". Give me names of 5 movies if not asked for number of movies specifically, comma seperated like the example result given ahead. Example Result: Inception, Fight Club, don, dhurandar, Dune ";
    const gptResults = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: gptQuery,
    });
    const gptMovies = gptResults.text.split(",");
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);
    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults }),
    );
  };

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS,
    );
    const json = await data.json();
    return json.results;
  };

  return (
    <div className="flex justify-center px-3 pt-6 sm:px-4 md:px-6 lg:px-8 lg:pt-8">
      <form
        className="flex w-full flex-col gap-3 rounded-2xl bg-black/80 p-3 shadow-lg backdrop-blur-sm sm:flex-row sm:items-center sm:p-4 md:w-3/4 lg:w-1/2"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="w-full rounded-md border border-gray-700 bg-gray-900 p-3 text-sm text-white placeholder:text-gray-400 sm:flex-1 sm:p-4"
        />
        <button
          className="w-full rounded-lg bg-red-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-600 sm:w-auto"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
