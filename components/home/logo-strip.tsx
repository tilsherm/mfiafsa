"use client"

const partners = [
  { src: "/images/partners/summit-365.png", alt: "Air & Space Forces Summit 365", large: true },
  { src: "/images/partners/military-sherpa.png", alt: "The Military Sherpa Group" },
  { src: "/images/partners/us-air-force.svg", alt: "United States Air Force" },
  { src: "/images/partners/us-navy.png", alt: "United States Navy" },
  { src: "/images/partners/cksp.png", alt: "Commander's Key Support Program" },
  { src: "/images/logos/msli-logo.png", alt: "Military Spouse Leadership Initiative", large: true },
]

export function LogoStrip() {
  return (
    <section className="py-12 bg-white border-b border-[#e5e7eb]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-[#1F2933]/50 mb-10 font-medium uppercase tracking-wider">
          Trusted by Military Communities Nationwide
        </p>

        {/* Infinite scroll wrapper */}
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-white to-transparent" />

          <div className="flex w-max animate-scroll">
            {[...partners, ...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner.alt}-${index}`}
                className="flex-shrink-0 flex items-center justify-center h-20 w-48 mx-8"
              >
                <img
                  src={partner.src}
                  alt={partner.alt}
                  className={`w-auto h-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 ${
                    (partner as any).large ? "max-h-20 max-w-[200px]" : "max-h-16 max-w-[160px]"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
