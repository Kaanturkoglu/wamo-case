// src/components/invoice/ItemDetailsItem/ItemDetailsItem.tsx
import { fonts } from "../../../../../constants/fonts";
import { useTheme } from "../../../../../hooks/useTheme";
import type { ItemDetailsItemProps } from "./ItemDetailsItem.types";
import { currencySymbols, type Currency } from "../../../../../types/currency";
import styles from "../../../../../styles/components/preview/ItemDetailsItem.module.css";

const ItemDetailsItem = ({
  description,
  quantity,
  unitPrice,
  vatRate,
  currency,
}: ItemDetailsItemProps) => {
  const { themeData } = useTheme();

  const cssVariables = {
    "--details-item-font-family": fonts.body,
    "--details-item-font-size": fonts.small,
    "--details-item-font-weight-bold": fonts.boldWeight,
    "--details-item-text-color": themeData.text,
    "--details-item-gray-color": themeData.gray,
  } as React.CSSProperties;

  return (
    <div className={styles.container} style={cssVariables}>
      <div className={styles.description}>{description}</div>
      <div className={styles.rightSection}>
        <div className={styles.column}>{quantity}</div>
        <div className={styles.column}>
          {currencySymbols[currency as Currency]}
          {unitPrice}
        </div>
        <div className={styles.column}>{vatRate}%</div>
        <div className={`${styles.column} ${styles.totalColumn}`}>
          {currencySymbols[currency as Currency]}
          {(quantity * unitPrice).toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default ItemDetailsItem;
