import { Button } from "antd";
import type { SideBarItemProps } from "./SideBarItem.types";
//import { useTheme } from "../../../hooks/useTheme";

const SideBarItem = ({ isSelected, onSelect, icon }: SideBarItemProps) => {
  //const { themeData, theme } = useTheme();

  const selectedBackground = isSelected
    ? "rgba(82, 11, 244, 0.2)"
    : "transparent";

  return (
    <div
      onClick={onSelect}
      style={{
        width: "100%",
        height: "50px",
        alignContent: "center",
        borderWidth: "0px",
        cursor: "pointer",
      }}
    >
      <Button
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
        type="text"
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
      </Button>
    </div>
  );
};

export default SideBarItem;
