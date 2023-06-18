import React from "react";
import { truncateChars } from "../../utils/truncateChars";

const BannerComponent = () => {
  return (
    <header
      className="h-[500px] relative object-contain text-[#ffffff]"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundImage: `url("https://raw.githubusercontent.com/thatanjan/netflix-clone-yt/youtube/media//banner.jpg")`,
      }}
    >
      <div className="ml-[30px] pt-[140px] h-[200px] border border-red-500">
        <h1 className="text-4xl leading-8 pb-[0.3rem] font-extrabold">
          Movie Name
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
          {truncateChars(`asdadasd`, 150)}
        </h1>
      </div>

      <div
        className="h-32 border border-green-600"
        style={{
          backgroundImage: `linearGradient(180deg, transparent, rgba(37, 37, 37, 0.61), #111111)`,
        }}
      />
    </header>
  );
};

export default BannerComponent;
// src="https://raw.githubusercontent.com/thatanjan/netflix-clone-yt/youtube/media//banner.jpg"
