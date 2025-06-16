import { useTheme } from "../../../../../hooks/useTheme";
import { fonts } from "../../../../../constants/fonts";
import type { FormFieldHeaderProps } from "./FormFieldHeader.types";

const FormFieldHeader = ({ title }: FormFieldHeaderProps) => {
  const { themeData } = useTheme();

  return (
    <div
      style={{
        fontFamily: fonts.body,
        fontWeight: fonts.boldWeight,
        fontSize: fonts.medium,
        color: themeData.text,
        marginBottom: "8px",
      }}
    >
      {title}
    </div>
  );
};

export default FormFieldHeader;
