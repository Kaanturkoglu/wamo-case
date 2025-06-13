export function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const sanitizedHex = hex.replace(/^#/, "");

  const fullHex =
    sanitizedHex.length === 3
      ? sanitizedHex.split("").map((c) => c + c).join("")
      : sanitizedHex;

  if (!/^[0-9a-fA-F]{6}$/.test(fullHex)) return null;

  const r = parseInt(fullHex.slice(0, 2), 16);
  const g = parseInt(fullHex.slice(2, 4), 16);
  const b = parseInt(fullHex.slice(4, 6), 16);

  return { r, g, b };
}