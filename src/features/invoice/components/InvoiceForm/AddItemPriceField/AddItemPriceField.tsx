import { useTheme } from "../../../../../hooks/useTheme";
import { fonts } from "../../../../../constants/fonts";
import {
  currencyIcons,
  currencySymbols,
  type Currency,
} from "../../../../../types/currency";
import type { AddItemPriceFieldProps } from "./AddItemPriceField.types";
import styles from "../../../../../styles/components/forms/AddItemPriceField.module.css";

const AddItemPriceField = ({
  price,
  setPrice,
  currency,
  setCurrency,
  disabled = false,
}: AddItemPriceFieldProps) => {
  const { themeData } = useTheme();

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "" || /^\d*\.?\d*$/.test(value)) {
      setPrice(value);
    }
  };

  const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!disabled) {
      const newCurrency = e.target.value as Currency;
      setCurrency(newCurrency);
    }
  };

  const cssVariables = {
    "--price-field-bg": themeData.miniBackground,
    "--price-field-selector-bg": themeData.primary,
    "--price-field-text-color": themeData.text,
    "--price-field-font-family": fonts.body,
    "--price-field-font-weight-bold": fonts.boldWeight,
    "--price-field-font-size-xlarge": fonts.xLarge,
    "--price-field-font-size-medium": fonts.medium,
    "--price-field-cursor": disabled ? "not-allowed" : "pointer",
  } as React.CSSProperties;

  return (
    <div className={styles.container} style={cssVariables}>
      <div className={styles.currencySymbol}>
        {currencySymbols[currency as Currency]}
      </div>

      <input
        name="price-field"
        id="price-field"
        autoComplete="off"
        className={styles.input}
        type="text"
        placeholder="0"
        onChange={handlePriceChange}
        value={price}
      />

      <div className={styles.currencySelector}>
        <img
          src={currencyIcons[currency as Currency]}
          alt="Currency Icon"
          className={styles.currencyIcon}
        />

        <select
          value={currency}
          onChange={handleCurrencyChange}
          disabled={disabled}
          className={styles.select}
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
