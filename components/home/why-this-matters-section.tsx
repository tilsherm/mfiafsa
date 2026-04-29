"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"

export function WhyThisMattersSection() {
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
    <section 
      ref={sectionRef} 
      className="relative py-28 overflow-hidden"
    >
      {/* Background image with deep navy overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/images/family-moment.jpg')` }}
      />
      <div className="absolute inset-0 bg-[#066779]/80" />
      
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ textShadow: '0 2px 6px rgba(0,0,0,0.25)' }}
          >
            Partnering with Military Communities
          </h2>
          <div className="w-16 h-1 bg-[#5eb7bb] mx-auto mb-10" />
          
          <div 
            className="space-y-6 text-lg leading-relaxed mb-12"
            style={{ textShadow: '0 2px 6px rgba(0,0,0,0.25)' }}
          >
            <p className="text-[#EAF6F7]">
              Military Family Institute exists to support the people working behind the scenes 
              so they can directly strengthen the families and communities supporting those on 
              the front lines.
            </p>
            <p className="text-[#EAF6F7]">
              As a nonprofit organization, our goal is simple: remove barriers, provide access 
              to free training resources, and walk alongside military communities as they build 
              healthier, more resilient families.
            </p>
            <p className="text-[#EAF6F7]">
              There is no pressure. No complicated process. Just a conversation to understand 
              your needs and help identify the best approach for your base, organization, or community.
            </p>
            <p className="font-semibold text-white">
              We&apos;re here to serve, support, and partner with you.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-10 border border-white/20">
            <p className="text-[#EAF6F7] mb-6" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.25)' }}>
              If you&apos;re ready to explore how Military Family Institute can support your 
              community, we&apos;d love to connect.
            </p>
            <p className="text-[#5eb7bb] font-medium mb-8" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.25)' }}>
              Schedule a call with our team to begin the conversation.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-[#ff7a27] hover:bg-[#e86a1a] text-white font-semibold px-10 py-6 text-lg rounded-md transition-all hover:shadow-lg"
            >
              <Link href="/book-a-call">Book A Call</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
