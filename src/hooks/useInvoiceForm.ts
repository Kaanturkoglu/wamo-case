import { useForm, useWatch, type UseFormReturn } from "react-hook-form";
import type { InvoiceFormValues } from "../types/invoice.ts";

const todayStr = new Date().toISOString().slice(0, 10);

let formInstance: UseFormReturn<InvoiceFormValues> | null = null;

export function useInvoiceForm() {
  if (!formInstance) {
    formInstance = useForm<InvoiceFormValues>({
      defaultValues: {
        issueDate: todayStr,
        dueDate: new Date().toISOString().slice(0, 10),
        items: []
      },
      mode: "onChange",
    });
  }

  const watched = useWatch({
    control: formInstance.control,
  });

  return {
    form: formInstance,
    watched,
  };
}

export function resetInvoiceForm() {
  formInstance = null;
}