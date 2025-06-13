import { fonts } from "../../../../../constants/fonts";
import { useTheme } from "../../../../../hooks/useTheme";
import type { NoteProps } from "./Note.types";

const Note = ({ note }: NoteProps) => {
  const { themeData } = useTheme();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
      }}
    >
      <div
        style={{
          fontFamily: fonts.body,
          fontSize: fonts.large,
          fontWeight: fonts.boldWeight,
          color: themeData.gray,
          marginBottom: "8px",
        }}
      >
        Note
      </div>
      <div
        style={{
          fontFamily: fonts.body,
          fontSize: fonts.small,
          fontWeight: fonts.boldWeight,
          color: themeData.gray,
          overflow: "auto",
        }}
      >
        {note || "No additional notes provided."}
      </div>
    </div>
  );
};

export default Note;
