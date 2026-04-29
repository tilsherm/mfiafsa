"use client"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { 
  GraduationCap, 
  Building2, 
  BookOpen, 
  Settings, 
  Heart,
  ShieldCheck,
  Lock
} from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const impactAreas = [
  {
    icon: GraduationCap,
    title: "Leadership Training Programs",
    description: "Provides practical leadership development and communication training for military spouses.",
  },
  {
    icon: Building2,
    title: "On-Base and Virtual Workshops",
    description: "Supports in-person and online training delivered to military installations and communities nationwide.",
  },
  {
    icon: BookOpen,
    title: "Educational Resources",
    description: "Funds the creation and distribution of learning tools available to spouses at no cost.",
  },
  {
    icon: Settings,
    title: "Program Operations and Delivery",
    description: "Ensures sustainable program execution, instructor support, and nationwide access.",
  },
]

const givingLevels = [
  {
    amount: "$25",
    frequency: "Monthly",
    description: "Supports access to leadership tools and educational resources for military families.",
    featured: false,
  },
  {
    amount: "$100",
    frequency: "Monthly",
    description: "Funds training participation for one military spouse.",
    featured: true,
  },
  {
    amount: "$1,000",
    frequency: "One-Time Gift",
    description: "Supports group training programs serving entire military communities.",
    featured: false,
  },
]

const faqs = [
  {
    question: "Is my donation tax-deductible?",
    answer: "Yes. Military Family Institute is a registered 501(c)(3) nonprofit organization. Your donation is tax-deductible as allowed by law.",
  },
  {
    question: "How will my donation be used?",
    answer: "Donations support leadership training programs, educational resources, spouse development initiatives, and operational support that allows us to serve military families.",
  },
  {
    question: "Can I set up recurring monthly donations?",
    answer: "Yes. Monthly giving helps provide consistent support for families and ongoing program delivery.",
  },
  {
    question: "Can I dedicate my gift in honor of someone?",
    answer: "Yes. You can dedicate your donation in honor of a loved one, service member, or military family through our donation form.",
  },
  {
    question: "What platform do you use for donations?",
    answer: "We use Zeffy, a nonprofit donation platform that allows 100 percent of your contribution to go directly to Military Family Institute with no processing fees.",
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

export default function DonatePage() {
  const [heroVisible, setHeroVisible] = useState(false)
  const [impactVisible, setImpactVisible] = useState(false)
  const [levelsVisible, setLevelsVisible] = useState(false)
  const impactRef = useRef<HTMLElement>(null)
  const levelsRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // Hero fade-in
    const timer = setTimeout(() => setHeroVisible(true), 100)
    
    // Intersection observers for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === impactRef.current && entry.isIntersecting) {
            setImpactVisible(true)
          }
          if (entry.target === levelsRef.current && entry.isIntersecting) {
            setLevelsVisible(true)
          }
        })
      },
      { threshold: 0.2 }
    )

    if (impactRef.current) observer.observe(impactRef.current)
    if (levelsRef.current) observer.observe(levelsRef.current)

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [])

  return (
    <div className="pt-20">
      {/* Video Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="https://storage.googleapis.com/msgsndr/Uj1VvtqOgHRiGPTavosH/media/698cc661c50fd3013af196a8.mp4"
        />
        
        {/* Light Dark Overlay for text readability */}
        <div 
          className="absolute inset-0"
          style={{ background: 'rgba(0, 0, 0, 0.35)' }}
        />
        
        {/* Bottom Fade Gradient */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-32"
          style={{ background: 'linear-gradient(to top, #ffffff, transparent)' }}
        />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 transition-all duration-1000 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Your Support Builds Stronger Military Families
          </h1>
          <p 
            className={`text-xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-10 transition-all duration-1000 delay-200 ${
              heroVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Military Family Institute is a registered 501(c)(3) nonprofit providing 
            free leadership training and resources to military spouses and families 
            nationwide.
          </p>
          <div className={`transition-all duration-1000 delay-300 ${heroVisible ? "opacity-100" : "opacity-0"}`}>
            <Button
              asChild
              size="lg"
              className="bg-[#ff7a27] hover:bg-[#e86a1a] text-white font-semibold px-10 py-6 text-lg rounded-lg transition-all hover:shadow-xl"
            >
              <a href="https://www.zeffy.com/en-US/donation-form/test-180" target="_blank" rel="noopener noreferrer">Donate Now</a>
            </Button>
            <TrustIndicator />
          </div>
        </div>
      </section>

      {/* Impact Section - White Background */}
      <section ref={impactRef} className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <img
              src="/images/mfi-shield-logo.png"
              alt="Military Family Institute"
              className="h-20 w-auto mx-auto mb-6"
            />
            <h2 className="text-3xl sm:text-4xl font-bold text-[#066779] mb-2">
              Where Your Support Goes
            </h2>
            <div className="w-16 h-1 bg-[#5eb7bb] mx-auto mb-6" />
            <p className="text-xl text-[#066779] max-w-2xl mx-auto">
              Your donation directly supports programs and resources that strengthen 
              military families and improve long-term readiness across the force.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {impactAreas.map((area, index) => (
              <div
                key={area.title}
                className={`relative bg-white rounded-xl overflow-hidden transition-all duration-700 ${
                  impactVisible 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-8"
                }`}
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                  boxShadow: '0 8px 24px rgba(0,0,0,0.06)'
                }}
              >
                {/* Orange accent line at top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#ff7a27]" />
                
                <div className="p-8 flex gap-6">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-[#E8F4F5]">
                    <area.icon className="h-8 w-8 text-[#ff7a27]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#066779] mb-2">
                      {area.title}
                    </h3>
                    <p className="text-[#1F2933]/80">{area.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emotional Anchor Section */}
      <section className="py-16 bg-[#066779]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-xl sm:text-2xl text-white text-center leading-relaxed font-light italic">
            &ldquo;Behind every donation is a military family gaining access to tools, stability, 
            and support they would not otherwise receive.&rdquo;
          </p>
        </div>
      </section>

      {/* Giving Levels - Light Blue Background */}
      <section ref={levelsRef} className="py-24 bg-[#E8F4F5]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#066779] text-center mb-2">
            Example Impact Levels
          </h2>
          <div className="w-16 h-1 bg-[#5eb7bb] mx-auto mb-4" />
          <p className="text-center text-[#1F2933]/70 mb-12 max-w-xl mx-auto">
            Examples shown represent average program impact and may vary based on operational needs.
          </p>

          <div className="grid md:grid-cols-3 gap-8 items-end">
            {givingLevels.map((level, index) => (
              <a
                href="https://www.zeffy.com/en-US/donation-form/test-180"
                target="_blank"
                rel="noopener noreferrer"
                key={level.amount}
                className={`relative bg-white rounded-xl text-center transition-all duration-500 hover:-translate-y-2 cursor-pointer block ${
                  levelsVisible 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-8"
                } ${level.featured ? 'md:-mt-4' : ''}`}
                style={{ 
                  transitionDelay: `${index * 150}ms`,
                  boxShadow: level.featured 
                    ? '0 12px 40px rgba(255, 122, 39, 0.15), 0 4px 12px rgba(0,0,0,0.08)' 
                    : '0 8px 24px rgba(0,0,0,0.06)',
                  border: level.featured ? '2px solid #ff7a27' : '1px solid transparent',
                  textDecoration: 'none',
                  color: 'inherit'
                }}
              >
                {/* Featured label */}
                {level.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#ff7a27] text-white text-xs font-semibold px-4 py-1.5 rounded-full whitespace-nowrap">
                    Most Common Support Level
                  </div>
                )}
                
                <div className={`p-8 ${level.featured ? 'pt-10 pb-10' : ''}`}>
                  <p className={`font-bold text-[#066779] mb-2 ${level.featured ? 'text-5xl' : 'text-4xl'}`}>
                    {level.amount}
                  </p>
                  <p className="text-[#066779] font-medium mb-4">
                    {level.frequency}
                  </p>
                  <p className="text-[#1F2933]/80">{level.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Why Support - White Background */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#066779]">
              Why Support Military Family Institute
            </h2>
          </div>
          <div className="w-16 h-1 bg-[#5eb7bb] mx-auto mb-8" />
          
          <p className="text-lg text-[#1F2933] leading-relaxed text-center mb-10">
            Military Family Institute exists to strengthen the people behind the uniform. 
            Built by military spouses and service members, our programs are designed from 
            real experience and delivered with practical impact. As a nonprofit organization, 
            we ensure access to training remains free for the families who need it most.
          </p>

          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="bg-[#ff7a27] hover:bg-[#e86a1a] text-white font-semibold px-10 py-6 text-lg rounded-lg transition-all hover:shadow-xl"
            >
              <a href="https://www.zeffy.com/en-US/donation-form/test-180" target="_blank" rel="noopener noreferrer">Donate To The Mission</a>
            </Button>
            <TrustIndicatorDark />
          </div>
        </div>
      </section>

      {/* FAQ Section - Light Blue Background */}
      <section className="py-24 bg-[#E8F4F5]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#066779] text-center mb-2">
            Donation FAQs
          </h2>
          <div className="w-16 h-1 bg-[#5eb7bb] mx-auto mb-12" />

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-xl px-6 border border-[#D7ECEF]"
                style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.04)' }}
              >
                <AccordionTrigger className="text-left text-[#066779] font-semibold hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#1F2933] leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA - Family Moment Background */}
      <section id="donate-now" className="relative py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url('/images/family-walking.jpg')` }}
        />
        <div className="absolute inset-0 bg-[#066779]/80" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="h-12 w-12 text-[#ff7a27] mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Make An Impact Today
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Your support directly strengthens military families and the communities 
            that serve them.
          </p>
          
          <Button
            asChild
            size="lg"
            className="bg-[#ff7a27] hover:bg-[#e86a1a] text-white font-semibold px-12 py-7 text-xl rounded-lg transition-all hover:shadow-xl"
          >
            <a href="https://www.zeffy.com/en-US/donation-form/test-180" target="_blank" rel="noopener noreferrer">Donate Now</a>
          </Button>
          
          <TrustIndicator />
        </div>
      </section>
    </div>
  )
}
