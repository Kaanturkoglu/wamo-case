import type { UseFormReturn } from "react-hook-form";
import type { InvoiceFormValues } from "../../../../../../types/invoice";

export type FormDueDateFieldProps = {
  form: UseFormReturn<InvoiceFormValues>;
  watched: InvoiceFormValues;
}