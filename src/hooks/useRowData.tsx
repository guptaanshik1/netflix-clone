import { useQuery } from "react-query";
import { BannerData } from "../types/BannerData";
import instance from "../utils/axios";

async function rowData(endpoint: string): Promise<BannerData> {
  const { data } = await instance.get(endpoint);
  return data;
}

export default function useRowData(endpoint: string) {
  const { data, isLoading } = useQuery("row-data", () => rowData(endpoint));

  return {
    data,
    isLoading,
  };
}
