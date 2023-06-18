// 77fe1bd5375b26847e90989b30479f0e
// https://api.themoviedborg/3
// https://image.tmdb.org/t/p/original/

import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_MOVIE_DB_BASE_URL,
});

export default instance;
