import { DashboardCharts } from "@/components/dashboard/dashboard-charts"
import { DashboardStats } from "@/components/dashboard/dashboard-stats"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { alerts, hotspots } from "@/lib/dummy-data"
import { AlertCircle, Info, AlertTriangle } from "lucide-react"

export default function DashboardPage() {
    return (
        <div className="flex-1 space-y-4 p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
                <div className="flex items-center space-x-2">
                    <span className="text-sm text-muted-foreground">Last updated: Just now</span>
                </div>
            </div>

            <DashboardStats />

            <DashboardCharts />

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>Live Sensor Map</CardTitle>
                        <CardDescription>
                            Real-time visualization of sensor clusters and pollution hotspots.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="relative aspect-video w-full overflow-hidden rounded-lg border bg-slate-100">
                            {/* Map Placeholder */}
                            <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                                <div className="text-center">
                                    <p className="text-lg font-semibold">Interactive Map Module</p>
                                    <p className="text-sm">Loading GIS Data...</p>
                                </div>
                            </div>

                            {/* Simulated Hotspots */}
                            {hotspots.map((spot, i) => (
                                <div
                                    key={spot.id}
                                    className="absolute flex flex-col items-center"
                                    style={{
                                        top: `${20 + i * 20}%`,
                                        left: `${20 + i * 15}%`
                                    }}
                                >
                                    <div className={`h-4 w-4 rounded-full animate-pulse ${spot.status === 'Severe' ? 'bg-red-500' :
                                            spot.status === 'Poor' ? 'bg-orange-500' : 'bg-yellow-500'
                                        }`} />
                                    <span className="mt-1 text-xs font-bold bg-white/80 px-1 rounded shadow-sm">{spot.name}</span>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>Recent Alerts</CardTitle>
                        <CardDescription>
                            System generated warnings and notifications.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {alerts.map((alert) => (
                            <Alert key={alert.id} variant={alert.type === 'critical' ? 'destructive' : 'default'}>
                                {alert.type === 'critical' ? <AlertCircle className="h-4 w-4" /> :
                                    alert.type === 'warning' ? <AlertTriangle className="h-4 w-4" /> :
                                        <Info className="h-4 w-4" />}
                                <AlertTitle className="capitalize">{alert.type} Alert</AlertTitle>
                                <AlertDescription>
                                    {alert.message}
                                    <div className="mt-1 text-xs opacity-70">{alert.timestamp}</div>
                                </AlertDescription>
                            </Alert>
                        ))}
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
