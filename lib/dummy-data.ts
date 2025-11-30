export const aqiTrends = [
    { time: "00:00", pm25: 120, pm10: 180, aqi: 150 },
    { time: "04:00", pm25: 110, pm10: 160, aqi: 135 },
    { time: "08:00", pm25: 180, pm10: 250, aqi: 215 },
    { time: "12:00", pm25: 220, pm10: 300, aqi: 270 },
    { time: "16:00", pm25: 190, pm10: 260, aqi: 225 },
    { time: "20:00", pm25: 150, pm10: 210, aqi: 180 },
    { time: "23:59", pm25: 130, pm10: 190, aqi: 160 },
];

export const sensorStatus = {
    active: 124,
    inactive: 3,
    maintenance: 5,
    total: 132,
};

export const alerts = [
    {
        id: 1,
        type: "critical",
        message: "High PM2.5 levels detected in Anand Vihar Zone.",
        timestamp: "10 mins ago",
    },
    {
        id: 2,
        type: "warning",
        message: "Traffic congestion leading to AQI spike in CP.",
        timestamp: "25 mins ago",
    },
    {
        id: 3,
        type: "info",
        message: "Solar-powered hubs active in 15 new locations.",
        timestamp: "1 hour ago",
    },
];

export const hotspots = [
    { id: 1, name: "Anand Vihar", aqi: 320, status: "Severe" },
    { id: 2, name: "R.K. Puram", aqi: 210, status: "Poor" },
    { id: 3, name: "Punjabi Bagh", aqi: 180, status: "Moderate" },
    { id: 4, name: "ITO", aqi: 250, status: "Poor" },
];

export const mlPrediction = {
    prediction: "AQI likely to improve by 15% in next 4 hours due to wind speed increase.",
    confidence: "85%",
    factors: ["Wind Speed > 10km/h", "Reduced Traffic Flow"],
};
