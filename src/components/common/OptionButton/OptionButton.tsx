// src/components/common/OptionButton/OptionButton.tsx
import type { OptionButtonProps } from "./OptionButton.types";
import { fonts } from "../../../constants/fonts";
import { useTheme } from "../../../hooks/useTheme";
import styles from "../../../styles/components/common/OptionButton.module.css";

const OptionButton = ({
  value,
  onClick,
  isSelected = false,
}: OptionButtonProps) => {
  const { themeData } = useTheme();

  const buttonClasses = [
    styles.button,
    isSelected && styles["button--selected"],
  ]
    .filter(Boolean)
    .join(" ");

  const cssVariables = {
    "--option-bg-color": isSelected
      ? themeData.pickColor
      : themeData.pickColorBg,
    "--option-text-color": isSelected
      ? themeData.pickColorBg
      : themeData.pickColor,
    "--option-font-family": fonts.body,
    "--option-font-weight": fonts.boldWeight,
    "--option-font-size": fonts.large,
    "--option-border": isSelected
      ? `2px solid ${themeData.pickColor}`
      : "2px solid transparent",
    "--option-focus-color": themeData.pickColor,
  } as React.CSSProperties;

  return (
    <div
      className={buttonClasses}
      style={cssVariables}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-pressed={isSelected}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick?.();
        }
      }}
    >
      {value}
    </div>
  );
};

export default OptionButton;
