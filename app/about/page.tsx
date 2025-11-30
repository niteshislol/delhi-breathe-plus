import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
    return (
        <div className="container py-12">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold tracking-tight mb-4">About DELHI BREATHE+</h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    A mission to reclaim the azure skies of our capital through technology, policy, and people power.
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 mb-20">
                <Card>
                    <CardHeader>
                        <CardTitle>Our Mission</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground leading-relaxed">
                            To deploy a state-of-the-art, integrated air quality management system that not only monitors pollution but actively combats it. We aim to reduce particulate matter by 40% in targeted high-risk zones within the first two years of operation, ensuring a healthier life for every citizen of Delhi.
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Our Vision</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground leading-relaxed">
                            Aligned with the vision of <strong>Aatmanirbhar Bharat</strong>, we envision a self-reliant, technologically advanced ecosystem where clean air is not a luxury but a guarantee. We see a future where data drives policy, and innovation clears the haze.
                        </p>
                    </CardContent>
                </Card>
            </div>

            <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold mb-8 text-center">Project Roadmap</h2>
                <div className="relative border-l border-slate-200 ml-3 md:ml-6 space-y-12">

                    <div className="relative pl-8 md:pl-12">
                        <span className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-primary ring-4 ring-white" />
                        <h3 className="text-lg font-semibold text-slate-900">Phase 1: Inception & Pilot</h3>
                        <time className="block mb-2 text-sm font-normal leading-none text-slate-400">Q1 2024</time>
                        <p className="text-slate-600">
                            Launch of the DELHI BREATHE+ platform. Deployment of 50 Clean-Air Hubs in critical zones like Anand Vihar and Connaught Place.
                        </p>
                    </div>

                    <div className="relative pl-8 md:pl-12">
                        <span className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-slate-200 ring-4 ring-white" />
                        <h3 className="text-lg font-semibold text-slate-900">Phase 2: Sensor Grid Expansion</h3>
                        <time className="block mb-2 text-sm font-normal leading-none text-slate-400">Q3 2024</time>
                        <p className="text-slate-600">
                            Installation of 500+ IoT sensors across the NCR region. Integration with municipal response teams for automated alerts.
                        </p>
                    </div>

                    <div className="relative pl-8 md:pl-12">
                        <span className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-slate-200 ring-4 ring-white" />
                        <h3 className="text-lg font-semibold text-slate-900">Phase 3: AI & Public Integration</h3>
                        <time className="block mb-2 text-sm font-normal leading-none text-slate-400">Q1 2025</time>
                        <p className="text-slate-600">
                            Full rollout of the Clean-Air Route App. AI models predicting pollution spikes with 90% accuracy. Community-led initiatives.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}
