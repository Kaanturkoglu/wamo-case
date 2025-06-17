import { useInvoiceForm } from "../../../../../context/InvoiceFormContext";
import { fonts } from "../../../../../constants/fonts";
import { useTheme } from "../../../../../hooks/useTheme";
import { currencySymbols } from "../../../../../types/currency";

const MiniSummary = () => {
  const { themeData } = useTheme();
  const { formData } = useInvoiceForm();

  function formatDateToString(dateString: string | undefined) {
    if (!dateString) return "";

    const date = new Date(dateString);
    const day = date.toLocaleDateString("en-GB", { day: "2-digit" });
    const month = date.toLocaleDateString("en-GB", { month: "long" });
    const year = date.getFullYear();

    return `${day} ${month}, ${year}`;
  }

  return (
    <div
      style={{
        fontFamily: fonts.body,
        fontSize: fonts.large,
        fontWeight: fonts.boldWeight,
        color: themeData.text,
        textOverflow: "ellipsis",
        overflow: "hidden",
        whiteSpace: "nowrap",
        marginBottom: "4px",
      }}
    >
      {formData.items && formData.items.length > 0 && formData.items[0].currency
        ? currencySymbols[
            formData.items[0].currency as keyof typeof currencySymbols
          ] +
          formData?.totalInclVAT.toFixed(2) +
          " due " +
          formatDateToString(formData?.dueDate)
        : currencySymbols["EUR"] +
          formData?.totalInclVAT.toFixed(2) +
          " due " +
          formatDateToString(formData?.dueDate)}
    </div>
  );
};

export default MiniSummary;
