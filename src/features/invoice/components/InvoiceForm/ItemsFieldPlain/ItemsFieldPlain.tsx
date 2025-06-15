import { fonts } from "../../../../../constants/fonts";
import { useTheme } from "../../../../../hooks/useTheme";
import boxIconLightTheme from "../../../../../assets/boxIconLightTheme.png";
import boxIconDarkTheme from "../../../../../assets/boxIconDarkTheme.png";
import type { ItemsFieldPlainProps } from "./ItemsFieldPlain.types";

const ItemsFieldPlain = ({ onClick }: ItemsFieldPlainProps) => {
  const { theme, themeData } = useTheme();

  return (
    <div
      style={{ display: "flex", flexDirection: "column", marginBottom: "20px" }}
    >
      <div
        style={{
          fontFamily: fonts.body,
          fontWeight: fonts.boldWeight,
          fontSize: fonts.medium,
          color: themeData.text,
          marginBottom: "8px",
        }}
      >
        Items
      </div>
      <div
        style={{
          width: "100%",
          height: "80px",
          backgroundColor: themeData.primary,
          borderRadius: "10px",
          cursor: "pointer",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px",
        }}
        onClick={onClick}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
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
            }}
          >
            Items
          </div>

          <div
            style={{
              fontFamily: fonts.body,
              fontWeight: fonts.mediumWeight,
              fontSize: fonts.medium,
              marginBottom: "4px",
              color: themeData.gray,
            }}
          >
            Select or add items
          </div>
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
    </div>
  );
};

export default ItemsFieldPlain;
