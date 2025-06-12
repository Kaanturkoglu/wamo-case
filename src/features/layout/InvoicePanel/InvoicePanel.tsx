import { useTheme } from "../../../hooks/useTheme";
import InvoiceHeader from "../../invoice/components/InvoicePreviewHeader";

const InvoicePanel = () => {
  const { themeData } = useTheme();
  return (
    <div
      style={{
        height: "95%",
        backgroundColor: "#e8e9ed",
        display: "flex",
        borderRadius: "10px",
        width: "50%",
        minWidth: "660px",
        minHeight: "700px",
        margin: "20px",
        padding: "20px",
      }}
    >
      <div
        style={{
          flex: 1,
          borderRadius: "10px",
          backgroundColor: themeData.primary,
          display: "flex",
          width: "50%",
          height: "100%",
          minHeight: "560px",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "start",
          overflow: "auto",
          padding: "20px",
        }}
      >
        <InvoiceHeader
          issueDate={"04.01.2024"}
          dueDate={"04.01.2024"}
          invoiceNumber={"#INV-71"}
        ></InvoiceHeader>
      </div>
    </div>
  );
};

export default InvoicePanel;
