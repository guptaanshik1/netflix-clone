import useRowData from "../../../hooks/useRowData";

interface IProps {
  title: string;
  url: string;
  isLargeRow: boolean;
}

// @ts-ignore
const Row = ({ title, url, isLargeRow = false }: IProps) => {
  // @ts-ignore
  const { data, isLoading } = useRowData(url);

  return (
    <>
      <div className="">
        {title}
        {data?.results?.map((movie) => {
          return (
            <img
              src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
              alt=""
            />
          );
        })}
      </div>
    </>
  );
};

export default Row;
