import { useEffect, useState } from "react";
import { getPopularMovies, searchMovies } from "../api/tmdb";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("popular movies");

  useEffect(() => {
    getPopularMovies().then(setMovies);
  }, []);

  const handleSearch = async (query) => {
    const results = await searchMovies(query);
    setMovies(results);
    setTitle(`search results for: ${query}`);
  };

  return (
    <div>
      <div className="app-header">
        <h1 className="app-title">🎬Movie site</h1>
        <SearchBar onSearch={handleSearch} />
      </div>
      <h2 className="section-title">{title}</h2>
      <div className="movie-grid">
        {movies.map((movie, index) => (
          <MovieCard key={movie.id} movie={movie} index={index} />
        ))}
      </div>
    </div>
  );
}