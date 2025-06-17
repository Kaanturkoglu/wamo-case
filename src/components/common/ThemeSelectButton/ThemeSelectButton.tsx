// src/components/common/ThemeSelectButton/ThemeSelectButton.tsx
import { useTheme } from "../../../hooks/useTheme";
import moonIcon from "../../../assets/moonIcon.png";
import sunIcon from "../../../assets/sunIcon.png";
import styles from "../../../styles/components/common/ThemeSelectButton.module.css";

const ThemeSelectButton = () => {
  const { theme, toggleTheme } = useTheme();

  const handleThemeToggle = () => {
    toggleTheme();
  };

  return (
    <div 
      onClick={handleThemeToggle}
      className={styles.container}
    >
      <div className={styles.wrapper}>
        <div className={styles.iconContainer}>
          {theme === "light" ? (
            <img
              src={sunIcon}
              alt="Switch to Dark Mode"
              className={styles.icon}
            />
          ) : (
            <img
              src={moonIcon}
              alt="Switch to Light Mode"
              className={styles.icon}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ThemeSelectButton;