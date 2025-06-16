import { useMemo } from "react";
import { fonts } from "../../../../../constants/fonts";
import { useTheme } from "../../../../../hooks/useTheme";
import { useInvoiceForm } from "../../../../../context/InvoiceFormContext";
import { currencySymbols, type Currency } from "../../../../../types/currency";
import Divider from "../../../../../components/common/Divider";

interface SummaryCalculations {
  totalExclVAT: number;
  totalVATAmount: number;
  totalInclVAT: number;
  currency: string;
}

const ItemsSummary = () => {
  const { themeData } = useTheme();
  const { formData } = useInvoiceForm();

  const calculations: SummaryCalculations = useMemo(() => {
    if (!formData.items || formData.items.length === 0) {
      return {
        totalExclVAT: 0,
        totalVATAmount: 0,
        totalInclVAT: 0,
        currency: "EUR",
      };
    }

    const currency = formData.items[0]?.currency || "EUR";

    let totalExclVAT = 0;
    let totalVATAmount = 0;

    formData.items.forEach((item) => {
      const itemTotal = item.price * item.quantity;
      const itemVATAmount = (itemTotal * item.vatRate) / 100;

      totalExclVAT += itemTotal;
      totalVATAmount += itemVATAmount;
    });

    const totalInclVAT = totalExclVAT + totalVATAmount;

    return {
      totalExclVAT,
      totalVATAmount,
      totalInclVAT,
      currency,
    };
  }, [formData.items]);

  const formatCurrency = (amount: number, currency: string): string => {
    const symbol = currencySymbols[currency as Currency] || currency;
    return `${symbol}${amount.toFixed(2)}`;
  };

  const summaryRowStyle = {
    display: "flex",
    flexDirection: "row" as const,
    justifyContent: "space-between",
    alignItems: "center",
    padding: "8px 0",
  };

  const labelStyle = {
    fontFamily: fonts.body,
    fontSize: fonts.small,
    fontWeight: fonts.boldWeight,
    color: themeData.gray,
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap" as const,
  };

  const valueStyle = {
    fontFamily: fonts.body,
    fontSize: fonts.small,
    fontWeight: fonts.boldWeight,
    color: themeData.gray,
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap" as const,
  };

  const totalValueStyle = {
    ...valueStyle,
    color: themeData.text,
    fontSize: fonts.medium,
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "40%",
        minWidth: "200px",
      }}
    >
      <div style={summaryRowStyle}>
        <div style={labelStyle}>Total excl. VAT</div>
        <div style={valueStyle}>
          {formatCurrency(calculations.totalExclVAT, calculations.currency)}
        </div>
      </div>
      <Divider
        orientation="horizontal"
        color="#b4b5b7"
        thickness={1.5}
        length="100%"
        margin="4px 0"
        opacity={0.5}
      />

      <div style={summaryRowStyle}>
        <div style={labelStyle}>Total VAT Amount</div>
        <div style={valueStyle}>
          {formatCurrency(calculations.totalVATAmount, calculations.currency)}
        </div>
      </div>
      <Divider
        orientation="horizontal"
        color="#b4b5b7"
        thickness={1.5}
        length="100%"
        margin="4px 0"
        opacity={0.5}
      />

      <div style={summaryRowStyle}>
        <div
          style={{
            ...labelStyle,
            color: themeData.text,
            fontSize: fonts.medium,
          }}
        >
          Total including VAT
        </div>
        <div style={totalValueStyle}>
          {formatCurrency(calculations.totalInclVAT, calculations.currency)}
        </div>
      </div>
      <Divider
        orientation="horizontal"
        color="#b4b5b7"
        thickness={1.5}
        length="100%"
        margin="4px 0"
        opacity={0.5}
      />
    </div>
  );
};

export default ItemsSummary;
