"use client"

import { motion } from "framer-motion"
import { FeatureChart } from "@/components/features/feature-chart"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Sun, Radio, Brain, Bell, Map } from "lucide-react"

const features = [
    {
        id: "hubs",
        title: "Solar-Powered Clean-Air Hubs",
        description: "Autonomous air purification towers powered by renewable energy. Capable of filtering 10,000 cubic meters of air per hour.",
        icon: Sun,
        content: (
            <div className="bg-slate-100 rounded-lg p-6 flex items-center justify-center h-48">
                <div className="text-center">
                    <Sun className="h-12 w-12 text-yellow-500 mx-auto mb-2" />
                    <p className="font-semibold text-slate-700">Net Zero Operation</p>
                    <p className="text-sm text-slate-500">100% Solar Driven</p>
                </div>
            </div>
        )
    },
    {
        id: "sensors",
        title: "IoT Pollution Sensor Grid",
        description: "High-density sensor network providing hyper-local air quality data. Monitors PM2.5, PM10, NO2, and SO2 levels in real-time.",
        icon: Radio,
        content: <FeatureChart />
    },
    {
        id: "ai",
        title: "AI Hotspot Detection",
        description: "Machine learning algorithms analyze wind patterns, traffic flow, and historical data to predict pollution hotspots before they become severe.",
        icon: Brain,
        content: (
            <Card className="bg-slate-900 text-white border-none">
                <CardHeader>
                    <CardTitle className="text-sm text-green-400">ML Prediction Output</CardTitle>
                </CardHeader>
                <CardContent className="font-mono text-xs space-y-2">
                    <p>{`> Analyzing Sector 4...`}</p>
                    <p>{`> Traffic Density: HIGH`}</p>
                    <p>{`> Wind Speed: LOW (2km/h)`}</p>
                    <p className="text-red-400">{`> ALERT: Predicted AQI Spike (350+) in 2 hrs`}</p>
                </CardContent>
            </Card>
        )
    },
    {
        id: "response",
        title: "Rapid Municipal Response",
        description: "Automated alerts sent to municipal authorities for immediate action, such as water sprinkling or traffic diversion.",
        icon: Bell,
        content: (
            <div className="space-y-2">
                <div className="flex items-center gap-3 p-3 bg-red-50 border border-red-100 rounded-md">
                    <Bell className="h-5 w-5 text-red-500" />
                    <div>
                        <p className="text-sm font-medium text-red-900">Critical Alert Sent</p>
                        <p className="text-xs text-red-700">Water Sprinkler Truck dispatched to Zone A</p>
                    </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-green-50 border border-green-100 rounded-md">
                    <Bell className="h-5 w-5 text-green-500" />
                    <div>
                        <p className="text-sm font-medium text-green-900">Action Completed</p>
                        <p className="text-xs text-green-700">AQI reduced by 15% in Zone A</p>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: "route",
        title: "Clean-Air Route App",
        description: "Navigation assistance that suggests the healthiest routes for pedestrians and cyclists, avoiding high-pollution zones.",
        icon: Map,
        content: (
            <div className="relative bg-slate-100 rounded-lg p-4 h-48 overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px]"></div>
                <div className="relative z-10 bg-white p-3 rounded shadow-sm max-w-[200px] mx-auto mt-4">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                        <p className="text-xs font-bold">Recommended Route</p>
                    </div>
                    <p className="text-xs text-slate-500">AQI Exposure: 120 (Moderate)</p>
                    <p className="text-xs text-slate-500">Time: 15 mins</p>
                </div>
                <div className="relative z-10 bg-white p-3 rounded shadow-sm max-w-[200px] mx-auto mt-2 opacity-60">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="h-2 w-2 rounded-full bg-red-500"></div>
                        <p className="text-xs font-bold">Standard Route</p>
                    </div>
                    <p className="text-xs text-slate-500">AQI Exposure: 280 (Poor)</p>
                </div>
            </div>
        )
    }
]

export default function FeaturesPage() {
    return (
        <div className="min-h-screen bg-slate-50 py-12">
            <div className="container">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold tracking-tight mb-4">Technological Innovations</h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Cutting-edge solutions deployed to combat air pollution effectively.
                    </p>
                </div>

                <div className="space-y-24">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className={`flex flex-col gap-12 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                                }`}
                        >
                            <div className="flex-1 space-y-6">
                                <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-xl text-primary mb-2">
                                    <feature.icon className="h-8 w-8" />
                                </div>
                                <h2 className="text-3xl font-bold text-slate-900">{feature.title}</h2>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    {feature.description}
                                </p>
                                <ul className="space-y-2">
                                    {[1, 2, 3].map((i) => (
                                        <li key={i} className="flex items-center gap-2 text-slate-700">
                                            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                                            <span>Key benefit or specification point {i}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex-1 w-full">
                                <div className="relative group">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                                    <div className="relative bg-white ring-1 ring-slate-900/5 rounded-xl shadow-xl overflow-hidden p-6">
                                        {feature.content}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}
