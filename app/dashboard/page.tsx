"use client"

import dynamic from "next/dynamic"
import { DashboardCharts } from "@/components/dashboard/dashboard-charts"
import { DashboardStats } from "@/components/dashboard/dashboard-stats"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { alerts } from "@/lib/dummy-data"
import { AlertCircle, Info, AlertTriangle } from "lucide-react"

// Dynamically import the map component with no SSR
const SensorMap = dynamic(() => import("@/components/dashboard/sensor-map"), {
    ssr: false,
    loading: () => (
        <div className="flex h-full w-full items-center justify-center bg-slate-100 text-slate-400">
            <p>Loading Map...</p>
        </div>
    ),
})

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
                    <CardContent className="p-0 sm:p-6">
                        <div className="relative aspect-video w-full overflow-hidden rounded-lg border bg-slate-100 sm:h-[400px]">
                            <SensorMap />
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
