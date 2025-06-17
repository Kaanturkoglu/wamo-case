// src/components/invoice/InvoicePartyItem/InvoicePartyItem.tsx
import { fonts } from "../../../../../constants/fonts";
import { useTheme } from "../../../../../hooks/useTheme";
import type { InvoicePartyItemProps } from "./InvoicePartyItem.types";
import styles from "../../../../../styles/components/preview/InvoicePartyItem.module.css";

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

  const cssVariables = {
    "--party-font-family": fonts.body,
    "--party-font-size-small": fonts.small,
    "--party-font-size-large": fonts.large,
    "--party-font-weight-medium": fonts.mediumWeight,
    "--party-font-weight-bold": fonts.boldWeight,
    "--party-text-color": themeData.text,
    "--party-gray-color": themeData.gray,
  } as React.CSSProperties;

  return (
    <div className={styles.container} style={cssVariables}>
      <div className={styles.title}>{title}</div>
      <div className={styles.companyName}>{companyName}</div>
      <div className={styles.companyCode}>{companyCode}</div>
      <div className={styles.addressLine}>{addressLine1}</div>
      {addressLine2 && (
        <div className={`${styles.addressLine} ${styles.addressLine2}`}>
          {addressLine2}
        </div>
      )}
      <div className={styles.email}>{email}</div>
      <div className={styles.phone}>{phone}</div>
    </div>
  );
};

export default InvoicePartyItem;
