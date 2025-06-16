import React, { createContext } from "react";
import type { InvoiceFormContextType, InvoiceFormProviderProps } from "./types";
import { useInvoiceFormLogic } from "./useInvoiceFormLogic";

export const InvoiceFormContext = createContext<InvoiceFormContextType | undefined>(undefined);

export const InvoiceFormProvider: React.FC<InvoiceFormProviderProps> = ({ children }) => {
  const contextValue = useInvoiceFormLogic();

  return (
    <InvoiceFormContext.Provider value={contextValue}>
      {children}
    </InvoiceFormContext.Provider>
  );
};