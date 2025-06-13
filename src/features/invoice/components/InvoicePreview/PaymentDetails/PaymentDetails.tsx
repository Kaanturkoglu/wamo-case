import type { PaymentDetailsProps } from "./PaymentDetails.types";
import { fonts } from "../../../../../constants/fonts";
import { useTheme } from "../../../../../hooks/useTheme";

const PaymentDetails = ({
  beneficiaryName,
  BIC,
  IBAN,
  reference,
}: PaymentDetailsProps) => {
  const { themeData } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <div
        style={{
          fontFamily: fonts.body,
          fontSize: fonts.large,
          fontWeight: fonts.boldWeight,
          color: themeData.gray,
          marginBottom: "12px",
        }}
      >
        Payment details
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "4px",
          overflow: "auto",
          textOverflow: "ellipsis",
        }}
      >
        {[
          { label: "Beneficiary name", value: beneficiaryName },
          { label: "BIC", value: BIC },
          { label: "IBAN", value: IBAN },
          { label: "Reference", value: reference },
        ].map((item) => (
          <div
            key={item.label}
            style={{
              display: "grid",
              gridTemplateColumns: "120px 1fr",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontFamily: fonts.body,
                fontSize: fonts.small,
                fontWeight: fonts.boldWeight,
                color: themeData.text,
              }}
            >
              {item.label}
            </span>
            <span
              style={{
                fontFamily: fonts.body,
                fontSize: fonts.small,
                fontWeight: fonts.mediumWeight,
                color: themeData.gray,
              }}
            >
              {item.value || "Not provided"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentDetails;
