import { useState } from "react";
import RowsView from "./Rows.view";
import { RowsContext } from "./utils/context";
import { IRowCMSData } from "../../types/RowCMSData";
import { rowContent } from "../../data/RowsCMS";

export default function RowsContainer() {
  const [rowData, setRowData] = useState<IRowCMSData[]>(rowContent);
  return (
    <RowsContext.Provider
      value={{
        rowData,
        setRowData,
      }}
    >
      <RowsView />
    </RowsContext.Provider>
  );
}
