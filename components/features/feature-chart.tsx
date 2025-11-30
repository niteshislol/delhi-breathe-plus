"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
    { name: 'Mon', pm25: 140 },
    { name: 'Tue', pm25: 130 },
    { name: 'Wed', pm25: 180 },
    { name: 'Thu', pm25: 160 },
    { name: 'Fri', pm25: 120 },
    { name: 'Sat', pm25: 100 },
    { name: 'Sun', pm25: 90 },
];

export function FeatureChart() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-sm font-medium">Weekly PM2.5 Reduction Trend</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="h-[200px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} />
                            <XAxis dataKey="name" fontSize={12} tickLine={false} axisLine={false} />
                            <YAxis fontSize={12} tickLine={false} axisLine={false} />
                            <Tooltip />
                            <Line type="monotone" dataKey="pm25" stroke="#2563eb" strokeWidth={2} dot={false} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    )
}
