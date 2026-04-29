"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { UsersRound, Video, BookMarked } from "lucide-react"

const deliveryMethods = [
  {
    icon: UsersRound,
    title: "In-Person Workshops and On-Base Training",
    description: "Hands-on training delivered directly at military installations",
    image: "/images/home/training-inperson.jpg",
  },
  {
    icon: BookMarked,
    title: "On-Demand Learning Resources and Ongoing Support",
    description: "Self-paced materials available whenever you need them",
    image: "/images/home/training-ondemand.png",
  },
  {
    icon: Video,
    title: "Virtual Live Sessions and Facilitated Group Experiences",
    description: "Interactive online sessions accessible from anywhere",
    image: "/images/home/training-virtual.jpg",
  },
]

export function WhatWeOfferSection() {
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
    <section ref={sectionRef} className="pt-10 pb-16 bg-[#e8f4f5]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#066779] mb-2">
            How We Support Military Families
          </h2>
          <p className="text-xl font-semibold text-[#ff7a27] mb-2">Practical Training</p>
          <div className="w-16 h-1 bg-[#5eb7bb] mx-auto mb-6" />
          <p className="text-xl text-[#066779] font-medium mb-6 max-w-2xl mx-auto">
            Practical training designed to strengthen spouses, families, and military communities.
          </p>
          <p className="text-[#1F2933] leading-relaxed max-w-3xl mx-auto">
            Military Family Institute provides free training resources to help military spouses 
            build stability, strengthen their families, and contribute to healthier military 
            communities. Our programs help spouses develop self-awareness, communication skills, 
            emotional resilience, and leadership capacity so they can better navigate the realities 
            of military life and show up stronger at home and in their communities.
          </p>
          <p className="text-[#1F2933] font-medium mt-4">
            This training is practical, applicable, and designed for real life.
          </p>
        </div>

        {/* Training Delivery */}
        <div
          className={`mb-16 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="text-2xl font-bold text-[#066779] text-center mb-10">
            How We Deliver Our Training
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {deliveryMethods.map((method, index) => (
              <div
                key={method.title}
                className="relative rounded-lg overflow-hidden transition-all hover:-translate-y-1 min-h-[280px] flex flex-col justify-end"
                style={{ 
                  transitionDelay: `${200 + index * 100}ms`,
                  boxShadow: '0 10px 24px rgba(0,0,0,0.1)'
                }}
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${method.image}')` }}
                />
                <div className="absolute inset-0 bg-[#066779]/75" />

                {/* Content */}
                <div className="relative z-10 p-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl border-2 border-[#ff7a27]/50 bg-white/10 backdrop-blur-sm mb-6">
                    <method.icon className="h-7 w-7 text-[#ff7a27]" strokeWidth={1.5} />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-3">
                    {method.title}
                  </h4>
                  <p className="text-white/80">{method.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-[#1F2933] font-medium text-lg max-w-2xl mx-auto">
              All training is provided at no cost to participating spouses through nonprofit 
              partnerships and organizational support.
            </p>
          </div>
        </div>

        {/* Divider line */}
        <div className="w-full max-w-2xl mx-auto mb-12">
          <div className="h-px bg-[#0a2540]" />
        </div>

        {/* Flexible Approach */}
        <div
          className={`text-center transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-[#ff7a27] mb-6">
            A Flexible Approach for Every Community
          </h3>
          <p className="text-[#1F2933] text-lg mb-4 max-w-2xl mx-auto">
            Every community is different. Every family has unique needs.
          </p>
          <p className="text-[#1F2933]/70 mb-8 max-w-2xl mx-auto">
            We start with a conversation to understand your goals and determine the best 
            training approach for your organization or community.
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
    </section>
  )
}
