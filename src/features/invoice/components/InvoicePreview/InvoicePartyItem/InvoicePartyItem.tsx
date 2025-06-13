import { fonts } from "../../../../../constants/fonts";
import { useTheme } from "../../../../../hooks/useTheme";
import type { InvoicePartyItemProps } from "./InvoicePartyItem.types";

const InvoicePartyItem = ({
  title,
  companyName,
  companyCode,
  addressLine1,
  addressLine2,
  email,
  phone,
}: InvoicePartyItemProps) => {
  const { themeData } = useTheme();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minWidth: "300px",
        maxWidth: "300px",
        paddingRight: "12px",
      }}
    >
      <div
        style={{
          fontFamily: fonts.body,
          fontSize: fonts.small,
          fontWeight: fonts.mediumWeight,
          color: themeData.gray,
          textOverflow: "ellipsis",
          overflow: "hidden",
          whiteSpace: "nowrap",
          marginBottom: "8px",
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontFamily: fonts.body,
          fontSize: fonts.large,
          fontWeight: fonts.boldWeight,
          color: themeData.text,
          textOverflow: "ellipsis",
          overflow: "hidden",
          whiteSpace: "nowrap",
          marginBottom: "4px",
        }}
      >
        {companyName}
      </div>
      <div
        style={{
          fontFamily: fonts.body,
          fontSize: fonts.small,
          fontWeight: fonts.mediumWeight,
          color: themeData.gray,
          textOverflow: "ellipsis",
          overflow: "hidden",
          whiteSpace: "nowrap",
          marginBottom: "8px",
        }}
      >
        {companyCode}
      </div>
      <div
        style={{
          fontFamily: fonts.body,
          fontSize: fonts.small,
          fontWeight: fonts.boldWeight,
          color: themeData.gray,
          textOverflow: "ellipsis",
          overflow: "hidden",
          whiteSpace: "nowrap",
        }}
      >
        {addressLine1}
      </div>
      {addressLine2 && (
        <div
          style={{
            fontFamily: fonts.body,
            fontSize: fonts.small,
            fontWeight: fonts.boldWeight,
            color: themeData.gray,
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
            marginBottom: "2px",
          }}
        >
          {addressLine2}
        </div>
      )}
      <div
        style={{
          fontFamily: fonts.body,
          fontSize: fonts.small,
          fontWeight: fonts.boldWeight,
          color: themeData.gray,
          textOverflow: "ellipsis",
          overflow: "hidden",
          whiteSpace: "nowrap",
          marginBottom: "2px",
        }}
      >
        {email}
      </div>
      <div
        style={{
          fontFamily: fonts.body,
          fontSize: fonts.small,
          fontWeight: fonts.boldWeight,
          color: themeData.gray,
          textOverflow: "ellipsis",
          overflow: "hidden",
          whiteSpace: "nowrap",
        }}
      >
        {phone}
      </div>
    </div>
  );
};

export default InvoicePartyItem;
