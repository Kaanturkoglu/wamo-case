import { fonts } from "../../../../../constants/fonts";
import { useTheme } from "../../../../../hooks/useTheme";
import type { InvoiceFormHeaderProps } from "./InvoiceFormHeader.types";

const InvoiceFormHeader = ({ invoiceId }: InvoiceFormHeaderProps) => {
  const { themeData } = useTheme();
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        marginBottom:"16px"
      }}
    >
      <div
        style={{
          fontFamily: fonts.body,
          fontWeight: fonts.boldWeight,
          fontSize: fonts.xLarge,
          color: themeData.text,
          marginBottom: "8px",
        }}
      >
        New Invoice {invoiceId}
      </div>
      <div
        style={{
          fontFamily: fonts.body,
          fontWeight: fonts.mediumWeight,
          fontSize: fonts.medium,
          color: themeData.gray,
        }}
      >
        Tailor invoices for your customers, add items, and manage your accounts
        receivable effortlessly.
      </div>
    </div>
  );
};

export default InvoiceFormHeader;
