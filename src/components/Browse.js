import { useMemo } from "react";
import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import GptSearch from "./GptSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();

  const content = useMemo(() => {
    if (showGptSearch) {
      return <GptSearch />;
    }

    return (
      <>
        <MainContainer />
        <SecondaryContainer />
      </>
    );
  }, [showGptSearch]);

  return (
    <div>
      <Header />
      {content}
    </div>
  );
};

export default Browse;
