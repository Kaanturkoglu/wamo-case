import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo } from "react";
import type { InvoiceFormValues } from "../../types/invoice";
import { invoiceFormSchema } from "../../validation/invoiceSchema";
import { getDefaultFormValues, validateFormData } from "./utils";
import type { InvoiceFormContextType } from "./types";

export const useInvoiceFormLogic = (): InvoiceFormContextType => {
  const form = useForm<InvoiceFormValues>({
    resolver: zodResolver(invoiceFormSchema),
    defaultValues: getDefaultFormValues(),
    mode: "onChange",
  });

  const formData = useWatch({
    control: form.control,
  }) as InvoiceFormValues;

  const errors = useMemo(() => {
    return validateFormData(formData);
  }, [formData]);

  const isFormValid = useMemo(() => {
    return form.formState.isValid && Object.keys(errors).length === 0;
  }, [form.formState.isValid, errors]);

  const resetForm = () => {
    form.reset(getDefaultFormValues());
  };

  return {
    form,
    formData,
    isFormValid,
    resetForm,
    errors,
  };
};