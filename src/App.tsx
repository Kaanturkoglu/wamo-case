import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { InvoiceFormProvider } from "./context/InvoiceFormContext";
import GreetingPage from "./screens/greeting_screen/GreetingScreen";
import InvoiceScreen from "./screens/invoice_screen/InvoiceScreen";
import FinalScreen from "./screens/final_screen/FinalScreen";

function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          width: "100vw",
          overflow: "hidden",
        }}
      >
        <Router>
          <ThemeProvider>
            <InvoiceFormProvider>
              <Routes>
                <Route path="/" element={<Navigate to="/greeting" replace />} />
                <Route path="/greeting" element={<GreetingPage />} />
                <Route path="/invoice" element={<InvoiceScreen />} />
                <Route path="/final" element={<FinalScreen />} />
                <Route path="*" element={<Navigate to="/greeting" replace />} />
              </Routes>
            </InvoiceFormProvider>
          </ThemeProvider>
        </Router>
      </div>
    </>
  );
}

export default App;
