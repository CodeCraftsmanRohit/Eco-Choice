import fs from 'fs';
import path from 'path';

export const getForecastData = (req, res) => {
  const filePath = path.resolve('data/sample_forecasts.json');
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      console.error("❌ Forecast data error:", err);
      return res.status(500).json({ success: false, message: "Failed to load forecast data" });
    }
    const forecasts = JSON.parse(data);
    res.status(200).json({ success: true, forecasts });
  });
};
