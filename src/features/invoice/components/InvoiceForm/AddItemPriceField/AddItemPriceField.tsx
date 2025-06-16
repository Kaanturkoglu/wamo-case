import { useTheme } from "../../../../../hooks/useTheme";
import { fonts } from "../../../../../constants/fonts";
import {
  currencyIcons,
  currencySymbols,
  type Currency,
} from "../../../../../types/currency";
import type { AddItemPriceFieldProps } from "./AddItemPriceField.types";

const AddItemPriceField = ({
  price,
  setPrice,
  currency,
  setCurrency,
}: AddItemPriceFieldProps) => {
  const { themeData } = useTheme();

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Allow empty string, numbers, and decimal points
    if (value === "" || /^\d*\.?\d*$/.test(value)) {
      setPrice(value);
    }
  };

  const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newCurrency = e.target.value as Currency;
    setCurrency(newCurrency);
  };

  return (
    <div
      style={{
        display: "flex",
        padding: "16px",
        marginTop: "12px",
        marginBottom: "16px",
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
        {currencySymbols[currency as Currency]}
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
        type="text"
        placeholder="0"
        onChange={handlePriceChange}
        value={price}
      />

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
          src={currencyIcons[currency as Currency]}
          alt="Currency Icon"
          style={{
            height: "24px",
            width: "24px",
            objectFit: "contain",
          }}
        />

        <select
          value={currency}
          onChange={handleCurrencyChange}
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
          {Object.keys(currencySymbols).map((currencyOption) => (
            <option key={currencyOption} value={currencyOption}>
              {currencyOption}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default AddItemPriceField;
