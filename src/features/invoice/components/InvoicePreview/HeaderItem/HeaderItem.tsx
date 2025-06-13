import { fonts } from "../../../../../constants/fonts";
import { useTheme } from "../../../../../hooks/useTheme";
import type { HeaderItemProps } from "./HeaderItem.types";

const HeaderItem = ({ title, value }: HeaderItemProps) => {
  const { themeData } = useTheme();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
      }}
    >
      <div
        style={{
          fontSize: fonts.small,
          fontWeight: fonts.mediumWeight,
          color: "#b4b5b7",
          fontFamily: fonts.body,
          marginBottom: "4px",
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontSize: fonts.small,
          color: themeData.text,
          fontFamily: fonts.body,
          fontWeight: fonts.boldWeight,
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textAlign: "end",
          width: "100%",
        }}
      >
        {value}
      </div>
    </div>
  );
};

export default HeaderItem;
