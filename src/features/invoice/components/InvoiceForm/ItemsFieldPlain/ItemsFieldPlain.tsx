// src/components/forms/ItemsFieldPlain/ItemsFieldPlain.tsx
import { fonts } from "../../../../../constants/fonts";
import { useTheme } from "../../../../../hooks/useTheme";
import boxIconLightTheme from "../../../../../assets/boxIconLightTheme.png";
import boxIconDarkTheme from "../../../../../assets/boxIconDarkTheme.png";
import type { ItemsFieldPlainProps } from "./ItemsFieldPlain.types";
import styles from "../../../../../styles/components/forms/ItemsFieldPlain.module.css";

const ItemsFieldPlain = ({ onClick }: ItemsFieldPlainProps) => {
  const { theme, themeData } = useTheme();

  const cssVariables = {
    "--items-field-bg-color": themeData.primary,
    "--items-field-icon-bg": themeData.miniBackground,
    "--items-field-text-color": themeData.text,
    "--items-field-gray-color": themeData.gray,
    "--items-field-font-family": fonts.body,
    "--items-field-font-weight-bold": fonts.boldWeight,
    "--items-field-font-weight-medium": fonts.mediumWeight,
    "--items-field-font-size-medium": fonts.medium,
    "--items-field-font-size-large": fonts.large,
  } as React.CSSProperties;

  return (
    <div className={styles.container} style={cssVariables}>
      <div className={styles.header}>Items</div>
      <div className={styles.fieldContainer} onClick={onClick}>
        <div className={styles.textSection}>
          <div className={styles.title}>Items</div>
          <div className={styles.subtitle}>Select or add items</div>
        </div>
        <div className={styles.iconContainer}>
          <img
            src={theme === "light" ? boxIconLightTheme : boxIconDarkTheme}
            alt="Items"
            className={styles.icon}
          />
        </div>
      </div>
    </div>
  );
};

export default ItemsFieldPlain;
