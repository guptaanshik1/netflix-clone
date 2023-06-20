import { IRowCMSData } from "../types/RowCMSData";
import { requests } from "../utils/Requests";
import {
  ACTION_MOVIES,
  COMEDY_MOVIES,
  DOCUMENTARIES,
  HORROR_MOVIES,
  NETFLIX_ORIGINALS,
  ROMANCE_MOVIES,
  TOP_RATED,
  TRENDING_NOW,
} from "../utils/titleConstants";

export const rowContent: IRowCMSData[] = [
  {
    title: NETFLIX_ORIGINALS,
    fetchUrl: requests.fetchNetflixOriginals,
    isLargeRow: true,
  },
  {
    title: TRENDING_NOW,
    fetchUrl: requests.fetchTrending,
    isLargeRow: false,
  },
  {
    title: TOP_RATED,
    fetchUrl: requests.fetchTopRated,
    isLargeRow: false,
  },
  {
    title: ACTION_MOVIES,
    fetchUrl: requests.fetchActionMovies,
    isLargeRow: false,
  },
  {
    title: COMEDY_MOVIES,
    fetchUrl: requests.fetchComedyMovies,
    isLargeRow: false,
  },
  {
    title: HORROR_MOVIES,
    fetchUrl: requests.fetchHorrorMovies,
    isLargeRow: false,
  },
  {
    title: ROMANCE_MOVIES,
    fetchUrl: requests.fetchRomanceMovies,
    isLargeRow: false,
  },
  {
    title: DOCUMENTARIES,
    fetchUrl: requests.fetchDocumentaries,
    isLargeRow: false,
  },
];
