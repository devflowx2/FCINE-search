const API_KEY = "a38501b63a686ba3c0aabcb7bcd12ac3";
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

export async function getPopularMovies() {
  const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US`);
  const data = await res.json();
  return data.results;
}

export async function searchMovies(query) {
  const res = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
  const data = await res.json();
  return data.results;
}

export async function getMovieDetails(id) {
  const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`);
  return await res.json();
}

export function getImageUrl(path) {
  return path ? `${IMAGE_BASE}${path}` : null;
}

export async function getWatchProviders(id) {
  const res = await fetch(`${BASE_URL}/movie/${id}/watch/providers?api_key=${API_KEY}`);
  const data = await res.json();
  return data.results;
}