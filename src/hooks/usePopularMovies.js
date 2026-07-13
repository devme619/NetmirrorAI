import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movies.addPopularMovies);

  useEffect(() => {
    if (popularMovies) return;

    const controller = new AbortController();

    const getPopularMovies = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/popular?page=1",
          { ...API_OPTIONS, signal: controller.signal },
        );

        if (!response.ok) {
          throw new Error("Failed to fetch popular movies");
        }

        const json = await response.json();
        dispatch(addPopularMovies(json?.results || []));
      } catch (error) {
        if (error.name !== "AbortError") {
          dispatch(addPopularMovies([]));
        }
      }
    };

    getPopularMovies();

    return () => controller.abort();
  }, [dispatch, popularMovies]);
};

export default usePopularMovies;
