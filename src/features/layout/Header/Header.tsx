import { useTheme } from "../../../hooks/useTheme";
import cross from "../../../assets/cross.png";

const Header = () => {
  const { themeData } = useTheme();
  return (
    <div
      style={{
        display: "flex",
        height: "60px",
        minHeight: "60px",
        width: "100%",
        backgroundColor: themeData.primary,
        flexDirection: "column",
        textOverflow: "ellipsis",
        borderBottom: `1px solid ${themeData.border}`,
        position: "static"
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "start",
          padding: "0 20px",
        }}
      >
        <img
          src={cross}
          alt="Cross Icon"
          style={{
            width: "24px",
            height: "24px",
            objectFit: "contain",
            cursor: "pointer",
          }}
          onClick={() => {}}
        />
        <div
          style={{
            color: "lightgray",
            fontSize: "14px",
            paddingLeft: "10px",
            fontFamily: "Inter, sans-serif",
          }}
        >
          Invoice
        </div>
        <div
          style={{
            color: "lightgray",
            fontSize: "16px",
            paddingLeft: "8px",
            fontFamily: "Inter, sans-serif",
          }}
        >
          •
        </div>
        <div
          style={{
            color: themeData.text,
            fontSize: "14px",
            fontWeight: "600",
            paddingLeft: "8px",
            fontFamily: "Inter, sans-serif",
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: "200px",
            whiteSpace: "nowrap",
          }}
        >
          New invoice #INV-71
        </div>
      </div>
    </div>
  );
};

export default Header;
