export const getDarkerShade = (hex: string): string => {
  // Remove the # if present
  hex = hex.replace(/^#/, "");

  // Parse the hex string
  let r = parseInt(hex.slice(0, 2), 16),
    g = parseInt(hex.slice(2, 4), 16),
    b = parseInt(hex.slice(4, 6), 16);

  // Decrease each component to create a darker shade
  r = Math.max(0, r - 20);
  g = Math.max(0, g - 20);
  b = Math.max(0, b - 20);

  // Convert back to hex
  return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
};

export const isLightColor = (hex: string): boolean => {
  const color = parseInt(hex.replace("#", ""), 16);
  const r = (color >> 16) & 0xff;
  const g = (color >> 8) & 0xff;
  const b = color & 0xff;

  // Calculate perceived brightness
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  return brightness > 128;
};
