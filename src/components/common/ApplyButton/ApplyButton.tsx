import type { ApplyButtonProps } from "./ApplyButton.types";
import { useTheme } from "../../../hooks/useTheme";
import { fonts } from "../../../constants/fonts";
import styles from "../../../styles/components/common/ApplyButton.module.css";

const ApplyButton = ({ onClick, text, disabled, style }: ApplyButtonProps) => {
  const { themeData } = useTheme();

  const buttonClasses = [styles.button, disabled && styles["button--disabled"]]
    .filter(Boolean)
    .join(" ");

  const cssVariables = {
    "--button-bg-color": disabled ? themeData.gray : themeData.secondary,
    "--button-bg-color-hover": disabled ? themeData.gray : themeData.secondary,
    "--button-bg-color-disabled": themeData.gray,
    "--button-text-color": themeData.primary,
    "--button-font-family": fonts.body,
    "--button-font-size": fonts.medium,
    "--button-font-weight": fonts.boldWeight,
  } as React.CSSProperties;

  return (
    <div
      className={buttonClasses}
      style={{
        ...cssVariables,
        ...style,
      }}
      onClick={!disabled ? onClick : undefined}
    >
      {text || null}
    </div>
  );
};

export default ApplyButton;
