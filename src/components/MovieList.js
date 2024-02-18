import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (movies === null || movies === undefined) {
    return <p>Loading...</p>;
  }
  return (
    <div className="px-6 ">
      <h1 className="text-3xl py-4  ">{title}</h1>

      <div className="flex overflow-x-scroll ">
        <div className="flex">
          {movies.map((movie, index) => (
            <MovieCard
              key={movie.id}
              posterPath={movie.poster_path}
              movieId={movie.id}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
