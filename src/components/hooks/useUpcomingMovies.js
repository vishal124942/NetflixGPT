import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../../utils/constants";
import { addUpcomingMovies } from "../../utils/moviesSlice";
const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const getUpcomingmovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  };
  useEffect(() => {
    getUpcomingmovies();
  }, []);
};
export default useUpcomingMovies;
