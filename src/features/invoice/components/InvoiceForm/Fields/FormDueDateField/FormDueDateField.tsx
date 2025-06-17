import { useTheme } from "../../../../../../hooks/useTheme";
import { useRef, useState, useEffect } from "react";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import OptionButton from "../../../../../../components/common/OptionButton";
import FormFieldHeader from "../../FormFieldHeader";
import { useInvoiceForm } from "../../../../../../context/InvoiceFormContext";

type DueDateOption = "On Receipt" | "15 Days" | "30 Days" | "Custom";

const FormDueDateField = () => {
  const { themeData } = useTheme();
  const { form, formData } = useInvoiceForm();
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [selectedOption, setSelectedOption] =
    useState<DueDateOption>("15 Days");
  const [showCustomPicker, setShowCustomPicker] = useState(false);

  const issueDate = formData.issueDate;
  const dueDate = formData.dueDate;

  const calculateDueDate = (
    option: DueDateOption,
    customDate?: string
  ): string => {
    if (option === "Custom" && customDate) {
      return customDate;
    }

    if (!issueDate) return "";

    const issueDateObj = new Date(issueDate);

    switch (option) {
      case "On Receipt":
        return issueDate;
      case "15 Days":
        return new Date(issueDateObj.getTime() + 15 * 24 * 60 * 60 * 1000)
          .toISOString()
          .slice(0, 10);
      case "30 Days":
        return new Date(issueDateObj.getTime() + 30 * 24 * 60 * 60 * 1000)
          .toISOString()
          .slice(0, 10);
      default:
        return "";
    }
  };

  useEffect(() => {
    if (selectedOption !== "Custom" && issueDate) {
      const newDueDate = calculateDueDate(selectedOption);
      form.setValue("dueDate", newDueDate, { shouldValidate: true });
    }
  }, [issueDate, selectedOption, form]);

  const handleOptionClick = (option: DueDateOption) => {
    setSelectedOption(option);

    if (option === "Custom") {
      setShowCustomPicker(true);
    } else {
      setShowCustomPicker(false);
      if (issueDate) {
        const newDueDate = calculateDueDate(option);
        form.setValue("dueDate", newDueDate, { shouldValidate: true });
      }
    }
  };

  const handleCustomDateChange = (
    _date: dayjs.Dayjs | null,
    dateString: string | string[]
  ) => {
    if (typeof dateString === "string" && dateString) {
      form.setValue("dueDate", dateString, { shouldValidate: true });
      setShowCustomPicker(false);
    }
    if (Array.isArray(dateString) && dateString.length > 0) {
      form.setValue("dueDate", dateString[0], { shouldValidate: true });
      setShowCustomPicker(false);
    }
  };

  return (
    <div
      ref={wrapperRef}
      style={{ position: "relative", marginBottom: "20px" }}
    >
      <input  {...form.register("dueDate")} type="hidden" />

      <div style={{ display: "flex", flexDirection: "column" }}>
        <FormFieldHeader title="Due Date" />
        <div
          style={{
            height: "80px",
            width: "100%",
            backgroundColor: themeData.primary,
            borderRadius: "10px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px 24px",
            gap: "8px",
          }}
        >
          <OptionButton
            value="On Receipt"
            onClick={() => handleOptionClick("On Receipt")}
            isSelected={selectedOption === "On Receipt"}
          />
          <OptionButton
            value="15 Days"
            onClick={() => handleOptionClick("15 Days")}
            isSelected={selectedOption === "15 Days"}
          />
          <OptionButton
            value="30 Days"
            onClick={() => handleOptionClick("30 Days")}
            isSelected={selectedOption === "30 Days"}
          />
          <OptionButton
            value="Custom"
            onClick={() => handleOptionClick("Custom")}
            isSelected={selectedOption === "Custom"}
          />
        </div>
      </div>
      <DatePicker
        open={showCustomPicker}
        value={dueDate ? dayjs(dueDate, "YYYY-MM-DD") : null}
        getPopupContainer={() => wrapperRef.current || document.body}
        onOpenChange={(open) => {
          if (!open) setShowCustomPicker(false);
        }}
        onChange={handleCustomDateChange}
        disabledDate={(current) => {
          if (!issueDate || !current) return false;
          return current.isBefore(dayjs(issueDate), "day");
        }}
        style={{
          position: "absolute",
          right: 0,
          width: 0,
          height: 0,
          padding: 0,
          border: "none",
          opacity: 0,
          pointerEvents: "none",
        }}
      />
    </div>
  );
};

export default FormDueDateField;
