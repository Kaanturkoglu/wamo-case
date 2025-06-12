import Divider from "../../../components/common/Divider";
import { useTheme } from "../../../hooks/useTheme";
import InvoiceHeader from "../components/InvoicePreviewHeader";
import InvoiceParty from "../components/InvoicePreviewParty/InvoiceParty";

const InvoicePreviewPanel = () => {
  const { themeData } = useTheme();
  return (
    <div
      style={{
        height: "95%",
        backgroundColor: "#e8e9ed",
        display: "flex",
        borderRadius: "10px",
        width: "100%",
        margin: "20px",
        padding: "20px",
        overflow: "auto"
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
        <Divider
          orientation="horizontal"
          color="#b4b5b7"
          thickness={1.5}
          length="100%"
          margin="10px 0"
          opacity={0.5}
          style={{ marginBottom: "20px" }}
        ></Divider>
        <InvoiceParty></InvoiceParty>
        <Divider
          orientation="horizontal"
          color="#b4b5b7"
          thickness={1.5}
          length="100%"
          margin="10px 0"
          opacity={0.5}
          style={{ marginTop: "20px" }}
        ></Divider>
      </div>
    </div>
  );
};

export default InvoicePreviewPanel;
