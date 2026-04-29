"use client"

import { useEffect, useRef, useState } from "react"

export function RealitySection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-28 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/military-family-hug.jpg')`,
        }}
      />
      {/* Navy Overlay */}
      <div className="absolute inset-0 bg-[#066779]/80" />
      
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            The Reality Military Families Face
          </h2>
          {/* Section divider line */}
          <div className="w-16 h-1 bg-[#FF7A1A] mx-auto mb-8" />
          
          <div className="space-y-6 text-lg text-white/90 leading-relaxed">
            <p>
              Military spouses carry responsibilities no one is formally trained to manage. 
              PCS cycles, deployments, solo parenting, emotional labor, and constant rebuilding 
              are part of daily life.
            </p>
            <p>
              When spouses lack support and practical tools, the impact extends beyond the home. 
              Family strain affects service members&apos; focus, morale, and long-term readiness. 
              <span className="font-semibold text-white"> Strong families build strong units.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
