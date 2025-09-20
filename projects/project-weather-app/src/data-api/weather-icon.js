export async function getWeatherIcon(iconCode) {
  try {
    const iconModule = await import(
      /* webpackMode: "eager" */
      `../4th-set-color/${iconCode}.png`
    );
    return iconModule.default; // Return the resolved URL
  } catch (error) {
    console.error(`Failed to load icon for ${iconCode}:`, error);
    // Fallback to a default icon if the specific one doesn't exist
  }
}
