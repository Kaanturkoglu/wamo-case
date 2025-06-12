import InvoiceFormHeader from "../components/InvoiceFormHeader";
import InvoiceFormIssueItem from "../components/InvoiceFormIssueItem";

const InvoiceFormPanel = () => {
    
  return (
    <div
      style={{
        height: "95%",
        display: "flex",
        borderRadius: "10px",
        width: "70%",
        margin: "20px",
        padding: "20px",
        overflow: "auto",
        flexDirection: "column"
      }}
    >
      <InvoiceFormHeader invoiceId="#INV-71"></InvoiceFormHeader>
      <InvoiceFormIssueItem></InvoiceFormIssueItem>
    </div>
  );
};

export default InvoiceFormPanel;
