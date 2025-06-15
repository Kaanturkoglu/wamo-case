import type { OptionButtonProps } from "./OptionButton.types";
import { fonts } from "../../../constants/fonts"; 
import { useTheme } from "../../../hooks/useTheme";

const OptionButton = ({
  value,
  onClick,
  isSelected = false,
}: OptionButtonProps) => {
  const { themeData } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        borderRadius: "24px",
        padding: "12px",
        height: "100%",
        minWidth: "80px",
        backgroundColor: isSelected
          ? themeData.pickColor
          : themeData.pickColorBg,
        cursor: "pointer",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: fonts.body,
        fontWeight: fonts.boldWeight,
        fontSize: fonts.large,
        color: isSelected ? themeData.pickColorBg : themeData.pickColor,
        transition: "all 0.2s ease",
        border: isSelected
          ? `2px solid ${themeData.pickColor}`
          : "2px solid transparent",
      }}
      onClick={onClick}
    >
      {value}
    </div>
  );
};

export default OptionButton;
