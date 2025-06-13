import React from "react";
import SideBar from "../features/layout/SideBar";
import Header from "../features/layout/Header/Header";
import { useTheme } from "../hooks/useTheme";

interface InvoiceLayoutProps {
  children: React.ReactNode;
}

const InvoiceLayout: React.FC<InvoiceLayoutProps> = ({ children }) => {
  const { themeData } = useTheme();

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: themeData.background,
        display: "flex",
        flexDirection: "row",
        overflow: "auto",
      }}
    >
      <SideBar initials="AE" />
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
        }}
      >
        <Header invoiceId="#INV-71" />
        <div
          style={{
            flex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              height: "100%",
              justifyContent: "space-between",
              alignItems: "center",
              flex: 1,
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceLayout;
