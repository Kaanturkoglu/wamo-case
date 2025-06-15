import React from "react";
import { useInvoiceForm } from "../../../hooks/useInvoiceForm";
import InvoiceFormHeader from "../components/InvoiceForm/InvoiceFormHeader";
import FormIssueField from "../components/InvoiceForm/Fields/FormIssueField";
import type { InvoiceFormPanelProps } from "./InvoiceFormPanel.types";
import { FormProvider } from "react-hook-form";
import FormDueDateField from "../components/InvoiceForm/Fields/FormDueDateField/FormDueDateField";
import ItemsField from "../components/InvoiceForm/Fields/ItemsField/ItemsField";
import ApplyButton from "../../../components/common/ApplyButton/ApplyButton";

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
          width: "40%",
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
        <ItemsField type="plain"></ItemsField>
        <ApplyButton
          text="Continue"
          disabled={false}
          onClick={() => {}}
        ></ApplyButton>
      </form>
    </FormProvider>
  );
};

export default InvoiceFormPanel;
