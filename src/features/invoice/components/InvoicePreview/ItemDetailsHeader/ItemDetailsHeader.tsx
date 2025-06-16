import { fonts } from "../../../../../constants/fonts";
import { useTheme } from "../../../../../hooks/useTheme";

const ItemDetailsHeader = () => {
  const { themeData } = useTheme();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
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
          color: themeData.gray,
          textOverflow: "ellipsis",
          overflow: "hidden",
          whiteSpace: "nowrap",
        }}
      >
        Description
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
          Qty
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
          Unit price
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
          VAT (%)
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
            textAlign: "right",
          }}
        >
          Total excl. VAT
        </div>
      </div>
    </div>
  );
};

export default ItemDetailsHeader;
