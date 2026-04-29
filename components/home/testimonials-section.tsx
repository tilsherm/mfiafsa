"use client"

import { useEffect, useRef, useState } from "react"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "My voice is one that is common but can feel squashed easily. I loved learning about how to work with the other voices and see others for their tendencies and not use that to define people.",
    author: "Military Command Spouse",
  },
  {
    quote: "This course taught me that we need to first get ourselves healthy and then empower others to do the same.  I wish everyone could go through this.",
    author: "Military Command Spouse",
  },
  {
    quote: "I’ve learned more about myself in taking this course then any other training I’ve ever taken in the corporate world. This is hands down a must do!",
    author: "Key Support Liaison",
  },
  {
    quote: "I attended the Aviano Key Support Liaison Symposium, and it was truly impactful. Yolanda Easton’s mentorship and the Five Voices training strengthened leadership and communication. The symposium offered connection, encouragement, and growth within our community.",
    author: "KSL",
  },
]

export function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.15 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-[72px] bg-[#F6FBFC]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <img
            src="/images/mfi-shield-logo.png"
            alt="Military Family Institute"
            className="w-[100px] h-auto mx-auto mb-6 mix-blend-multiply"
          />
          <h2 className="text-3xl sm:text-4xl font-bold text-[#066779] mb-2">
            What Military Spouses Are Sharing
          </h2>
          <div className="w-16 h-1 bg-[#5eb7bb] mx-auto mb-6" />
        </div>

        <div
          className={`grid md:grid-cols-2 gap-10 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-7 relative border border-[#D7ECEF] flex"
              style={{
                transitionDelay: `${200 + index * 100}ms`,
                boxShadow: '0px 10px 28px rgba(0,0,0,0.08)'
              }}
            >
              {/* Left accent bar */}
              <div className="w-1 bg-[#FF7A1A] rounded self-stretch mr-5 flex-shrink-0" />

              <div className="flex-1 relative">
                {/* Large quote watermark */}
                <Quote className="h-16 w-16 text-[#BFDDE1] opacity-55 absolute -top-2 right-0" />
                <blockquote className="text-[#1F2933] text-lg leading-relaxed mb-6 relative z-10">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <p className="text-[#066779] font-semibold">
                  — {testimonial.author}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
