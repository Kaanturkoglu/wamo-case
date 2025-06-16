import { fonts } from "../../../../../constants/fonts";
import { useTheme } from "../../../../../hooks/useTheme";
import type { ItemDetailsItemProps } from "./ItemDetailsItem.types";
import { currencySymbols, type Currency } from "../../../../../types/currency";

const ItemDetailsItem = ({
  description,
  quantity,
  unitPrice,
  vatRate,
  currency,
}: ItemDetailsItemProps) => {
  const { themeData } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "40px",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        
      }}
    >
      <div
        style={{
          display: "flex",
          width: "30%",
          fontFamily: fonts.body,
          fontSize: fonts.small,
          fontWeight: fonts.boldWeight,
          color: themeData.text,
          textOverflow: "ellipsis",
          overflow: "hidden",
          whiteSpace: "nowrap",
        }}
      >
        {description}
      </div>
      <div style={{ display: "flex", flexDirection: "row", width: "60%" }}>
        <div
          style={{
            width: "25%",
            fontFamily: fonts.body,
            fontSize: fonts.small,
            fontWeight: fonts.boldWeight,
            color: themeData.gray,
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
        >
          {quantity}
        </div>
        <div
          style={{
            width: "25%",
            fontFamily: fonts.body,
            fontSize: fonts.small,
            fontWeight: fonts.boldWeight,
            color: themeData.gray,
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
        >
          {currencySymbols[currency as Currency] + unitPrice}
        </div>
        <div
          style={{
            width: "25%",
            fontFamily: fonts.body,
            fontSize: fonts.small,
            fontWeight: fonts.boldWeight,
            color: themeData.gray,
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
        >
          {vatRate + "%"}
        </div>
        <div
          style={{
            width: "25%",
            fontFamily: fonts.body,
            fontSize: fonts.small,
            fontWeight: fonts.boldWeight,
            color: themeData.gray,
            textAlign: "right",
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
        >
          {currencySymbols[currency as Currency] + (quantity * unitPrice)}
        </div>
      </div>
    </div>
  );
};

export default ItemDetailsItem;
