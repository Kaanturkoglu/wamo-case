import { ThemeProvider } from "../../context/ThemeContext";
import InvoiceLayout from "../../components/layout/InvoiceLayout";

const InvoiceScreen = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        width: "100%",
        backgroundColor: "blue",
        justifyContent: "start",
        alignItems: "start",
        overflowY: "auto",
        overflowX: "auto",
      }}
    >
      <ThemeProvider>
        <InvoiceLayout>
          {/* Add your invoice content here */}
          aa
        </InvoiceLayout>
      </ThemeProvider>
    </div>
  );
};

export default InvoiceScreen;
