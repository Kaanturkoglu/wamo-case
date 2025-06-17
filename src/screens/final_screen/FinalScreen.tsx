import { ThemeProvider } from "../../context/ThemeContext";
import FinalDashboard from "../../features/final/FinalDashboard";
import FinalLayout from "../../layouts/FinalLayout";

const FinalScreen = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        width: "100%",
        justifyContent: "start",
        alignItems: "start",
        overflowY: "auto",
        overflowX: "auto",
      }}
    >
      <ThemeProvider>
        <FinalLayout>
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FinalDashboard />
          </div>
        </FinalLayout>
      </ThemeProvider>
    </div>
  );
};

export default FinalScreen;
