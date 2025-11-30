import { Hero } from "@/components/home/hero";
import { StrategySection } from "@/components/home/strategy-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <StrategySection />

      {/* CTA Section */}
      <section className="py-20 bg-slate-50">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-6">Ready to Breathe Cleaner Air?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the movement. Monitor your local air quality and contribute to a healthier Delhi.
          </p>
          <div className="flex justify-center gap-4">
            <a href="/contact" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8">
              Contact Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
