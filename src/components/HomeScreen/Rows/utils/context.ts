import React from "react";
import { IContextData } from "./data";

export const RowsContext = React.createContext<Partial<IContextData> | null>(
  null
);

export const useRowsContext = () => {
  const context = React.useContext(RowsContext);
  if (!context)
    throw new Error("useRowsContext can not be used outside it's provider");
  return context;
};
