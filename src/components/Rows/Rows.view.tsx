import { useRowsContext } from "./utils/context";
import Row from "./components/Row";
import {
  DOCUMENTARIES,
  NETFLIX_ORIGINALS,
  ROMANCE_MOVIES,
  TRENDING_NOW,
} from "../../utils/titleConstants";
import { requests } from "../../utils/Requests";
import { TOP_RATED } from "../../utils/titleConstants";
import { ACTION_MOVIES } from "../../utils/titleConstants";
import { COMEDY_MOVIES } from "../../utils/titleConstants";
import { HORROR_MOVIES } from "../../utils/titleConstants";

export default function RowsView() {
  // @ts-ignore
  const { rowData } = useRowsContext();
  return (
    <>
      <Row
        title={NETFLIX_ORIGINALS}
        url={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row
        title={TRENDING_NOW}
        url={requests.fetchTrending}
        isLargeRow={false}
      />
      <Row title={TOP_RATED} url={requests.fetchTopRated} isLargeRow={false} />
      <Row
        title={ACTION_MOVIES}
        url={requests.fetchActionMovies}
        isLargeRow={false}
      />
      <Row
        title={COMEDY_MOVIES}
        url={requests.fetchComedyMovies}
        isLargeRow={false}
      />
      <Row
        title={HORROR_MOVIES}
        url={requests.fetchHorrorMovies}
        isLargeRow={false}
      />
      <Row
        title={ROMANCE_MOVIES}
        url={requests.fetchRomanceMovies}
        isLargeRow={false}
      />
      <Row
        title={DOCUMENTARIES}
        url={requests.fetchDocumentaries}
        isLargeRow={false}
      />
    </>
  );
}
