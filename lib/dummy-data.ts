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

// Major hotspots with specific names
export const hotspots = [
    { id: 1, name: "Anand Vihar", aqi: 320, status: "Severe", lat: 28.6502, lng: 77.3027 },
    { id: 2, name: "R.K. Puram", aqi: 210, status: "Poor", lat: 28.5660, lng: 77.1767 },
    { id: 3, name: "Punjabi Bagh", aqi: 180, status: "Moderate", lat: 28.6614, lng: 77.1235 },
    { id: 4, name: "ITO", aqi: 250, status: "Poor", lat: 28.6280, lng: 77.2430 },
    { id: 5, name: "Dwarka Sector 8", aqi: 190, status: "Moderate", lat: 28.5700, lng: 77.0700 },
    { id: 6, name: "Okhla Phase 2", aqi: 280, status: "Poor", lat: 28.5300, lng: 77.2700 },
    { id: 7, name: "Rohini", aqi: 230, status: "Poor", lat: 28.7000, lng: 77.1000 },
    { id: 8, name: "Jawaharlal Nehru Stadium", aqi: 160, status: "Moderate", lat: 28.5800, lng: 77.2300 },
];

// Generate more sensors to reach ~124 total
const generateSensors = (count: number) => {
    const sensors = [...hotspots];
    const centerLat = 28.6139;
    const centerLng = 77.2090;

    for (let i = sensors.length + 1; i <= count; i++) {
        // Random offset within approx 15km radius
        const latOffset = (Math.random() - 0.5) * 0.25;
        const lngOffset = (Math.random() - 0.5) * 0.35;

        const aqi = Math.floor(Math.random() * 350) + 50;
        let status = "Good";
        if (aqi > 300) status = "Severe";
        else if (aqi > 200) status = "Poor";
        else if (aqi > 100) status = "Moderate";

        sensors.push({
            id: i,
            name: `Sensor Node #${i}`,
            aqi,
            status,
            lat: centerLat + latOffset,
            lng: centerLng + lngOffset,
        });
    }
    return sensors;
};

export const allSensors = generateSensors(124);

export const mlPrediction = {
    prediction: "AQI likely to improve by 15% in next 4 hours due to wind speed increase.",
    confidence: "85%",
    factors: ["Wind Speed > 10km/h", "Reduced Traffic Flow"],
};
