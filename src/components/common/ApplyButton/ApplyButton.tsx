import type { ApplyButtonProps } from "./ApplyButton.types";
import { useTheme } from "../../../hooks/useTheme";
import { fonts } from "../../../constants/fonts";

const ApplyButton = ({ onClick, text, disabled, style }: ApplyButtonProps) => {
  const { themeData } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: disabled ? themeData.gray : themeData.secondary,
        color: themeData.primary,
        borderRadius: "30px",
        padding: "10px 20px",
        fontFamily: fonts.body,
        fontSize: fonts.medium,
        fontWeight: fonts.boldWeight,
        cursor: disabled ? "not-allowed" : "pointer",
        transition: "background-color 0.3s ease",
        width: "100%",
        height: "50px",
        minHeight: "50px",
        ...style,
      }}
      onClick={!disabled ? onClick : undefined}
    >
      {text ? text : null}
    </div>
  );
};

export default ApplyButton;
