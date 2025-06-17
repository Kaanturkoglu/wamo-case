import { useState } from "react";
import InvoiceFormHeader from "../components/InvoiceForm/InvoiceFormHeader";
import FormIssueField from "../components/InvoiceForm/Fields/FormIssueField";
import { FormProvider } from "react-hook-form";
import FormDueDateField from "../components/InvoiceForm/Fields/FormDueDateField/FormDueDateField";
import ItemsField from "../components/InvoiceForm/Fields/ItemsField/ItemsField";
import ApplyButton from "../../../components/common/ApplyButton/ApplyButton";
import { useInvoiceForm } from "../../../context/InvoiceFormContext";
import { validateFormData } from "../../../context/InvoiceFormContext/utils";
import { fonts } from "../../../constants/fonts";
import { useNavigate } from "react-router-dom";

const InvoiceFormPanel = () => {
  const { form, formData } = useInvoiceForm();
  const navigate = useNavigate();

  const [validationErrors, setValidationErrors] = useState<
    Record<string, string>
  >({});
  const [showErrors, setShowErrors] = useState(false);

  const handleSubmit = () => {
    console.log("Continue button clicked");
    const errors = validateFormData(formData);
    setValidationErrors(errors);
    setShowErrors(true);

    if (Object.keys(errors).length > 0) {
      console.log("Form validation failed:", errors);
      return;
    }
    console.log("Form submitted with data:", formData);
    setShowErrors(false);
    navigate("/final");
  };

  return (
    <FormProvider {...form}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
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
        {showErrors && validationErrors.issueDate && (
          <div
            style={{
              color: "#dc3545",
              fontSize: "12px",
              marginTop: "4px",
              marginBottom: "8px",
              fontFamily: fonts.body,
            }}
          >
            {validationErrors.issueDate}
          </div>
        )}
        <FormDueDateField />
        {showErrors && validationErrors.dueDate && (
          <div
            style={{
              color: "#dc3545",
              fontSize: "12px",
              marginTop: "4px",
              marginBottom: "8px",
              fontFamily: fonts.body,
            }}
          >
            {validationErrors.dueDate}
          </div>
        )}
        <ItemsField type="plain" />
        {showErrors && validationErrors.items && (
          <div
            style={{
              color: "#dc3545",
              fontSize: "12px",
              marginTop: "4px",
              marginBottom: "8px",
              fontFamily: fonts.body,
            }}
          >
            {validationErrors.items}
          </div>
        )}
        {showErrors &&
          Object.keys(validationErrors).some((key) =>
            key.startsWith("items.")
          ) && (
            <div style={{ marginTop: "8px", marginBottom: "8px" }}>
              {Object.keys(validationErrors)
                .filter((key) => key.startsWith("items."))
                .map((key) => (
                  <div
                    key={key}
                    style={{
                      color: "#dc3545",
                      fontSize: "12px",
                      marginBottom: "4px",
                      fontFamily: fonts.body,
                    }}
                  >
                    Item {parseInt(key.split(".")[1]) + 1}:{" "}
                    {validationErrors[key]}
                  </div>
                ))}
            </div>
          )}

        <ApplyButton
          text="Continue"
          disabled={false}
          onClick={handleSubmit}
          style={{ marginTop: "12px" }}
        />
      </form>
    </FormProvider>
  );
};

export default InvoiceFormPanel;
