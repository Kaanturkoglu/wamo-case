import { useTheme } from "../../../hooks/useTheme";
import cross from "../../../assets/cross.png";
import crossWhite from "../../../assets/crossWhite.png";
import { fonts } from "../../../constants/fonts";
import type { HeaderProps } from "./Header.types";
import { useNavigate } from "react-router-dom";
import styles from "../../../styles/components/layout/Header.module.css";

const Header = ({ invoiceId }: HeaderProps) => {
  const { theme, themeData } = useTheme();
  const navigate = useNavigate();

  const handleCrossClick = () => {
    navigate("/greeting");
  };

  const cssVariables = {
    "--header-bg-color": themeData.primary,
    "--header-border": `1px solid ${themeData.border}`,
    "--header-text-gray": themeData.gray,
    "--header-text-primary": themeData.text,
    "--header-font-family": fonts.body,
    "--header-font-weight-medium": fonts.mediumWeight,
    "--header-font-weight-bold": fonts.boldWeight,
    "--header-font-size-medium": fonts.medium,
    "--header-font-size-large": fonts.large,
  } as React.CSSProperties;

  return (
    <div className={styles.header} style={cssVariables}>
      <div className={styles.content}>
        <img
          src={theme == "light" ? cross : crossWhite}
          alt="Close"
          className={styles.crossIcon}
          onClick={handleCrossClick}
        />
        <div className={styles.invoiceText}>Invoice</div>
        <div className={styles.separator}>•</div>
        <div className={styles.invoiceId}>New invoice {invoiceId}</div>
      </div>
    </div>
  );
};

export default Header;
