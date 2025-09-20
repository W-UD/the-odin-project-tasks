export async function getWeatherIcon(iconCode) {
  try {
    const iconModule = await import(`../4th-set-color/${iconCode}.png`);
    return iconModule.default; // Return the resolved URL
  } catch (error) {
    console.error(`Failed to load icon for ${iconCode}:`, error);
  }
}
