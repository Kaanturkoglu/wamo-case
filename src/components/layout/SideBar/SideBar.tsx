import type { SideBarProps } from "./SideBar.types";
import { useState } from "react";
import SideBarItem from "../../navigation/SideBarItem";
import { useTheme } from "../../../hooks/useTheme";
import logo from "../../../assets/wamoLogo.png";
import greenLogo from "../../../assets/wamoLogoGreenSmall.png";
import invoiceButtonPurple from "../../../assets/invoiceButtonPurple.png";
import invoiceButtonGreen from "../../../assets/invoiceButtonGreen.png";

import { fonts } from "../../../constants/fonts";

const SideBar = ({ initials }: SideBarProps) => {
  const { theme, themeData } = useTheme();
  const [selectedItem, setSelectedItem] = useState<string>("Create Invoice");

  const handleItemSelect = (text: string) => {
    setSelectedItem(text);
  };

  const siderItems = [
    {
      text: "Create Invoice",
      icon: (
        <img
          src={theme == "light" ? invoiceButtonPurple : invoiceButtonGreen}
          alt="Create Invoice"
          style={{
            width: "28px",
            height: "28px",
            objectFit: "contain",
          }}
        />
      ),
      path: "/create-invoice",
      available: true,
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "80px",
        boxShadow: "0",
        backgroundColor: themeData.primary,
        borderRight: `1px solid ${themeData.border}`,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div
        style={{
          flex: "1",
          paddingTop: "10px",
          justifyContent: "start",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          overflowY: "auto",
        }}
      >
        <div>
          <div
            onClick={() => {}}
            style={{
              cursor: "pointer",
              padding: "4px 0",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <img
              src={theme == "light" ? logo : greenLogo}
              alt="Logo"
              style={{
                width: "40px",
                height: "40px",
                objectFit: "contain",
              }}
            />
          </div>
          {siderItems.map(({ text, icon, available }) => (
            <SideBarItem
              key={text}
              isSelected={selectedItem === text}
              onSelect={() => {
                if (available) {
                  handleItemSelect(text);
                } else {
                }
              }}
              icon={icon}
            />
          ))}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          backgroundColor: themeData.miniBackground,
          alignItems: "center",
          justifyContent: "center",
          alignContent: "center",
          justifyItems: "center",
          marginBottom: "20px",
          fontFamily: fonts.body,
          fontSize: fonts.medium,
          fontWeight: fonts.lightWeight,
          color: themeData.text,
          cursor: "pointer",
        }}
        onClick={() => {}}
      >
        {initials}
      </div>
    </div>
  );
};

export default SideBar;
