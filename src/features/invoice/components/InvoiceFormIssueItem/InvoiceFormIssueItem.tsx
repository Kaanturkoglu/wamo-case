import { fonts } from "../../../../constants/fonts";
import { useTheme } from "../../../../hooks/useTheme";
import dateIcon from "../../../../assets/datePickIcon.png";

const InvoiceFormIssueItem = () => {
  const { themeData } = useTheme();
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          fontFamily: fonts.body,
          fontWeight: fonts.boldWeight,
          fontSize: fonts.medium,
          marginBottom: "8px",
        }}
      >
        Issue Date
      </div>
      <div
        style={{
          height: "80px",
          width: "100%",
          backgroundColor: themeData.primary,
          borderRadius: "10px",
          cursor: "pointer",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px",
        }}
        onClick={() => {}}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontFamily: fonts.body,
              fontWeight: fonts.boldWeight,
              fontSize: fonts.large,
              marginBottom: "8px",
            }}
          >
            Issue Date
          </div>
          <div
            style={{
              fontFamily: fonts.body,
              fontWeight: fonts.mediumWeight,
              fontSize: fonts.medium,
              marginBottom: "8px",
              color:"blue"
            }}
          >
            Today
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#e8e9ed",
            borderRadius: "50px",
            height: "50px",
            width: "50px",
            display: "flex", 
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={dateIcon}
            alt="Date Pick"
            style={{
              height: "26px",
              width: "26px",
              objectFit: "contain",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default InvoiceFormIssueItem;
