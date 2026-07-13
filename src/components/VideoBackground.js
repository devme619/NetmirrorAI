import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  useMovieTrailer(movieId);

  if (!trailerVideo?.key) {
    return <div className="aspect-video w-full bg-black" />;
  }

  return (
    <div className="absolute inset-0 z-0 h-full min-h-[60vh] w-full md:min-h-[70vh] lg:min-h-[80vh]">
      <iframe
        className="h-full w-full border-0"
        src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&loop=1&playlist=${trailerVideo.key}&controls=0&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
