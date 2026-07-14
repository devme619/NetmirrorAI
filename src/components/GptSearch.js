import { BG_URL } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <div className="absolute inset-0 min-h-screen bg-black">
      <div className="absolute inset-0 z-0 h-screen w-full">
        <img
          src={BG_URL}
          alt="bg"
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="relative z-10 min-h-screen pb-8 pt-[40%] md:pt-[20%] lg:pt-[10%]">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </div>
  );
};

export default GptSearch;
