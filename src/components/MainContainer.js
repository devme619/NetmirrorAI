import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import ShimmerUI from "./ShimmerUI";

const MainContainer = () => {
  const movies = useSelector((store) => store?.movies?.addNowPlayingMovies);

  if (!movies || movies.length === 0) {
    return (
      <div className="w-full md:pt-0 pt-[30%] bg-black p-4">
        <ShimmerUI count={4} className="flex-col" />
      </div>
    );
  }

  const mainMovie = movies[0];
  const { original_title, overview, id } = mainMovie;

  return (
    <div className="relative w-full overflow-hidden bg-black">
      <VideoBackground movieId={id} />
      <VideoTitle title={original_title} overview={overview} />
    </div>
  );
};

export default MainContainer;
