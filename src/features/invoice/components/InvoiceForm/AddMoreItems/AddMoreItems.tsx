import { useTheme } from "../../../../../hooks/useTheme";
import plusIconLight from "../../../../../assets/plusIconLight.png";
import plusIconDark from "../../../../../assets/plusIconDark.png";
import { fonts } from "../../../../../constants/fonts";
import type { AddMoreItemsProps } from "./AddMoreItems.types";
import styles from "../../../../../styles/components/forms/AddMoreItems.module.css";

const AddMoreItems = ({ onClick }: AddMoreItemsProps) => {
  const { theme, themeData } = useTheme();

  const cssVariables = {
    "--add-more-font-family": fonts.body,
    "--add-more-font-size": fonts.medium,
    "--add-more-font-weight": fonts.boldWeight,
    "--add-more-color": themeData.pickColor,
  } as React.CSSProperties;

  return (
    <div className={styles.container} onClick={onClick} style={cssVariables}>
      <div className={styles.iconContainer}>
        <img
          src={theme === "light" ? plusIconLight : plusIconDark}
          alt="Add Items"
          className={styles.icon}
        />
      </div>
      <div className={styles.text}>Add more items</div>
    </div>
  );
};

export default AddMoreItems;
