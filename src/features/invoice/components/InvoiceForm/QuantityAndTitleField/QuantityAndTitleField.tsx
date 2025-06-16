import { fonts } from "../../../../../constants/fonts";
import { useTheme } from "../../../../../hooks/useTheme";
import type { QuantityAndTitleFieldProps } from "./QuantityAndTitleField.types";

const QuantityAndTitleField = ({
  title,
  setTitle,
  quantity,
  setQuantity,
}: QuantityAndTitleFieldProps) => {
  const { themeData } = useTheme();

  return (
    <div
      style={{
        height: "70px",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "12px",
        marginBottom: "12px",
        borderRadius: "10px",
        gap: "12px",
      }}
    >
      <input
        style={{
          width: "25%",
          height: "100%",
          backgroundColor: themeData.miniBackground,
          border: "none",
          outline: "none",
          fontFamily: fonts.body,
          fontWeight: fonts.mediumWeight,
          fontSize: fonts.large,
          color: themeData.text,
          borderRadius: "10px",
          padding: "0 12px",
        }}
        type="text"
        placeholder="Quantity"
        onChange={(e) => setQuantity(e.target.value)}
        value={quantity}
      />
      <input
        style={{
          width: "75%",
          height: "100%",
          backgroundColor: themeData.miniBackground,
          border: "none",
          outline: "none",
          fontFamily: fonts.body,
          fontWeight: fonts.mediumWeight,
          fontSize: fonts.large,
          color: themeData.text,
          padding: "0 12px",
          borderRadius: "10px",
        }}
        type="text"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
    </div>
  );
};

export default QuantityAndTitleField;
