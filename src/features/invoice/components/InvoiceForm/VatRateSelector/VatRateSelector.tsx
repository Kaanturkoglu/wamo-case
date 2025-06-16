import FormFieldHeader from "../FormFieldHeader";
import OptionButton from "../../../../../components/common/OptionButton";
import { useState } from "react";
import type { VatRateSelectorProps } from "./VatRateSelector.types";
import { fonts } from "../../../../../constants/fonts";
import { useTheme } from "../../../../../hooks/useTheme";

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

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <FormFieldHeader title="VAT Rate" />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "start",
          alignItems: "center",
          width: "100%",
          marginTop: "8px",
          marginBottom: "16px",
          gap: "8px",
        }}
      >
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
        <input
          type="text"
          value={customValue}
          onChange={handleCustomChange}
          placeholder="0-100 %"
          style={{
            width: "80px",
            minWidth: "80px",
            height: "60px",
            borderRadius: "30px",
            padding: "0 12px",
            fontSize: fonts.medium,
            fontFamily: fonts.body,
            fontWeight: fonts.mediumWeight,
            color: themeData.pickColor,
            margin: "8px 0",
            backgroundColor: themeData.pickColorBg,
            border: "none",
            outline: "none",
          }}
        />
      )}
    </div>
  );
};

export default VatRateSelector;
