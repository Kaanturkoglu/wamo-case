import { useContext } from "react";
import { InvoiceFormContext } from "./InvoiceFormContext";
import type { InvoiceFormContextType } from "./types";

export const useInvoiceForm = (): InvoiceFormContextType => {
  const context = useContext(InvoiceFormContext);
  
  if (context === undefined) {
    throw new Error(
      "Err"
    );
  }
  
  return context;
};