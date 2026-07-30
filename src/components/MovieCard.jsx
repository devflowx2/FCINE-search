import { Link } from "react-router-dom";
import { getImageUrl } from "../api/tmdb";

export default function MovieCard({ movie, index }) {
  return (
    <Link
      to={`/movie/${movie.id}`}
      className="movie-card"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <img
        src={getImageUrl(movie.poster_path)}
        alt={movie.title}
        className="movie-poster"
      />
      <div className="movie-info">
        <p className="movie-title">{movie.title}</p>
        <p className="movie-year">{movie.release_date?.slice(0, 4)}</p>
      </div>
    </Link>
  );
}