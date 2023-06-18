export interface BannerData {
  page: number;
  results: MovieData[];
  total_results: number;
  total_pages: number;
}

export interface MovieData {
  backdrop_path: string;
  first_air_date: string;
  id: number;
  name: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
  origin_language: string;
}
