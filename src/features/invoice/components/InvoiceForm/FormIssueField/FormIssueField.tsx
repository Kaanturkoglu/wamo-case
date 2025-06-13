import React, { useState, useRef } from "react";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import { useFormContext } from "react-hook-form";
import { fonts } from "../../../../../constants/fonts";
import { useTheme } from "../../../../../hooks/useTheme";
import dateIconPurple from "../../../../../assets/datePickIcon.png";
import dateIconGreen from "../../../../../assets/datePickIconGreen.png";
import type { InvoiceFormValues } from "../../../../../types/invoice";

const FormIssueField: React.FC = () => {
  const { theme, themeData } = useTheme();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  const { register, setValue, watch } = useFormContext<InvoiceFormValues>();
  const selectedDate = watch("issueDate");
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
      <input {...register("issueDate")} type="hidden" />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            fontFamily: fonts.body,
            fontWeight: fonts.boldWeight,
            fontSize: fonts.medium,
            color: themeData.text,
            marginBottom: "8px",
          }}
        >
          Issue Date
        </div>
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
            setValue("issueDate", dateString, { shouldValidate: true });
          }
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
