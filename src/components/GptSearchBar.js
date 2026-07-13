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
    <div className="pt-[15%] flex justify-center">
      <form
        className="grid w-1/2 bg-black grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="p-4 m-4 col-span-9"
        />
        <button
          className="py-2 px-4 col-span-3 m-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
