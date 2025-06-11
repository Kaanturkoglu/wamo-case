import React from "react";
import SideBar from "./SideBar";
import Header from "./Header/Header";
import { useTheme } from "../../hooks/useTheme";

interface InvoiceLayoutProps {
  children: React.ReactNode;
}

const InvoiceLayout: React.FC<InvoiceLayoutProps> = ({ children }) => {
  const { themeData } = useTheme();
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: themeData.background,
        display: "flex",
        flexDirection: "row",
      }}
    >
      <SideBar></SideBar>
      <Header></Header>
      {children} //TODO
    </div>
  );
};

export default InvoiceLayout;
