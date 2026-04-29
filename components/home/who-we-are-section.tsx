"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const stats = [
  { value: "160+", label: "Years Combined Experience" },
  { value: "500+", label: "Families Supported" },
  { value: "25+", label: "Installations Served" },
]

export function WhoWeAreSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.15 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="pt-28 pb-16 bg-[#e8f4f5]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div
            className={`transition-all duration-700 ${isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
              }`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#FF7A3C] mb-2">
              Who We Are
            </h2>
            <div className="w-16 h-1 bg-[#5eb7bb] mb-6" />
            <p className="text-xl text-[#066779] font-medium mb-6">
              Built by military spouses and prior service members to strengthen
              families and communities.
            </p>

            <div className="space-y-5 text-[#1F2933] leading-relaxed">
              <p>
                Military Family Institute is a nonprofit led by those who
                understand military life firsthand. Our team brings more than
                160 years of combined experience across military and community
                leadership.
              </p>
              <p>
                While service members receive structured development throughout
                their careers, spouses often lack consistent access to
                leadership tools, support frameworks, and growth opportunities.
                We exist to close that gap.
              </p>
              <p>
                Through training, coaching, and community support, we equip
                military spouses with practical skills that strengthen families
                and build healthier military communities.
              </p>
            </div>
          </div>

          {/* Single Image */}
          <div
            className={`transition-all duration-700 delay-200 ${isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
              }`}
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/yolanda-classroom.jpg"
                alt="Yolanda leading a training session for military personnel"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div
          className={`grid md:grid-cols-3 gap-8 mt-16 transition-all duration-700 delay-300 ${isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
            }`}
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="bg-white rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow"
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <p className="text-4xl sm:text-5xl font-bold text-[#ff7a27] mb-2">
                {stat.value}
              </p>
              <p className="text-[#1F2933] font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section Transition Band */}
      <div className="h-12 bg-[#EAF4F6] flex items-center justify-center mt-16">
        <div className="w-40 h-0.5 bg-[#7FB8BE] rounded-sm" />
      </div>
    </section>
  )
}
