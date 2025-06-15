import React, { useState, useRef } from "react";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import { useInvoiceForm } from "../../../../../../hooks/useInvoiceForm";
import { fonts } from "../../../../../../constants/fonts";
import { useTheme } from "../../../../../../hooks/useTheme";
import dateIconPurple from "../../../../../../assets/datePickIcon.png";
import dateIconGreen from "../../../../../../assets/datePickIconGreen.png";
import FormFieldHeader from "../../FormFieldHeader";

const FormIssueField: React.FC = () => {
  const { theme, themeData } = useTheme();
  const { form, watched } = useInvoiceForm();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  const selectedDate = watched.issueDate;
  const formattedDate = selectedDate
    ? selectedDate === dayjs().format("YYYY-MM-DD")
      ? "Today"
      : dayjs(selectedDate, "YYYY-MM-DD").format("DD.MM.YYYY")
    : "";

  return (
    <div
      ref={wrapperRef}
      style={{ position: "relative", marginBottom: "20px" }}
    >
      <input {...form.register("issueDate")} type="hidden" />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <FormFieldHeader title="Issue date" />

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
          onClick={() => setOpen(true)}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontFamily: fonts.body,
                fontWeight: fonts.boldWeight,
                fontSize: fonts.large,
                color: themeData.text,
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
                color: themeData.pickColor,
              }}
            >
              {formattedDate}
            </div>
          </div>
          <div
            style={{
              backgroundColor: themeData.miniBackground,
              borderRadius: "50px",
              height: "50px",
              width: "50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={theme === "light" ? dateIconPurple : dateIconGreen}
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
      <DatePicker
        open={open}
        value={selectedDate ? dayjs(selectedDate, "YYYY-MM-DD") : null}
        getPopupContainer={() => wrapperRef.current || document.body}
        onOpenChange={setOpen}
        onChange={(_, dateString) => {
          if (typeof dateString === "string" && dateString) {
            form.setValue("issueDate", dateString, { shouldValidate: true });
          }
        }}
        disabledDate={(current) => {
          if (!current) return false;
          return current.isBefore(dayjs(), "day");
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

export default FormIssueField;
