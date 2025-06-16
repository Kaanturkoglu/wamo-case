import type { UseFormReturn } from "react-hook-form";
import type { InvoiceFormValues } from "../../types/invoice";

export interface InvoiceFormContextType {
  form: UseFormReturn<InvoiceFormValues>;
  formData: InvoiceFormValues;
  isFormValid: boolean;
  resetForm: () => void;
  errors: Record<string, string>;
}

export interface InvoiceFormProviderProps {
  children: React.ReactNode;
}