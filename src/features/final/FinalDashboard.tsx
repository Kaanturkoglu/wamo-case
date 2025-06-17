import { useTheme } from "../../hooks/useTheme";
import logo from "../../assets/wamoLogo.png";
import greenLogo from "../../assets/wamoLogoGreenSmall.png";
import { fonts } from "../../constants/fonts";

const FinalDashboard = () => {
  const { theme, themeData } = useTheme();
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          cursor: "pointer",
          padding: "4px 0",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <img
          src={theme == "light" ? logo : greenLogo}
          alt="Logo"
          style={{
            width: "100px",
            height: "100px",
            objectFit: "contain",
          }}
        />
      </div>
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          fontFamily: fonts.body,
          fontSize: fonts.xLarge,
          fontWeight: fonts.boldWeight,
          color: themeData.text,
          textOverflow: "ellipsis",
          overflow: "hidden",
          marginBottom: "4px",
        }}
      >
        Invoice Successfully Created
      </div>

      <div
        style={{
          fontFamily: fonts.body,
          fontSize: fonts.large,
          fontWeight: fonts.mediumWeight,
          color: themeData.pickColor,
          textOverflow: "ellipsis",
          overflow: "hidden",
          marginBottom: "4px",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        Thanks!
      </div>
    </div>
  );
};

export default FinalDashboard;
