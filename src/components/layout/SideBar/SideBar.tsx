import type { SideBarProps } from "./SideBar.types";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SideBarItem from "../../navigation/SideBarItem";
import { useTheme } from "../../../hooks/useTheme";
import logo from "../../../assets/wamoLogo.png";
import greenLogo from "../../../assets/wamoLogoGreenSmall.png";
import invoiceButtonPurple from "../../../assets/invoiceButtonPurple.png";
import invoiceButtonGreen from "../../../assets/invoiceButtonGreen.png";
import { fonts } from "../../../constants/fonts";
import ThemeSelectButton from "../../common/ThemeSelectButton/ThemeSelectButton";
import styles from "../../../styles/components/layout/SideBar.module.css";

const SideBar = ({ initials }: SideBarProps) => {
  const { theme, themeData } = useTheme();
  const [selectedItem, setSelectedItem] = useState<string>("");
  const navigate = useNavigate();
  const location = useLocation();

  const siderItems = [
    {
      text: "Create Invoice",
      icon: (
        <img
          src={theme == "light" ? invoiceButtonPurple : invoiceButtonGreen}
          alt="Create Invoice"
          className={styles.invoiceIcon}
        />
      ),
      path: "/invoice",
      available: true,
    },
  ];

  useEffect(() => {
    const currentItem = siderItems.find(
      (item) => item.path === location.pathname
    );
    if (currentItem) {
      setSelectedItem(currentItem.text);
    } else {
      setSelectedItem("");
    }
  }, [location.pathname, theme]);

  const handleItemSelect = (text: string) => {
    const item = siderItems.find((item) => item.text === text);
    if (item) {
      navigate(item.path);
      setSelectedItem(text);
    }
  };

  const handleLogoClick = () => {
    navigate("/greeting");
    setSelectedItem("");
  };

  const cssVariables = {
    "--sidebar-bg-color": themeData.primary,
    "--sidebar-border": `1px solid ${themeData.border}`,
    "--avatar-bg-color": themeData.miniBackground,
    "--avatar-font-family": fonts.body,
    "--avatar-font-size": fonts.medium,
    "--avatar-font-weight": fonts.lightWeight,
    "--avatar-text-color": themeData.text,
  } as React.CSSProperties;

  return (
    <div className={styles.sidebar} style={cssVariables}>
      <div className={styles.topSection}>
        <div>
          <div onClick={handleLogoClick} className={styles.logoContainer}>
            <img
              src={theme == "light" ? logo : greenLogo}
              alt="Logo"
              className={styles.logo}
            />
          </div>
          {siderItems.map(({ text, icon, available }) => (
            <SideBarItem
              key={text}
              isSelected={selectedItem === text}
              onSelect={() => {
                if (available) {
                  handleItemSelect(text);
                }
              }}
              icon={icon}
            />
          ))}
        </div>
      </div>
      <ThemeSelectButton />
      <div className={styles.userAvatar}>{initials}</div>
    </div>
  );
};

export default SideBar;
