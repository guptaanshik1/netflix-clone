import { Dispatch, SetStateAction } from "react";
import { IRowCMSData } from "../../../types/RowCMSData";

export interface IContextData {
  count: number;
  rowData: IRowCMSData[];
  setRowData: Dispatch<SetStateAction<IRowCMSData[]>>;
}
