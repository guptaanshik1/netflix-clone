import { truncateChars } from "../../utils/truncateChars";
import useBannerData from "../../hooks/useBannerData";
import { randomFromArray } from "../../utils/randomFromArray";
import { MovieData } from "../../types/BannerData";

const BannerComponent = () => {
  const { data: bannerData, isLoading } = useBannerData();

  if (isLoading) return <></>;

  const randomBanner = randomFromArray(bannerData?.results as MovieData[]);

  return (
    <header
      className="h-[500px] relative object-contain text-[#ffffff]"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${bannerData?.results?.[randomBanner]?.backdrop_path}")`,
      }}
    >
      <div className="ml-[30px] pt-[140px] h-[200px] border border-red-500">
        <h1 className="text-4xl leading-8 pb-[0.3rem] font-extrabold">
          {bannerData?.results?.[randomBanner]?.name ||
            bannerData?.results?.[randomBanner]?.original_name}
        </h1>
        <div className="">
          <button className="cursor-pointer text-[#ffffff] outline-none border-none font-bold rounded-[10px] px-8 mr-4 py-2 bg-black hover:bg-white hover:text-black hover:transition-all duration-[0.4s]">
            Play
          </button>
          <button className="cursor-pointer text-[#ffffff] outline-none border-none font-bold rounded-[10px] px-8 mr-4 py-2 bg-black hover:bg-white hover:text-black hover:transition-all duration-[0.4s]">
            My List
          </button>
        </div>
        <h1 className="w-[350px] leading-5 pt-4 text-base max-w-sm h-20">
          {truncateChars(
            `${bannerData?.results?.[randomBanner]?.overview}`,
            150
          )}
        </h1>
      </div>

      <div
        className="h-32"
        style={{
          backgroundImage: `linearGradient(180deg, transparent, rgba(black), #111111)`,
        }}
      />
    </header>
  );
};

export default BannerComponent;
// src="https://raw.githubusercontent.com/thatanjan/netflix-clone-yt/youtube/media//banner.jpg"
