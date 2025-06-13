import React from "react";
import { useInvoiceForm } from "../../../hooks/useInvoiceForm";
import InvoiceFormHeader from "../components/InvoiceForm/InvoiceFormHeader";
import FormIssueField from "../components/InvoiceForm/FormIssueField";
import type { InvoiceFormPanelProps } from "./InvoiceFormPanel.types";
import { FormProvider } from "react-hook-form";
import FormDueDateField from "../components/InvoiceForm/FormDueDateField/FormDueDateField";

const InvoiceFormPanel = ({ onFormChange }: InvoiceFormPanelProps) => {
  const { form, watched } = useInvoiceForm();

  React.useEffect(() => {
    onFormChange?.(watched);
  }, [watched, onFormChange]);

  return (
    <FormProvider {...form}>
      <form
        style={{
          height: "95%",
          display: "flex",
          borderRadius: "10px",
          width: "30%",
          minWidth: "500px",
          margin: "20px",
          padding: "20px",
          overflow: "auto",
          flexDirection: "column",
        }}
      >
        <InvoiceFormHeader invoiceId="#INV-71"></InvoiceFormHeader>
        <FormIssueField></FormIssueField>
        <FormDueDateField></FormDueDateField>
      </form>
    </FormProvider>
  );
};

export default InvoiceFormPanel;
