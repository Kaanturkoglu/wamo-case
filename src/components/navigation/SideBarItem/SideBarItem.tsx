import type { SideBarItemProps } from "./SideBarItem.types";
import { useTheme } from "../../../hooks/useTheme";
import { hexToRgb } from "../../../utils/hexToRgb";
import styles from "../../../styles/components/navigation/SideBarItem.module.css";

const SideBarItem = ({ isSelected, onSelect, icon }: SideBarItemProps) => {
  const { themeData } = useTheme();

  const getSelectedBackground = () => {
    if (!isSelected) return "transparent";

    const secondaryRgb = hexToRgb(themeData.secondary);
    return secondaryRgb
      ? `rgba(${secondaryRgb.r}, ${secondaryRgb.g}, ${secondaryRgb.b}, 0.2)`
      : "rgba(82, 11, 244, 0.2)";
  };

  const cssVariables = {
    "--sidebar-item-bg": getSelectedBackground(),
  } as React.CSSProperties;

  return (
    <div onClick={onSelect} className={styles.container} style={cssVariables}>
      <div className={styles.wrapper}>
        <div className={styles.iconContainer}>{icon}</div>
      </div>
    </div>
  );
};

export default SideBarItem;
