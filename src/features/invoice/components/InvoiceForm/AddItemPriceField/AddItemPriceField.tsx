import { useState } from "react";
import { useTheme } from "../../../../../hooks/useTheme";
import { fonts } from "../../../../../constants/fonts";
import {
  currencyIcons,
  currencySymbols,
  type Currency,
} from "../../../../../types/currency";

const AddItemInputField = () => {
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>("EUR");
  const { themeData } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        padding: "16px",
        marginTop: "12px",
        flexDirection: "row",
        height: "70px",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: "10px",
        backgroundColor: themeData.miniBackground,
      }}
    >
      <div
        style={{
          fontFamily: fonts.body,
          color: themeData.text,
          fontWeight: fonts.boldWeight,
          fontSize: fonts.xLarge,
        }}
      >
        {currencySymbols[selectedCurrency]}
      </div>
      <input
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: themeData.miniBackground,
          border: "none",
          outline: "none",
          fontFamily: fonts.body,
          fontWeight: fonts.boldWeight,
          fontSize: fonts.xLarge,
          color: themeData.text,
          marginRight: "8px",
          marginLeft: "8px",
        }}
        type="number"
        placeholder="0"
      ></input>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          gap: "4px",
          borderRadius: "30px",
          padding: "4px",
          backgroundColor: themeData.primary,
        }}
      >
        <img
          src={currencyIcons[selectedCurrency]}
          alt="Currency Icon"
          style={{
            height: "24px",
            width: "24px",
            objectFit: "contain",
          }}
        />
        <select
          value={selectedCurrency}
          onChange={(e) => setSelectedCurrency(e.target.value as Currency)}
          style={{
            fontFamily: fonts.body,
            color: themeData.text,
            border: "none",
            fontSize: fonts.medium,
            fontWeight: fonts.boldWeight,
            cursor: "pointer",
            outline: "none",
            backgroundColor: themeData.primary,
          }}
        >
          {Object.keys(currencySymbols).map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default AddItemInputField;
