// src/components/invoice/ItemDetailsHeader/ItemDetailsHeader.tsx
import { fonts } from "../../../../../constants/fonts";
import { useTheme } from "../../../../../hooks/useTheme";
import styles from "../../../../../styles/components/preview/ItemDetailsHeader.module.css";

const ItemDetailsHeader = () => {
  const { themeData } = useTheme();

  const cssVariables = {
    "--details-header-font-family": fonts.body,
    "--details-header-font-size": fonts.small,
    "--details-header-font-weight": fonts.boldWeight,
    "--details-header-color": themeData.gray,
  } as React.CSSProperties;

  return (
    <div className={styles.container} style={cssVariables}>
      <div className={styles.description}>Description</div>
      <div className={styles.rightSection}>
        <div className={styles.column}>Qty</div>
        <div className={styles.column}>Unit price</div>
        <div className={styles.column}>VAT (%)</div>
        <div className={`${styles.column} ${styles.totalColumn}`}>
          Total excl. VAT
        </div>
      </div>
    </div>
  );
};

export default ItemDetailsHeader;
