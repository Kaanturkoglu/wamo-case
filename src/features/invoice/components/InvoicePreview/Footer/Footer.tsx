import { fonts } from "../../../../../constants/fonts";
import { useTheme } from "../../../../../hooks/useTheme";
import type { FooterProps } from "./Footer.types";
import wamoLogoLargePurple from "../../../../../assets/wamoLogoBig.png";
import wamoLogoLargeGreen from "../../../../../assets/wamoLogoGreenLarge.png";

const Footer = ({ companyName, invoiceId }: FooterProps) => {
  const { theme, themeData } = useTheme();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: "20px",
        width: "100%",
      }}
    >
      <div
        style={{ display: "flex", alignItems: "center", flexDirection: "row" }}
      >
        <div
          style={{
            fontFamily: fonts.body,
            fontWeight: fonts.mediumWeight,
            fontSize: fonts.small,
            color: themeData.gray,
          }}
        >
          {companyName}
        </div>
        <div
          style={{
            color: themeData.gray,
            fontSize: fonts.small,
            fontWeight: fonts.lightWeight,
            paddingLeft: "8px",
            fontFamily: fonts.body,
          }}
        >
          •
        </div>
        <div
          style={{
            color: themeData.gray,
            fontSize: fonts.small,
            fontWeight: fonts.lightWeight,
            paddingLeft: "8px",
            fontFamily: fonts.body,
          }}
        >
          {invoiceId}
        </div>
      </div>
      <div
        style={{ display: "flex", alignItems: "center", flexDirection: "row" }}
      >
        <div
          style={{
            fontFamily: fonts.body,
            fontWeight: fonts.mediumWeight,
            fontSize: fonts.small,
            color: themeData.gray,
            paddingRight: "8px",
          }}
        >
          created with
        </div>
        <div style={{ display: "flex" }}>
          <img
            src={theme === "light" ? wamoLogoLargePurple : wamoLogoLargeGreen}
            alt="Logo"
            style={{
              width: "80px",
              height: "40px",
              objectFit: "contain",
            }}
          />
        </div>
      </div>
      <div
        //TODO: Add Pagination
        style={{
          fontFamily: fonts.body,
          fontWeight: fonts.lightWeight,
          fontSize: fonts.small,
          color: themeData.gray,
        }}
      >
        1/1
      </div>
    </div>
  );
};

export default Footer;
