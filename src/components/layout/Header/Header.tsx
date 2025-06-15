import { useTheme } from "../../../hooks/useTheme";
import cross from "../../../assets/cross.png";
import crossWhite from "../../../assets/crossWhite.png";
import { fonts } from "../../../constants/fonts";
import type { HeaderProps } from "./Header.types";

const Header = ({invoiceId} : HeaderProps) => {
  const { theme, themeData } = useTheme();
  return (
    <div
      style={{
        display: "flex",
        height: "60px",
        minHeight: "60px",
        width: "100%",
        backgroundColor: themeData.primary,
        flexDirection: "column",
        textOverflow: "ellipsis",
        borderBottom: `1px solid ${themeData.border}`,
        position: "static",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "start",
          padding: "0 20px",
        }}
      >
        <img
          src={theme == "light" ? cross : crossWhite}
          alt="Cross Icon"
          style={{
            width: "24px",
            height: "24px",
            objectFit: "contain",
            cursor: "pointer",
          }}
          onClick={() => {}}
        />
        <div
          style={{
            color: themeData.gray,
            fontWeight: fonts.mediumWeight,
            fontSize: fonts.medium,
            paddingLeft: "10px",
            fontFamily: fonts.body,
          }}
        >
          Invoice
        </div>
        <div
          style={{
            color: themeData.gray,
            fontWeight: fonts.mediumWeight,
            fontSize: fonts.large,
            paddingLeft: "8px",
            fontFamily: fonts.body,
          }}
        >
          •
        </div>
        <div
          style={{
            color: themeData.text,
            fontSize: fonts.medium,
            fontWeight: fonts.boldWeight,
            paddingLeft: "8px",
            fontFamily: fonts.body,
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: "200px",
            whiteSpace: "nowrap",
          }}
        >
          New invoice {invoiceId}
        </div>
      </div>
    </div>
  );
};

export default Header;
