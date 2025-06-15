import { fonts } from "../../../../../constants/fonts";
import { useTheme } from "../../../../../hooks/useTheme";
import boxIconLightTheme from "../../../../../assets/boxIconLightTheme.png";
import boxIconDarkTheme from "../../../../../assets/boxIconDarkTheme.png";
import type { AddItemProps } from "./AddItem.types";
import AddItemPriceField from "../AddItemPriceField/AddItemPriceField";
import FormFieldHeader from "../FormFieldHeader/";

const AddItem = ({ onClick }: AddItemProps) => {
  const { theme, themeData } = useTheme();

  return (
    <div
      style={{ display: "flex", flexDirection: "column", marginBottom: "20px" }}
    >
      <FormFieldHeader title="Items" />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          justifyContent: "center",
          backgroundColor: themeData.primary,
          borderRadius: "10px",
          padding: "16px",
        }}
      >
        <div
          style={{
            width: "100%",
            backgroundColor: themeData.primary,
            borderRadius: "10px",
            cursor: "pointer",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          onClick={onClick}
        >
          <div
            style={{
              fontFamily: fonts.body,
              fontWeight: fonts.boldWeight,
              fontSize: fonts.large,
              color: themeData.text,
              marginBottom: "4px",
              display: "flex",
              height: "100%",
              alignItems: "center",
            }}
          >
            Add Item
          </div>
          <div
            style={{
              backgroundColor: themeData.miniBackground,
              borderRadius: "50px",
              height: "50px",
              width: "50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={theme === "light" ? boxIconLightTheme : boxIconDarkTheme}
              alt="Date Pick"
              style={{
                height: "26px",
                width: "26px",
                objectFit: "contain",
              }}
            />
          </div>
        </div>
        <AddItemPriceField></AddItemPriceField>
      </div>
    </div>
  );
};

export default AddItem;
