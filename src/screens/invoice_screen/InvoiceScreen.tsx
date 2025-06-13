import React from "react";
import { ThemeProvider } from "../../context/ThemeContext";
import InvoiceFormPanel from "../../features/invoice/InvoiceFormPanel/InvoiceFormPanel";
import InvoiceLayout from "../../layouts/InvoiceLayout";
import type { InvoiceFormValues } from "../../types/invoice";
import InvoicePreviewPanel from "../../features/invoice/InvoicePreviewPanel";

const InvoiceScreen = () => {
  const [invoiceData, setInvoiceData] = React.useState<InvoiceFormValues>({
    issueDate: "",
    dueDate: "",
  });

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
            }}
          >
            <InvoiceFormPanel onFormChange={setInvoiceData}></InvoiceFormPanel>
            <InvoicePreviewPanel data={invoiceData} />
          </div>
        </InvoiceLayout>
      </ThemeProvider>
    </div>
  );
};

export default InvoiceScreen;
