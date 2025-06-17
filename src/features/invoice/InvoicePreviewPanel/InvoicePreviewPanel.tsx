import Footer from "../components/InvoicePreview/Footer";
import Divider from "../../../components/common/Divider";
import { useTheme } from "../../../hooks/useTheme";
import Header from "../components/InvoicePreview/Header";
import InvoiceParties from "../components/InvoicePreview/InvoiceParties/InvoiceParties";
import dayjs from "dayjs";
import NotesSection from "../components/InvoicePreview/NotesSection";
import ItemDetails from "../components/InvoicePreview/ItemDetails";
import { useInvoiceForm } from "../../../context/InvoiceFormContext";
import MiniSummary from "../components/InvoiceForm/MiniSummary/MiniSummary";

const InvoicePreviewPanel = () => {
  const { themeData } = useTheme();
  const { formData } = useInvoiceForm();

  const formattedIssueDate = formData.issueDate
    ? dayjs(formData.issueDate, "YYYY-MM-DD").format("DD.MM.YYYY")
    : "";
  const formattedDueDate = formData.dueDate
    ? dayjs(formData.dueDate, "YYYY-MM-DD").format("DD.MM.YYYY")
    : "";

  return (
    <div
      style={{
        height: "95%",
        backgroundColor: themeData.miniBackground,
        display: "flex",
        borderRadius: "10px",
        width: "60%",
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
          justifyContent: "space-between",
          alignItems: "start",
          overflowY: "auto",
          overflowX: "hidden",
          padding: "20px",
        }}
      >
        <div style={{ width: "100%" }}>
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
          <ItemDetails items={formData.items}></ItemDetails>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <MiniSummary></MiniSummary>
          <NotesSection></NotesSection>
          <Footer companyName="Acme Inc." invoiceId="#INV-71"></Footer>
        </div>
      </div>
    </div>
  );
};

export default InvoicePreviewPanel;
