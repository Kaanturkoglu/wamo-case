import Divider from "../../../components/common/Divider";
import { useTheme } from "../../../hooks/useTheme";
import Header from "../components/InvoicePreview/Header";
import InvoiceParties from "../components/InvoicePreview/InvoiceParties/InvoiceParties";
import type { InvoicePreviewPanelProps } from "./InvoicePreviewPanel.types";
import dayjs from "dayjs";

const InvoicePreviewPanel = ({ data }: InvoicePreviewPanelProps) => {
  const { themeData } = useTheme();
  const formattedIssueDate = data.issueDate
    ? dayjs(data.issueDate, "YYYY-MM-DD").format("DD.MM.YYYY")
    : "";
  const formattedDueDate = data.dueDate
    ? dayjs(data.dueDate, "YYYY-MM-DD").format("DD.MM.YYYY")
    : "";
  return (
    <div
      style={{
        height: "95%",
        backgroundColor: themeData.miniBackground,
        display: "flex",
        borderRadius: "10px",
        width: "50%",
        minWidth: "660px",
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
          height: "100%",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "start",
          overflowY: "auto",
          overflowX: "hidden",
          padding: "20px",
        }}
      >
        <Header
          issueDate={formattedIssueDate}
          dueDate={formattedDueDate}
          invoiceNumber={"#INV-71"}
        ></Header>
        <Divider
          orientation="horizontal"
          color="#b4b5b7"
          thickness={1.5}
          length="100%"
          margin="10px 0"
          opacity={0.5}
          style={{ marginBottom: "20px" }}
        ></Divider>
        <InvoiceParties></InvoiceParties>
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
