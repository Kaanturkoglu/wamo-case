import "./App.css";
import InvoiceScreen from "./screens/invoice_screen/InvoiceScreen";

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
        }}
      >
        <InvoiceScreen />
      </div>
    </>
  );
}

export default App;
