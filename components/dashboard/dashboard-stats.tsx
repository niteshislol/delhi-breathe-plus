import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, Wind, AlertTriangle, MapPin } from "lucide-react"
import { sensorStatus } from "@/lib/dummy-data"

export function DashboardStats() {
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Average AQI</CardTitle>
                    <Activity className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">245</div>
                    <p className="text-xs text-muted-foreground">
                        +12% from last hour
                    </p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Active Sensors</CardTitle>
                    <Wind className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{sensorStatus.active}/{sensorStatus.total}</div>
                    <p className="text-xs text-muted-foreground">
                        {Math.round((sensorStatus.active / sensorStatus.total) * 100)}% operational uptime
                    </p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Critical Zones</CardTitle>
                    <AlertTriangle className="h-4 w-4 text-red-500" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold text-red-500">3</div>
                    <p className="text-xs text-muted-foreground">
                        Requires immediate attention
                    </p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Monitored Area</CardTitle>
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">45 km²</div>
                    <p className="text-xs text-muted-foreground">
                        Across 12 municipal wards
                    </p>
                </CardContent>
            </Card>
        </div>
    )
}
