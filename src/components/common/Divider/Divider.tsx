import type { DividerProps } from "./Divider.types.ts";

const Divider: React.FC<DividerProps> = ({
  orientation = "horizontal",
  color = "#ccc",
  opacity = 1,
  thickness = 1,
  length = "100%",
  style,
  margin = "0 0",
}) => {
  const isHorizontal = orientation === "horizontal";

  const dividerStyle: React.CSSProperties = {
    backgroundColor: color,
    opacity: opacity,
    width: isHorizontal ? length : `${thickness}px`,
    height: isHorizontal ? `${thickness}px` : length,
    flexShrink: 0,
    margin: margin,
    ...style,
  };

  return <div style={dividerStyle} />;
};

export default Divider;
