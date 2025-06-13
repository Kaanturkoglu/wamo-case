import type { DueDateButtonProps } from "./DueDateButton.types";
import { fonts } from "../../../../../constants/fonts";
import { useTheme } from "../../../../../hooks/useTheme";

const DueDateButton = ({ value, onClick, isSelected = false }: DueDateButtonProps) => {
  const { themeData } = useTheme();
  
  return (
    <div
      style={{
        display: "flex",
        borderRadius: "24px",
        padding: "12px",
        height: "100%",
        minWidth: "80px", // Ensure consistent button sizing
        backgroundColor: isSelected ? themeData.blue : themeData.lightBlue,
        cursor: "pointer",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: fonts.body,
        fontWeight: fonts.boldWeight,
        fontSize: fonts.large,
        color: isSelected ? themeData.lightBlue : themeData.blue,
        transition: "all 0.2s ease", // Smooth transition for better UX
        border: isSelected ? `2px solid ${themeData.blue}` : "2px solid transparent",
      }}
      onClick={onClick}
    >
      {value}
    </div>
  );
};

export default DueDateButton;