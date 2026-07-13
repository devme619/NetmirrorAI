import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  useEffect(() => {
    if (!movieId) return;
    if (trailerVideo) return;

    const controller = new AbortController();

    const getMovieVideo = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
          { ...API_OPTIONS, signal: controller.signal },
        );

        if (!response.ok) {
          throw new Error("Failed to fetch movie trailer");
        }

        const json = await response.json();
        const filterData = json?.results?.filter(
          (video) => video.type === "Trailer",
        );
        const trailer = filterData?.length ? filterData[0] : json?.results?.[0];
        dispatch(addTrailerVideo(trailer || null));
      } catch (error) {
        if (error.name !== "AbortError") {
          dispatch(addTrailerVideo(null));
        }
      }
    };

    getMovieVideo();

    return () => controller.abort();
  }, [dispatch, movieId, trailerVideo]);
};

export default useMovieTrailer;
