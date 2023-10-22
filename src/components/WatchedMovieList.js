import TheWatchedMovie from "./TheWatchedMovie";

export default function WatchedMovieList({ watched, onDeleteWatch }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <TheWatchedMovie
          movie={movie}
          key={movie.imdbID}
          onDeleteWatch={onDeleteWatch}
        />
      ))}
    </ul>
  );
}
