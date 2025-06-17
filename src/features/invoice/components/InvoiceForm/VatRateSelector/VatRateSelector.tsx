import FormFieldHeader from "../FormFieldHeader";
import OptionButton from "../../../../../components/common/OptionButton";
import { useState } from "react";
import type { VatRateSelectorProps } from "./VatRateSelector.types";
import { fonts } from "../../../../../constants/fonts";
import { useTheme } from "../../../../../hooks/useTheme";
import styles from "../../../../../styles/components/forms/VatRateSelector.module.css";

type VatOption = "0%" | "10%" | "20%" | "Custom";

const VatRateSelector = ({ setVatRate }: VatRateSelectorProps) => {
  const { themeData } = useTheme();
  const [selectedOption, setSelectedOption] = useState<VatOption>("0%");
  const [customValue, setCustomValue] = useState("");

  const handleVatOptionClick = (rate: VatOption) => {
    setSelectedOption(rate);

    if (rate === "Custom") {
      setVatRate(customValue);
    } else {
      const numericRate = rate.replace("%", "");
      setVatRate(numericRate);
    }
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value)) {
      setCustomValue(value);
      if (selectedOption === "Custom") {
        setVatRate(value);
      }
    }
  };

  const cssVariables = {
    "--vat-font-family": fonts.body,
    "--vat-font-size-medium": fonts.medium,
    "--vat-font-size-large": fonts.large,
    "--vat-font-weight-medium": fonts.mediumWeight,
    "--vat-font-weight-bold": fonts.boldWeight,
    "--vat-pick-color": themeData.pickColor,
    "--vat-pick-color-bg": themeData.pickColorBg,
  } as React.CSSProperties;

  return (
    <div className={styles.container} style={cssVariables}>
      <FormFieldHeader title="VAT Rate" />
      <div className={styles.optionsContainer}>
        <OptionButton
          value="0%"
          onClick={() => handleVatOptionClick("0%")}
          isSelected={selectedOption === "0%"}
        />
        <OptionButton
          value="10%"
          onClick={() => handleVatOptionClick("10%")}
          isSelected={selectedOption === "10%"}
        />
        <OptionButton
          value="20%"
          onClick={() => handleVatOptionClick("20%")}
          isSelected={selectedOption === "20%"}
        />
        <OptionButton
          value="Custom"
          onClick={() => handleVatOptionClick("Custom")}
          isSelected={selectedOption === "Custom"}
        />
      </div>

      {selectedOption === "Custom" && (
        <div className={styles.customInputContainer}>
          <input
            name="custom-vat-rate"
            id="custom-vat-rate"
            type="text"
            value={customValue}
            onChange={handleCustomChange}
            placeholder="0-100"
            className={styles.customInput}
          />
          <div className={styles.percentSymbol}>%</div>
        </div>
      )}
    </div>
  );
};

export default VatRateSelector;
