import { useTheme } from "../../../../../hooks/useTheme";
import plusIconLight from "../../../../../assets/plusIconLight.png";
import plusIconDark from "../../../../../assets/plusIconDark.png";
import { fonts } from "../../../../../constants/fonts";
import type { AddMoreItemsProps } from "./AddMoreItems.types";

const AddMoreItems = ({ onClick }: AddMoreItemsProps) => {
  const { theme, themeData } = useTheme();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        alignItems: "end",
        cursor: "pointer",
        marginTop: "8px",
      }}
      onClick={onClick}
    >
      <div
        style={{
          marginRight: "8px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={theme === "light" ? plusIconLight : plusIconDark}
          alt="Date Pick"
          style={{
            height: "24px",
            width: "24px",
            objectFit: "contain",
          }}
        />
      </div>
      <div
        style={{
          fontFamily: fonts.body,
          fontSize: fonts.medium,
          fontWeight: fonts.boldWeight,
          color: themeData.pickColor,
          textOverflow: "ellipsis",
          overflow: "hidden",
          whiteSpace: "nowrap",
          marginBottom: "4px",
          textDecoration: "underline",
        }}
      >
        Add more items
      </div>
    </div>
  );
};

export default AddMoreItems;
