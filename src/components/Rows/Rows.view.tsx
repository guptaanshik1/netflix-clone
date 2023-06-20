import { useRowsContext } from "./utils/context";
import Row from "./components/Row";
import { NETFLIX_ORIGINALS } from "../../utils/titleConstants";
import { requests } from "../../utils/Requests";

export default function RowsView() {
  const { rowData } = useRowsContext();
  return (
    <>
      <Row
        title={NETFLIX_ORIGINALS}
        url={requests.fetchNetflixOriginals}
        isLargeRow={false}
      />
    </>
  );
}
