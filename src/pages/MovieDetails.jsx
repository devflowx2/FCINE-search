import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getMovieDetails, getImageUrl, getWatchProviders } from "../api/tmdb";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    getMovieDetails(id).then(setMovie);
    getWatchProviders(id).then(setProviders);
  }, [id]);

  if (!movie) return <p className="loading-text">loading</p>;

  const countryProviders = providers?.US;

  return (
    <div className="details-container">
      <Link to="/" className="back-link">⬅ Back</Link>
      <div className="details-content">
        <img
          src={getImageUrl(movie.poster_path)}
          alt={movie.title}
          className="details-poster"
        />
        <div>
          <h1 className="details-title">{movie.title}</h1>
          <p className="details-meta"><strong>Year:</strong> {movie.release_date}</p>
          <p className="details-meta"><strong>Rating:</strong> ⭐ {movie.vote_average}</p>
          <p className="details-meta"><strong>Overview:</strong> {movie.overview}</p>

          {countryProviders?.flatrate && (
            <div className="providers-box">
              <strong>Available on:</strong>
              <div className="provider-logos">
                {countryProviders.flatrate.map((p) => (
                  <img
                    key={p.provider_id}
                    src={getImageUrl(p.logo_path)}
                    alt={p.provider_name}
                    title={p.provider_name}
                    className="provider-logo"
                  />
                ))}
              </div>
              {countryProviders.link && (
                <a
                  href={countryProviders.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="watch-link"
                >
                  watch Now ➡
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}