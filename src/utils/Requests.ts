const API_KEY = import.meta.env.import.meta.env.VITE_APP_MOVIE_DB_BASE_URL;

export const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/movie/top_rated?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/movie/top_rated?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/movie/top_rated?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/movie/top_rated?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/movie/top_rated?api_key=${API_KEY}&with_genres=99`,
};
