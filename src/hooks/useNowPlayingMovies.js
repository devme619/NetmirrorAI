import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const nowPlayingMovies = useSelector(
    (store) => store.movies.addNowPlayingMovies,
  );

  useEffect(() => {
    if (nowPlayingMovies) return;

    const controller = new AbortController();

    const getNowPlayingMovies = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/now_playing?page=1",
          { ...API_OPTIONS, signal: controller.signal },
        );

        if (!response.ok) {
          throw new Error("Failed to fetch now playing movies");
        }

        const json = await response.json();
        dispatch(addNowPlayingMovies(json?.results || []));
      } catch (error) {
        if (error.name !== "AbortError") {
          dispatch(addNowPlayingMovies([]));
        }
      }
    };

    getNowPlayingMovies();

    return () => controller.abort();
  }, [dispatch, nowPlayingMovies]);
};

export default useNowPlayingMovies;
