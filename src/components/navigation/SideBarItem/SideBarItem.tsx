import type { SideBarItemProps } from "./SideBarItem.types";
import { useTheme } from "../../../hooks/useTheme";
import { hexToRgb } from "../../../utils/hexToRgb";

const SideBarItem = ({ isSelected, onSelect, icon }: SideBarItemProps) => {
  const { themeData } = useTheme();

  const secondaryRgb = hexToRgb(themeData.secondary);
  const selectedBackground = isSelected
    ? secondaryRgb
      ? `rgba(${secondaryRgb.r}, ${secondaryRgb.g}, ${secondaryRgb.b}, 0.2)`
      : "rgba(82, 11, 244, 0.2)"
    : "transparent";

  return (
    <div
      onClick={onSelect}
      style={{
        width: "100%",
        height: "50px",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          padding: "8px",
          borderWidth: "0px",
          boxShadow: "none",
          backgroundColor: "transparent",
        }}
      >
        <div
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "20%",
            backgroundColor: selectedBackground,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {icon}
        </div>
      </div>
    </div>
  );
};

export default SideBarItem;
