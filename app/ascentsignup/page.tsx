"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Calendar, Users, Sparkles, Heart, Target, Mountain, ArrowRight, Check } from "lucide-react"
import { useEffect, useRef, useState } from "react"

function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return { ref, isVisible }
}

const walkAwayItems = [
  { icon: Sparkles, title: "Clarity in How You Lead", desc: "Discover your unique leadership voice" },
  { icon: Target, title: "Proven Leadership Tools", desc: "5 Voices, 5 Gears, Peace Index" },
  { icon: Users, title: "Meaningful Connection", desc: "Build lasting relationships with fellow spouses" },
  { icon: Heart, title: "Renewed Confidence", desc: "Leave equipped and empowered" },
]

const whoShouldAttend = [
  "Military spouses at any stage",
  "Those navigating transition or growth",
  "Spouses leading in homes or communities",
  "Anyone ready to lead, not just manage",
]

export default function AscentSignupPage() {
  const whatIsReveal = useReveal()
  const experienceReveal = useReveal()
  const whoReveal = useReveal()
  const detailsReveal = useReveal()
  const whyReveal = useReveal()
  const ctaReveal = useReveal()

  return (
    <div className="bg-[#FAFBFC] min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/academy/conference-peace.jpg"
          alt="ASCENT Spouse Summit"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/65 to-black/80" />
        
        {/* Floating date badge */}
        <div className="absolute top-28 right-8 md:right-16 z-20">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-xl">
            <p className="text-xs font-semibold text-[#ff7a27] uppercase tracking-wider">Save the Date</p>
            <p className="text-2xl font-bold text-[#0a2540]">Aug 9-11</p>
            <p className="text-sm text-[#066779]">2026</p>
          </div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Mountain className="w-4 h-4 text-[#ff7a27]" />
            <span className="text-white/90 text-sm font-medium">Inaugural Summit Experience</span>
          </div>
          
          <h1 className="text-5xl sm:text-7xl font-bold text-white mb-4 tracking-tight">
            ASCENT
          </h1>
          <p className="text-2xl sm:text-3xl text-white/90 font-light mb-2">
            Spouse Summit
          </p>
          
          <div className="flex items-center justify-center gap-3 text-[#ff7a27] text-xl sm:text-2xl font-semibold my-8">
            <span>Rise</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff7a27]" />
            <span>Lead</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff7a27]" />
            <span>Thrive</span>
          </div>

          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
            Join military spouses from across the country for a three-day leadership experience designed to equip you with the clarity, tools, and community needed to thrive in every season of military life.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-white/90">
              <MapPin className="w-5 h-5 text-[#ff7a27]" />
              <span>Orlando Hilton</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-white/40" />
            <div className="flex items-center gap-2 text-white/90">
              <Calendar className="w-5 h-5 text-[#ff7a27]" />
              <span>August 9-11, 2026</span>
            </div>
          </div>

          <Button
            asChild
            size="lg"
            className="bg-[#ff7a27] hover:bg-[#e86a1a] text-white font-semibold px-10 py-6 text-lg rounded-md shadow-xl hover:shadow-2xl transition-all"
          >
            <Link href="/ascentregister">
              Register Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/60 rounded-full" />
          </div>
        </div>
      </section>

      {/* What This Is Section */}
      <section className="py-20 sm:py-28 bg-white">
        <div
          ref={whatIsReveal.ref}
          className={`mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
            whatIsReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold tracking-[0.15em] uppercase mb-4 text-[#ff7a27]">
                What This Is
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0a2540] mb-6 leading-tight">
                {"This Is More Than a Summit—It's a Starting Point"}
              </h2>
              <p className="text-[#1F2933]/70 text-lg mb-6 leading-relaxed">
                Military life requires constant adaptation—but rarely offers intentional leadership development for those holding everything together behind the scenes.
              </p>
              <p className="text-[#1F2933]/70 text-lg mb-6 leading-relaxed">
                <strong className="text-[#066779]">The ASCENT Spouse Summit is designed to change that.</strong>
              </p>
              <p className="text-[#1F2933]/60 leading-relaxed">
                {"Hosted in partnership with the Air & Space Forces Association, this inaugural event brings military spouses together for focused growth, real connection, and practical leadership tools that apply directly to everyday life."}
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/leadership-voice-group.jpg"
                  alt="Leadership workshop participants"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#066779] text-white p-6 rounded-2xl shadow-xl max-w-[200px]">
                <p className="text-3xl font-bold">3</p>
                <p className="text-sm text-white/80">Days of Growth & Connection</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Experience Section */}
      <section className="py-20 sm:py-28 bg-[#f7f8fa]">
        <div
          ref={experienceReveal.ref}
          className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
            experienceReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-[0.15em] uppercase mb-4 text-[#ff7a27]">
              What You&apos;ll Experience
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0a2540] mb-4">
              What You&apos;ll Walk Away With
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {walkAwayItems.map((item, index) => (
              <div
                key={item.title}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-[#E2E8F0]"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-[#066779]/10 group-hover:bg-[#ff7a27]/10 flex items-center justify-center mb-5 transition-colors duration-300">
                  <item.icon className="w-7 h-7 text-[#066779] group-hover:text-[#ff7a27] transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-[#0a2540] mb-2">{item.title}</h3>
                <p className="text-[#1F2933]/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Should Attend Section */}
      <section className="py-20 sm:py-28 bg-white">
        <div
          ref={whoReveal.ref}
          className={`mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
            whoReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/ascent/orlando-skyline.jpg"
                  alt="Orlando, Florida"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-[#ff7a27] text-white px-6 py-3 rounded-full shadow-lg">
                <p className="text-sm font-semibold">Orlando, FL</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-xs font-semibold tracking-[0.15em] uppercase mb-4 text-[#ff7a27]">
                Who Should Attend
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0a2540] mb-8">
                Is This For You?
              </h2>
              <div className="space-y-4">
                {whoShouldAttend.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-start gap-4 p-4 bg-[#f7f8fa] rounded-xl"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="w-6 h-6 rounded-full bg-[#066779] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-[#1F2933] font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section className="py-20 sm:py-28 bg-[#066779]">
        <div
          ref={detailsReveal.ref}
          className={`mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
            detailsReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-[0.15em] uppercase mb-4 text-[#ff7a27]">
              Event Details
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Mark Your Calendar
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { label: "Location", value: "Orlando Hilton" },
              { label: "Dates", value: "Aug 9-11, 2026" },
              { label: "Registration", value: "Open Now" },
              { label: "Agenda", value: "Coming Soon" },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-2xl p-6 shadow-md">
                <p className="text-[#0a2540]/60 text-sm mb-2">{item.label}</p>
                <p className="text-[#0a2540] text-xl font-semibold">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why ASCENT Section */}
      <section className="py-20 sm:py-28 bg-white">
        <div
          ref={whyReveal.ref}
          className={`mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center transition-all duration-700 ${
            whyReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-xs font-semibold tracking-[0.15em] uppercase mb-4 text-[#ff7a27]">
            Why ASCENT
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0a2540] mb-8">
            The Journey You&apos;re Already On
          </h2>
          <p className="text-xl text-[#1F2933]/70 mb-6 leading-relaxed">
            ASCENT represents the journey military spouses are already on.
          </p>
          <p className="text-2xl font-semibold text-[#066779] mb-4">
            Not just enduring—but rising.
          </p>
          <p className="text-2xl font-semibold text-[#066779] mb-8">
            Not just supporting—but leading.
          </p>
          <p className="text-lg text-[#1F2933]/60">
            This summit equips you for that climb.
          </p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="register" className="py-24 sm:py-32 bg-gradient-to-br from-[#0a2540] to-[#066779] relative overflow-hidden">
        {/* Subtle background texture - faded to 30% */}
        <div 
          className="absolute inset-0 opacity-[0.008]"
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#ff7a27]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#066779]/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        {/* Soft blurred accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#ff7a27]/5 rounded-full blur-3xl" />
        
        <div
          ref={ctaReveal.ref}
          className={`relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center transition-all duration-700 ${
            ctaReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-[#ff7a27]" />
            <span className="text-white/90 text-sm font-medium">Limited Spots Available</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            Be Part of the First ASCENT Summit
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-xl mx-auto">
            This is the inaugural experience—and the beginning of something bigger.
          </p>
          
          <Button
            asChild
            size="lg"
            className="bg-[#ff7a27] hover:bg-[#e86a1a] text-white font-semibold px-10 py-6 text-lg rounded-md shadow-xl hover:shadow-2xl transition-all"
          >
            <Link href="/ascentregister">
              Reserve Your Seat Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
          
          <p className="mt-8 text-white/50 text-sm">
            Questions? <Link href="/contact" className="text-[#ff7a27] hover:underline">Contact us</Link>
          </p>
        </div>
      </section>
    </div>
  )
}
