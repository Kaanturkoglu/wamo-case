import { useForm, useWatch } from "react-hook-form";
import type { InvoiceFormValues } from "../types/invoice.ts";

const todayStr = new Date().toISOString().slice(0, 10);
const defaultDue = new Date(Date.now() + 15 * 24 * 60 * 60 * 1000)
  .toISOString()
  .slice(0, 10);

export function useInvoiceForm() {
  const form = useForm<InvoiceFormValues>({
    defaultValues: {
      issueDate: todayStr,
      dueDate: defaultDue,
    },
    mode: "onChange",
  });

  const watched = useWatch({
    control: form.control,
  });

  return {
    form,
    watched,
  };
}