import { ThemeProvider } from "../../context/ThemeContext";
import InvoiceFormPanel from "../../features/invoice/InvoiceFormPanel/InvoiceFormPanel";
import InvoiceLayout from "../../layouts/InvoiceLayout";
import InvoicePreviewPanel from "../../features/invoice/InvoicePreviewPanel";
import { InvoiceFormProvider } from "../../context/InvoiceFormContext/InvoiceFormContext";

const InvoiceScreen = () => {


  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        width: "100%",
        justifyContent: "start",
        alignItems: "start",
        overflowY: "auto",
        overflowX: "auto",
      }}
    >
      <ThemeProvider>
        <InvoiceFormProvider>
          <InvoiceLayout>
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <InvoiceFormPanel></InvoiceFormPanel>
              <InvoicePreviewPanel />
            </div>
          </InvoiceLayout>
        </InvoiceFormProvider>
      </ThemeProvider>
    </div>
  );
};

export default InvoiceScreen;
