import Divider from "../../../../../components/common/Divider";
import { useTheme } from "../../../../../hooks/useTheme";
import Note from "../Note";
import PaymentDetails from "../PaymentDetails/PaymentDetails";

const NotesSection = () => {
  const { theme, themeData } = useTheme();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        borderRadius: "10px",
        backgroundColor: themeData.background,
        padding: "16px",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <PaymentDetails
        beneficiaryName="Avery Ellis"
        BIC="MDLR"
        IBAN="ES4982130129302930129301293"
        reference="QVFSYDX"
      />
      <Divider
        orientation="vertical"
        color="#b4b5b7"
        length="90%"
        margin="0 10px"
        opacity={0.5}
        thickness={1.5}
        style={{ marginLeft: "12px", marginRight: "12px" }}
      ></Divider>{" "}
      <Note note="Please make the payment via wire transfer at soonest"></Note>
    </div>
  );
};

export default NotesSection;
