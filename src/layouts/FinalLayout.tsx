import React from "react";
import SideBar from "../components/layout/SideBar";
import { useTheme } from "../hooks/useTheme";

interface FinalLayoutProps {
  children: React.ReactNode;
}

const FinalLayout: React.FC<FinalLayoutProps> = ({ children }) => {
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
        {children}
      </div>
    </div>
  );
};

export default FinalLayout;
