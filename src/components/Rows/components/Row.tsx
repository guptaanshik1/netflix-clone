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
      <div className="ml-[20px]">
        {title}
        <div className="flex overflow-y-hidden overflow-x-scroll p-5 scrollbar">
          {data?.results?.map((movie) => {
            return (
              <img
                className={`${
                  isLargeRow && "large-poster"
                } max-h-[150px] object-contain mr-2 transition-all duration-[450ms] hover:scale-[1.08] hover:opacity-1 z-10`}
                key={movie?.id}
                src={`https://image.tmdb.org/t/p/original/${
                  !isLargeRow ? movie?.backdrop_path : movie?.poster_path
                }`}
                alt=""
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Row;
