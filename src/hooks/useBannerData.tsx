import { useQuery } from "react-query";
import { requests } from "../utils/Requests";
import instance from "../utils/axios";
import { BannerData } from "../types/BannerData";

async function getBannerData(): Promise<BannerData> {
  const { data } = await instance.get(requests.fetchNetflixOriginals);
  return data;
}

export default function useBannerData() {
  const { data, isLoading } = useQuery("banner-data", () => getBannerData(), {
    onError: (err) => {
      console.error(err);
    },
  });

  return { data, isLoading };
}
