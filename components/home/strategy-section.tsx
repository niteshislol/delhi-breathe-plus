"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Wind, Radio, ShieldCheck } from "lucide-react"

const strategies = [
    {
        title: "Clean-Air Hubs",
        description: "Solar-powered air purification units deployed in high-traffic zones to reduce local pollution levels.",
        icon: Wind,
        color: "text-blue-500",
    },
    {
        title: "IoT Source Detection",
        description: "Real-time sensor grid identifying pollution hotspots and triggering rapid municipal response.",
        icon: Radio,
        color: "text-green-500",
    },
    {
        title: "Personal Protection",
        description: "AI-driven route planning and health advisories to minimize individual exposure to pollutants.",
        icon: ShieldCheck,
        color: "text-indigo-500",
    },
]

export function StrategySection() {
    return (
        <section className="py-20 bg-white">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our 3-Layer Defense Strategy</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        A comprehensive approach tackling pollution at the source, in the air, and for the individual.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {strategies.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full hover:shadow-lg transition-shadow border-t-4 border-t-primary/20">
                                <CardHeader>
                                    <div className={`mb-4 p-3 rounded-full bg-slate-50 w-fit ${item.color}`}>
                                        <item.icon className="h-8 w-8" />
                                    </div>
                                    <CardTitle>{item.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base">{item.description}</CardDescription>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
