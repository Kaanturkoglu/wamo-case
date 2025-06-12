import { ThemeProvider } from "../../context/ThemeContext";
import InvoiceFormPanel from "../../features/invoice/InvoiceFormPanel/InvoiceFormPanel";
import InvoiceLayout from "../../layouts/InvoiceLayout";

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
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minWidth: "660px",
            }}
          >
            <InvoiceFormPanel></InvoiceFormPanel>
          </div>
        </InvoiceLayout>
      </ThemeProvider>
    </div>
  );
};

export default InvoiceScreen;
