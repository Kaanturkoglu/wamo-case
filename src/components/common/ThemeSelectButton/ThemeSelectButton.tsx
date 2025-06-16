import { useTheme } from "../../../hooks/useTheme";
import moonIcon from "../../../assets/moonIcon.png";
import sunIcon from "../../../assets/sunIcon.png";

const ThemeSelectButton = () => {
  const { theme, toggleTheme } = useTheme();

  const handleThemeToggle = () => {
    toggleTheme();
  };

  return (
    <div
      onClick={handleThemeToggle}
      style={{
        width: "100%",
        height: "50px",
        cursor: "pointer",
        borderRadius: "8px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "8px",
          borderWidth: "0px",
          boxShadow: "none",
          backgroundColor: "transparent",
          position: "relative",
        }}
      >
        <div
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          {theme === "light" ? (
            <img
              src={sunIcon}
              alt="Switch to Dark Mode"
              style={{
                width: "30px",
                height: "30px",
              }}
            />
          ) : (
            <img
              src={moonIcon}
              alt="Switch to Light Mode"
              style={{
                width: "30px",
                height: "30px",
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ThemeSelectButton;
