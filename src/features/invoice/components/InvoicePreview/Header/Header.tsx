import type { HeaderProps } from "./Header.types";
import wamoLogoLargePurple from "../../../../../assets/wamoLogoBig.png";
import wamoLogoLargeGreen from "../../../../../assets/wamoLogoGreenLarge.png";
import { useTheme } from "../../../../../hooks/useTheme";
import InvoiceHeaderItem from "../HeaderItem";
import Divider from "../../../../../components/common/Divider";

const Header = ({ issueDate, dueDate, invoiceNumber }: HeaderProps) => {
  const { theme, themeData } = useTheme();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "start",
        backgroundColor: themeData.primary,
        marginRight: "20px",
      }}
    >
      <div style={{ display: "flex" }}>
        <img
          src={theme === "light" ? wamoLogoLargePurple : wamoLogoLargeGreen}
          alt="Logo"
          style={{
            width: "160px",
            height: "40px",
            objectFit: "contain",
          }}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <InvoiceHeaderItem title="Issued" value={issueDate}></InvoiceHeaderItem>
        <Divider
          orientation="vertical"
          color="#b4b5b7"
          length="30px"
          margin="0 10px"
          opacity={0.5}
          thickness={1.5}
        ></Divider>
        <InvoiceHeaderItem title="Due Date" value={dueDate}></InvoiceHeaderItem>
        <Divider
          orientation="vertical"
          color="#b4b5b7"
          length="30px"
          margin="0 10px"
          opacity={0.5}
          thickness={1.5}
        ></Divider>
        <InvoiceHeaderItem
          title="Invoice Number"
          value={invoiceNumber}
        ></InvoiceHeaderItem>
      </div>
    </div>
  );
};

export default Header;
