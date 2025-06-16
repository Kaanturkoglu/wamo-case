import InvoiceFormHeader from "../components/InvoiceForm/InvoiceFormHeader";
import FormIssueField from "../components/InvoiceForm/Fields/FormIssueField";
import { FormProvider } from "react-hook-form";
import FormDueDateField from "../components/InvoiceForm/Fields/FormDueDateField/FormDueDateField";
import ItemsField from "../components/InvoiceForm/Fields/ItemsField/ItemsField";
import ApplyButton from "../../../components/common/ApplyButton/ApplyButton";
import { useInvoiceForm } from "../../../context/InvoiceFormContext";

const InvoiceFormPanel = () => {
  const { form, formData, isFormValid } = useInvoiceForm();

  const handleSubmit = () => {
    console.log("Form submitted with data:", formData);
    //TODO
  };

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
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
        <InvoiceFormHeader invoiceId="#INV-71" />
        <FormIssueField />
        <FormDueDateField />
        <ItemsField type="plain" />

        <ApplyButton
          text="Continue"
          disabled={!isFormValid}
          onClick={handleSubmit}
          style={{ marginTop: "12px" }}
        />
      </form>
    </FormProvider>
  );
};

export default InvoiceFormPanel;
