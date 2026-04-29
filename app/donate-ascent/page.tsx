"use client"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { 
  MapPin,
  Calendar,
  Heart,
  Users,
  BookOpen,
  Target,
  ShieldCheck,
  Lock,
  Sparkles
} from "lucide-react"

const sponsorLevels = [
  {
    amount: "$25",
    description: "Supports materials and resources",
    featured: false,
  },
  {
    amount: "$50",
    description: "Contributes toward a spouse's registration",
    featured: false,
  },
  {
    amount: "$100",
    description: "Helps sponsor a spouse to attend",
    featured: true,
  },
]

const impactLevels = [
  {
    amount: "$1,000",
    title: "Sponsor Multiple Spouses",
    description: "Cover attendance for multiple military spouses to experience ASCENT.",
  },
  {
    amount: "$5,000",
    title: "Provide a Meal Experience",
    description: "Sponsor a breakfast or lunch gathering for all attendees.",
  },
  {
    amount: "$10,000",
    title: "Support a Key Experience",
    description: "Fund the event app, resources, or core program delivery.",
  },
]

const missionImpact = [
  {
    icon: Users,
    title: "Deliver Leadership Training",
    description: "Provide practical leadership development and coaching to military spouses.",
  },
  {
    icon: BookOpen,
    title: "Develop Resources",
    description: "Create and distribute tools and materials for military families.",
  },
  {
    icon: Target,
    title: "Expand Access",
    description: "Reach underserved spouse communities with program offerings.",
  },
  {
    icon: Sparkles,
    title: "Build Sustainable Programs",
    description: "Create programs that multiply impact across military communities.",
  },
]

function TrustIndicator() {
  return (
    <div className="flex flex-col items-center gap-2 mt-6">
      <div className="flex items-center gap-2 text-white/70">
        <ShieldCheck className="h-4 w-4" />
        <span className="text-sm">501(c)(3) Registered Nonprofit</span>
      </div>
      <div className="flex items-center gap-2 text-white/60">
        <Lock className="h-3.5 w-3.5" />
        <span className="text-xs">Secure nonprofit processing through Zeffy</span>
      </div>
    </div>
  )
}

function TrustIndicatorDark() {
  return (
    <div className="flex flex-col items-center gap-2 mt-6">
      <div className="flex items-center gap-2 text-[#066779]/70">
        <ShieldCheck className="h-4 w-4" />
        <span className="text-sm">501(c)(3) Registered Nonprofit</span>
      </div>
      <div className="flex items-center gap-2 text-[#1F2933]/50">
        <Lock className="h-3.5 w-3.5" />
        <span className="text-xs">Secure nonprofit processing through Zeffy</span>
      </div>
    </div>
  )
}

export default function DonateAscentPage() {
  const [heroVisible, setHeroVisible] = useState(false)
  const [sponsorVisible, setSponsorVisible] = useState(false)
  const [impactVisible, setImpactVisible] = useState(false)
  const [missionVisible, setMissionVisible] = useState(false)
  const sponsorRef = useRef<HTMLElement>(null)
  const impactRef = useRef<HTMLElement>(null)
  const missionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => setHeroVisible(true), 100)
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === sponsorRef.current && entry.isIntersecting) {
            setSponsorVisible(true)
          }
          if (entry.target === impactRef.current && entry.isIntersecting) {
            setImpactVisible(true)
          }
          if (entry.target === missionRef.current && entry.isIntersecting) {
            setMissionVisible(true)
          }
        })
      },
      { threshold: 0.2 }
    )

    if (sponsorRef.current) observer.observe(sponsorRef.current)
    if (impactRef.current) observer.observe(impactRef.current)
    if (missionRef.current) observer.observe(missionRef.current)

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [])

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/academy/conference-audience.jpg"
          alt="ASCENT Spouse Gathering"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#0a2540]/75" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <p 
            className={`text-sm font-semibold tracking-[0.15em] uppercase mb-4 text-[#ff7a27] transition-all duration-1000 ${
              heroVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Support the ASCENT Experience
          </p>
          <h1 
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 transition-all duration-1000 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Invest in the Strength Behind the Mission
          </h1>
          <p 
            className={`text-xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-4 transition-all duration-1000 delay-200 ${
              heroVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Military families carry more than most will ever see. Behind every service member 
            is a spouse navigating change, leading through uncertainty, and holding the foundation steady.
          </p>
          <p 
            className={`text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-10 transition-all duration-1000 delay-300 ${
              heroVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            At the Military Family Institute, we equip those spouses to not just endure that reality—but to lead through it.
            <span className="block mt-2 font-semibold text-[#ff7a27]">Your contribution makes that possible.</span>
          </p>
          <div className={`transition-all duration-1000 delay-400 ${heroVisible ? "opacity-100" : "opacity-0"}`}>
            <Button
              asChild
              size="lg"
              className="bg-[#ff7a27] hover:bg-[#e86a1a] text-white font-semibold px-10 py-6 text-lg rounded-lg transition-all hover:shadow-xl"
            >
              <a href="https://www.zeffy.com/en-US/donation-form/the-ascent-orlando-military-spouse-gathering" target="_blank" rel="noopener noreferrer">Donate Now</a>
            </Button>
            <TrustIndicator />
          </div>
        </div>
      </section>

      {/* Support The Ascent Section */}
      <section ref={sponsorRef} className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="flex justify-center">
              <img
                src="/images/mfi-shield-logo.png"
                alt="Military Family Institute"
                className="h-20 w-auto mb-6"
              />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#066779] mb-2 text-center">
              Support The ASCENT Spouse Gathering
            </h2>
            <div className="w-16 h-1 bg-[#5eb7bb] mx-auto mb-4" />
            
            {/* Event Details - moved higher */}
            <div className="flex flex-wrap items-center justify-center gap-6 mb-6">
              <div className="flex items-center gap-2 text-[#066779]">
                <MapPin className="w-5 h-5 text-[#ff7a27]" />
                <span className="font-medium">Hilton Orlando, Florida</span>
              </div>
              <div className="flex items-center gap-2 text-[#066779]">
                <Calendar className="w-5 h-5 text-[#ff7a27]" />
                <span className="font-medium">August 9-11, 2026</span>
              </div>
            </div>

            <p className="text-xl text-[#066779] font-medium mb-4 text-center">
              Sponsor a Spouse. Change the Experience.
            </p>
            
            {/* Left-aligned paragraph text */}
            <div className="max-w-3xl mx-auto text-left">
              <p className="text-lg text-[#1F2933]/70 mb-4">
                The ASCENT is a Military Spouse Development Gathering hosted by the Military Family Institute 
                in partnership with AFSA.
              </p>
              <p className="text-[#1F2933]/70 mb-4">
                This gathering brings together spouses from all branches and all stages of military life 
                for leadership development, connection, and growth.
              </p>
              <p className="text-[#1F2933]/70">
                For many, the barrier isn&apos;t interest—it&apos;s access. 
                <span className="font-medium text-[#066779]"> Your donation removes that barrier.</span>
              </p>
            </div>
          </div>

          {/* What Your Gift Does */}
          <div className="bg-[#E8F4F5] rounded-2xl p-10 sm:p-12 mb-12">
            <h3 className="text-xl font-semibold text-[#066779] text-center mb-6">
              When you give, you help:
            </h3>
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[#066779]/10 flex items-center justify-center mb-3">
                  <Heart className="w-6 h-6 text-[#ff7a27]" />
                </div>
                <p className="text-[#1F2933]">Cover registration for a military spouse</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[#066779]/10 flex items-center justify-center mb-3">
                  <Users className="w-6 h-6 text-[#ff7a27]" />
                </div>
                <p className="text-[#1F2933]">Create space for connection and growth</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[#066779]/10 flex items-center justify-center mb-3">
                  <Target className="w-6 h-6 text-[#ff7a27]" />
                </div>
                <p className="text-[#1F2933]">Equip spouses with tools to lead</p>
              </div>
            </div>
          </div>

          {/* Individual Giving Levels */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#066779] text-center mb-2">
              Individual Giving (Sponsor a Spouse)
            </h3>
            <p className="text-center text-[#1F2933]/70 mb-4">Every contribution matters.</p>
            <p className="text-center text-[#066779] text-sm max-w-2xl mx-auto mb-8 italic">
              ASCENT is provided at no cost to military spouses. Your contribution directly supports access, materials, and leadership development delivery.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 items-end">
              {sponsorLevels.map((level, index) => (
                <a
                  href="https://www.zeffy.com/en-US/donation-form/the-ascent-orlando-military-spouse-gathering"
                  target="_blank"
                  rel="noopener noreferrer"
                  key={level.amount}
                  className={`relative bg-white rounded-xl text-center transition-all duration-500 hover:-translate-y-2 cursor-pointer block ${
                    sponsorVisible 
                      ? "opacity-100 translate-y-0" 
                      : "opacity-0 translate-y-8"
                  } ${level.featured ? 'sm:-mt-4' : ''}`}
                  style={{ 
                    transitionDelay: `${index * 150}ms`,
                    boxShadow: level.featured 
                      ? '0 12px 40px rgba(255, 122, 39, 0.15), 0 4px 12px rgba(0,0,0,0.08)' 
                      : '0 8px 24px rgba(0,0,0,0.06)',
                    border: level.featured ? '2px solid #ff7a27' : '1px solid #E2E8F0',
                  }}
                >
                  {level.featured && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#ff7a27] text-white text-xs font-semibold px-4 py-1.5 rounded-full whitespace-nowrap">
                      Most Popular
                    </div>
                  )}
                  
                  <div className={`p-8 ${level.featured ? 'pt-10 pb-10' : ''}`}>
                    <p className={`font-bold text-[#066779] mb-2 ${level.featured ? 'text-5xl' : 'text-4xl'}`}>
                      {level.amount}
                    </p>
                    <p className="text-[#1F2933]/80">{level.description}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button
                asChild
                size="lg"
                className="bg-[#ff7a27] hover:bg-[#e86a1a] text-white font-semibold px-10 py-6 text-lg rounded-lg transition-all hover:shadow-xl"
              >
                <a href="https://www.zeffy.com/en-US/donation-form/the-ascent-orlando-military-spouse-gathering" target="_blank" rel="noopener noreferrer">Donate Now</a>
              </Button>
              <TrustIndicatorDark />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Giving / Sponsorship Section */}
      <section ref={impactRef} className="py-24 bg-[#066779]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
              Sponsorship Opportunities
            </h2>
            <div className="w-16 h-1 bg-[#ff7a27] mx-auto mb-6" />
            <p className="text-xl text-white/80">
              For those who want to make a larger impact
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {impactLevels.map((level, index) => (
              <a
                href="https://www.zeffy.com/en-US/donation-form/the-ascent-orlando-military-spouse-gathering"
                target="_blank"
                rel="noopener noreferrer"
                key={level.amount}
                className={`bg-white rounded-xl p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-xl cursor-pointer block ${
                  impactVisible 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <p className="text-4xl font-bold text-[#ff7a27] mb-3">{level.amount}</p>
                <h3 className="text-xl font-semibold text-[#066779] mb-3">{level.title}</h3>
                <p className="text-[#1F2933]/70">{level.description}</p>
              </a>
            ))}
          </div>

          <p className="text-center text-white/80 mt-10 max-w-2xl mx-auto">
            These contributions don&apos;t just support an event—they create an environment 
            where spouses are equipped, connected, and strengthened.
          </p>

          <div className="text-center mt-8">
            <Button
              asChild
              size="lg"
              className="bg-[#ff7a27] hover:bg-[#e86a1a] text-white font-semibold px-10 py-6 text-lg rounded-lg transition-all hover:shadow-xl"
            >
              <a href="https://www.zeffy.com/en-US/donation-form/the-ascent-orlando-military-spouse-gathering" target="_blank" rel="noopener noreferrer">Become a Sponsor</a>
            </Button>
            <TrustIndicator />
          </div>
        </div>
      </section>

      {/* Support the Mission Section */}
      <section ref={missionRef} className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#066779] mb-2">
              Support the Mission of MFI
            </h2>
            <div className="w-16 h-1 bg-[#5eb7bb] mx-auto mb-6" />
            <p className="text-xl text-[#066779] font-medium mb-4">
              Beyond One Event—Building Long-Term Impact
            </p>
            <p className="text-lg text-[#1F2933]/70 max-w-3xl mx-auto">
              The Military Family Institute is a spouse-led nonprofit committed to strengthening 
              military families through leadership development. Through programs like the Military 
              Spouse Academy and community-based training, we provide tools that build self-awareness, 
              stronger relationships, resilient families, and leadership at every level.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-[#066779] text-center mb-8">
            Where Your Support Goes
          </h3>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {missionImpact.map((item, index) => (
              <div
                key={item.title}
                className={`relative bg-white rounded-xl overflow-hidden transition-all duration-700 ${
                  missionVisible 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-8"
                }`}
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                  boxShadow: '0 8px 24px rgba(0,0,0,0.06)'
                }}
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#ff7a27]" />
                
                <div className="p-8 flex gap-6">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-[#E8F4F5]">
                    <item.icon className="h-8 w-8 text-[#ff7a27]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#066779] mb-2">
                      {item.title}
                    </h4>
                    <p className="text-[#1F2933]/80">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="bg-[#ff7a27] hover:bg-[#e86a1a] text-white font-semibold px-10 py-6 text-lg rounded-lg transition-all hover:shadow-xl"
            >
              <a href="https://www.zeffy.com/en-US/donation-form/the-ascent-orlando-military-spouse-gathering" target="_blank" rel="noopener noreferrer">Give to the Mission</a>
            </Button>
            <TrustIndicatorDark />
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="relative py-24 overflow-hidden">
        <Image
          src="/images/family-walking.jpg"
          alt="Military family"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#E8F4F5]/90" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#066779] mb-2">
            Why It Matters
          </h2>
          <div className="w-16 h-1 bg-[#5eb7bb] mx-auto mb-8" />
          
          <p className="text-xl text-[#066779] font-medium mb-6">
            Military readiness doesn&apos;t begin on the battlefield. It begins at home.
          </p>
          
          <p className="text-lg text-[#1F2933]/80 mb-8 max-w-2xl mx-auto">
            When spouses are supported, equipped, and connected: families are stronger, 
            communities are healthier, and service members are better supported.
          </p>

          <p className="text-xl text-[#066779] font-semibold">
            This isn&apos;t just support. It&apos;s an investment in the strength of the entire military ecosystem.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="h-12 w-12 text-[#ff7a27] mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold text-[#066779] mb-6">
            Make An Impact Today
          </h2>
          <p className="text-xl text-[#1F2933]/80 mb-4 max-w-2xl mx-auto">
            You may never see the full impact of what you give.
          </p>
          <p className="text-lg text-[#1F2933]/70 mb-10 max-w-xl mx-auto">
            But a military spouse will feel it. A family will benefit from it. 
            A community will grow because of it.
          </p>
          
          <Button
            asChild
            size="lg"
            className="bg-[#ff7a27] hover:bg-[#e86a1a] text-white font-semibold px-12 py-7 text-xl rounded-lg transition-all hover:shadow-xl"
          >
            <a href="https://www.zeffy.com/en-US/donation-form/the-ascent-orlando-military-spouse-gathering" target="_blank" rel="noopener noreferrer">Donate Now</a>
          </Button>
          
          <TrustIndicatorDark />
        </div>
      </section>
    </div>
  )
}
