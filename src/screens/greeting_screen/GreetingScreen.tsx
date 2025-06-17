import { ThemeProvider } from "../../context/ThemeContext";
import GreetingLayout from "../../layouts/GreetingLayout";
import GreetingDashboard from "../../features/greeting/GreetingDashboard";

const GreetingScreen = () => {
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
          <GreetingLayout>
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <GreetingDashboard />
            </div>
          </GreetingLayout>
      </ThemeProvider>
    </div>
  );
};

export default GreetingScreen;
