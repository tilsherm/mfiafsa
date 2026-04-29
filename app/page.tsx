import { HeroSection } from "@/components/home/hero-section"
import { LogoStrip } from "@/components/home/logo-strip"
import { RealitySection } from "@/components/home/reality-section"
import { WhoWeAreSection } from "@/components/home/who-we-are-section"
import { WhatWeOfferSection } from "@/components/home/what-we-offer-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { WhyThisMattersSection } from "@/components/home/why-this-matters-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* 501(c)(3) Badge */}
      <div className="flex justify-center py-5 bg-white">
        <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 border border-[#1F2933]/30">
          <span className="text-xs text-[#1F2933] font-medium">501(c)(3) Nonprofit Organization</span>
        </div>
      </div>

      <LogoStrip />
      <RealitySection />
      <WhoWeAreSection />
      <WhatWeOfferSection />
      <TestimonialsSection />
      <WhyThisMattersSection />
    </>
  )
}
