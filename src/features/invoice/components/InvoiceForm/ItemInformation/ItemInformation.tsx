import { useTheme } from "../../../../../hooks/useTheme";
import { fonts } from "../../../../../constants/fonts";
import { useInvoiceForm } from "../../../../../context/InvoiceFormContext";
import { currencySymbols, type Currency } from "../../../../../types/currency";

const ItemInformation = () => {
  const { themeData } = useTheme();
  const { formData } = useInvoiceForm();

  if (!formData.items || formData.items.length === 0) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px",
          color: themeData.gray,
          fontFamily: fonts.body,
          fontSize: fonts.medium,
          fontStyle: "italic",
        }}
      >
        No items added yet
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        gap: "16px",
        border: "none",
        marginBottom: "8px",
      }}
    >
      {formData.items.map((item, index) => (
        <div
          key={`item-${index}`}
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            alignItems: "flex-start",
            borderRadius: "8px",
            backgroundColor: themeData.primary,
          }}
        >
          <div
            style={{
              display: "flex",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: themeData.miniBackground,
              alignItems: "center",
              justifyContent: "center",
              marginRight: "12px",
              flexShrink: 0,
              fontFamily: fonts.body,
              fontSize: fonts.medium,
              fontWeight: fonts.boldWeight,
              color: themeData.text,
              cursor: "pointer",
            }}
            onClick={() => {
              console.log(`Clicked item: ${item.title}`);
            }}
          >
            {item.title.charAt(0).toUpperCase() +
              (item.title.split(" ")[1]?.charAt(0).toUpperCase() || "") || "I"}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              minWidth: 0,
            }}
          >
            <div
              style={{
                fontFamily: fonts.body,
                fontSize: fonts.medium,
                fontWeight: fonts.boldWeight,
                color: themeData.text,
                textOverflow: "ellipsis",
                overflow: "hidden",
                whiteSpace: "nowrap",
                marginBottom: "4px",
              }}
            >
              {item.title}
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
              }}
            >
              {item.vatRate}% • Standard VAT
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              flexShrink: 0,
              marginLeft: "12px",
            }}
          >
            <div
              style={{
                fontFamily: fonts.body,
                fontSize: fonts.medium,
                fontWeight: fonts.boldWeight,
                color: themeData.text,
                marginBottom: "4px",
              }}
            >
              {currencySymbols[item.currency as Currency] || item.currency}
              {(
                item.price * item.quantity +
                (item.vatRate / 100) * item.price * item.quantity
              ).toFixed(2)}
            </div>
            <div
              style={{
                fontFamily: fonts.body,
                fontSize: fonts.small,
                fontWeight: fonts.mediumWeight,
                color: themeData.gray,
              }}
            >
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
