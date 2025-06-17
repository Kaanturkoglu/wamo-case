// src/components/forms/ItemInformation/ItemInformation.tsx
import { useTheme } from "../../../../../hooks/useTheme";
import { fonts } from "../../../../../constants/fonts";
import { useInvoiceForm } from "../../../../../context/InvoiceFormContext";
import { currencySymbols, type Currency } from "../../../../../types/currency";
import styles from "../../../../../styles/components/forms/ItemInformation.module.css";

const ItemInformation = () => {
  const { themeData } = useTheme();
  const { formData } = useInvoiceForm();

  const cssVariables = {
    "--item-info-bg-color": themeData.primary,
    "--item-info-avatar-bg": themeData.miniBackground,
    "--item-info-text-color": themeData.text,
    "--item-info-gray-color": themeData.gray,
    "--item-info-font-family": fonts.body,
    "--item-info-font-size-medium": fonts.medium,
    "--item-info-font-size-small": fonts.small,
    "--item-info-font-weight-bold": fonts.boldWeight,
    "--item-info-font-weight-medium": fonts.mediumWeight,
  } as React.CSSProperties;

  if (!formData.items || formData.items.length === 0) {
    return (
      <div className={styles.emptyState} style={cssVariables}>
        No items added yet
      </div>
    );
  }

  return (
    <div className={styles.container} style={cssVariables}>
      {formData.items.map((item, index) => (
        <div key={`item-${index}`} className={styles.itemRow}>
          <div
            className={styles.avatar}
            onClick={() => {
              console.log(`Clicked item: ${item.title}`);
            }}
          >
            {item.title.charAt(0).toUpperCase() +
              (item.title.split(" ")[1]?.charAt(0).toUpperCase() || "") || "I"}
          </div>

          <div className={styles.itemDetails}>
            <div className={styles.itemTitle}>{item.title}</div>
            <div className={styles.itemSubtitle}>
              {item.vatRate}% • Standard VAT
            </div>
          </div>

          <div className={styles.priceSection}>
            <div className={styles.totalPrice}>
              {currencySymbols[item.currency as Currency] || item.currency}
              {(
                item.price * item.quantity +
                (item.vatRate / 100) * item.price * item.quantity
              ).toFixed(2)}
            </div>
            <div className={styles.unitPrice}>
              {item.quantity} ×{" "}
              {currencySymbols[item.currency as Currency] || item.currency}
              {item.price.toFixed(2)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemInformation;
