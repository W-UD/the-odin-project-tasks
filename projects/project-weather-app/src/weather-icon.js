// src/utils/weatherIcons.js

/**
 * Dynamically imports a weather icon based on the OpenWeatherMap icon code
 * @param {string} iconCode - The icon code from API (e.g., "01d", "10n")
 * @returns {Promise} - Promise that resolves to the imported icon module
 */
export async function getWeatherIcon(iconCode) {
  try {
    // Webpack will bundle all PNG files in the weather-icons folder
    // and create a mapping for dynamic imports
    const iconModule = await import(
      /* webpackMode: "eager" */
      `./4th-set-color/${iconCode}.png`
    );
    return iconModule.default; // Return the resolved URL
  } catch (error) {
    console.error(`Failed to load icon for ${iconCode}:`, error);
    // Fallback to a default icon if the specific one doesn't exist
  }
}
