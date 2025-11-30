import Link from "next/link"
import { Wind } from "lucide-react"

export function Footer() {
    return (
        <footer className="border-t bg-muted/40">
            <div className="container py-10 md:py-16">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <Wind className="h-6 w-6 text-primary" />
                            <span className="text-xl font-bold tracking-tight text-primary">
                                DELHI BREATHE+
                            </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            Integrated Clean-Air Shield for Delhi’s High-Risk Urban Zones.
                            Empowering citizens with real-time data and actionable insights.
                        </p>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/" className="hover:text-primary">Home</Link></li>
                            <li><Link href="/features" className="hover:text-primary">Features</Link></li>
                            <li><Link href="/dashboard" className="hover:text-primary">Dashboard</Link></li>
                            <li><Link href="/about" className="hover:text-primary">About Us</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold">Resources</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="#" className="hover:text-primary">Documentation</Link></li>
                            <li><Link href="#" className="hover:text-primary">API Access</Link></li>
                            <li><Link href="#" className="hover:text-primary">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-primary">Terms of Service</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold">Contact</h3>
                        <address className="text-sm text-muted-foreground not-italic">
                            <p>New Delhi, India</p>
                            <p>Email: contact@delhibreathe.in</p>
                            <p>Phone: +91 11 2345 6789</p>
                        </address>
                    </div>
                </div>
                <div className="mt-10 border-t pt-6 text-center text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} DELHI BREATHE+. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
