import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-[78vh] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="https://storage.googleapis.com/msgsndr/Uj1VvtqOgHRiGPTavosH/media/698cc65d72139761fa92f18c.mp4"
      />

      {/* Blue overlay for text readability */}
      <div
        className="absolute inset-0"
        style={{ background: 'rgba(6, 103, 121, 0.45)' }}
      />

      {/* Bottom Fade Gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{ background: 'linear-gradient(to top, #ffffff, transparent)' }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center pt-20 pb-24">
        <div className="animate-[fadeInUp_1s_ease-out_forwards]">
          {/* Main Headline - 16px margin to subheadline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight text-balance">
            Military Family Institute
          </h1>

          {/* Subheadline - 24px margin to CTA */}
          <p className="text-xl sm:text-2xl text-white/90 mb-6 max-w-3xl mx-auto leading-relaxed text-pretty">
            Equipping Military Spouses and Families with Tools
            to Build Stronger Units, and Communities.
          </p>

          {/* CTA Button */}
          <Button
            asChild
            size="lg"
            className="bg-[#ff7a27] hover:bg-[#e86a1a] text-white font-semibold px-10 py-6 text-lg rounded-md shadow-xl hover:shadow-2xl transition-all"
          >
            <Link href="/book-a-call">Book A Call</Link>
          </Button>

          {/* Trust Indicator */}
          <p className="mt-6 text-white/80 text-lg sm:text-xl">
            Free training for military spouses and communities
          </p>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
