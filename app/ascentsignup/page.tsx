"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Calendar, Users, Sparkles, Heart, Target, Mountain, ArrowRight, Check, Handshake, Download, Mail, X } from "lucide-react"
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
  const [isClosedModalOpen, setIsClosedModalOpen] = useState(false)

  return (
    <div className="bg-[#FAFBFC] min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden">
        <Image
          src="/images/ascent/team-circle-bigcenter.jpg"
          alt="ASCENT Military Spouse Gathering"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/65 to-black/80" />
        
        {/* Floating date badge - hidden on mobile */}
        <div className="hidden md:block absolute top-32 right-8 md:right-16 z-20">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-xl">
            <p className="text-xs font-semibold text-[#ff7a27] uppercase tracking-wider">Save the Date</p>
            <p className="text-2xl font-bold text-[#0a2540]">Aug 10-12</p>
            <p className="text-sm text-[#066779]">2026</p>
          </div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Mountain className="w-4 h-4 text-[#ff7a27]" />
            <span className="text-white/90 text-sm font-medium">Inaugural Spouse Gathering</span>
          </div>
          
          <h1 className="text-5xl sm:text-7xl font-bold text-white mb-4 tracking-tight">
            ASCENT
          </h1>
          <p className="text-3xl sm:text-4xl text-white/90 font-light mb-2">
            Military Spouse Gathering
          </p>
          
          <div className="flex items-center justify-center gap-3 text-[#ff7a27] text-2xl sm:text-3xl font-semibold my-8">
            <span>Rise</span>
            <span className="w-2 h-2 rounded-full bg-[#ff7a27]" />
            <span>Lead</span>
            <span className="w-2 h-2 rounded-full bg-[#ff7a27]" />
            <span>Thrive</span>
          </div>

          <p className="text-xl sm:text-2xl text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
            Join military spouses from across the country for a three-day leadership experience designed to equip you with the clarity, tools, and community needed to thrive in every season of military life.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-white/90 text-lg">
              <MapPin className="w-6 h-6 text-[#ff7a27]" />
              <span className="text-xl font-medium">Orlando, Florida</span>
            </div>
            <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-white/40" />
            <div className="flex items-center gap-2 text-white/90 text-lg">
              <Calendar className="w-6 h-6 text-[#ff7a27]" />
              <span>August 10-12, 2026</span>
            </div>
          </div>

          <Button
            size="lg"
            onClick={() => setIsClosedModalOpen(true)}
            className="bg-[#ff7a27] hover:bg-[#e86a1a] text-white font-semibold px-10 py-6 text-lg rounded-md shadow-xl hover:shadow-2xl transition-all"
          >
            Register Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
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
                <strong className="text-[#066779]">The ASCENT Spouse Gathering is designed to change that.</strong>
              </p>
              <p className="text-[#1F2933]/60 leading-relaxed">
                {"Hosted in partnership with the Air & Space Forces Association, this inaugural event brings military spouses together for focused growth, real connection, and practical leadership tools that apply directly to everyday life."}
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/leadership-voice-group.jpg"
                alt="Leadership workshop participants"
                width={600}
                height={450}
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:-left-6 bg-[#066779] text-white p-6 rounded-2xl shadow-xl max-w-[200px]">
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
            <p className="text-sm font-semibold tracking-[0.15em] uppercase mb-4 text-[#ff7a27]">
              What You&apos;ll Experience
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#0a2540] mb-4">
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
                  src="/images/ascent/orlando-aerial.png"
                  alt="Orlando, Florida aerial view"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-[#ff7a27] text-white px-8 py-4 rounded-full shadow-lg">
                <p className="text-lg font-semibold">Orlando, Florida</p>
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
      <section className="py-20 sm:py-28 relative overflow-hidden">
        <Image
          src="/images/ascent/orlando-night-new.jpg"
          alt="Orlando at night"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0a2540]/75" />
        <div
          ref={detailsReveal.ref}
          className={`relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
            detailsReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Logo above section */}
          <div className="flex justify-center mb-8">
            <Image
              src="/images/mfi-shield-logo-transparent.png"
              alt="Military Family Institute"
              width={56}
              height={56}
            />
          </div>
          <div className="text-center mb-12">
            <p className="text-lg font-semibold tracking-[0.15em] uppercase mb-4 text-[#ff7a27]">
              Event Details
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Mark Your Calendar
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <p className="text-[#0a2540]/60 text-sm mb-2">Location</p>
              <p className="text-[#0a2540] text-xl font-semibold">Orlando Hilton</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <p className="text-[#0a2540]/60 text-sm mb-2">Dates</p>
              <p className="text-[#0a2540] text-xl font-semibold">Aug 10-12, 2026</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <p className="text-[#0a2540]/60 text-sm mb-2">Registration</p>
              <button
                type="button"
                onClick={() => setIsClosedModalOpen(true)}
                className="text-[#ff7a27] text-xl font-semibold hover:underline"
              >
                Closed
              </button>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <p className="text-[#0a2540]/60 text-sm mb-2">Agenda</p>
              <a
                href="/ascent-2026-agenda.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#ff7a27] text-xl font-semibold hover:underline"
              >
                <Download className="w-4 h-4" />
                View PDF
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Part of the AFSA Summit Experience Section */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-[0.15em] uppercase mb-4 text-[#ff7a27]">
              Part of Something Bigger
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0a2540] mb-6">
              Part of the AFSA Summit Experience
            </h2>
            <p className="text-lg text-[#1F2933]/70 max-w-2xl mx-auto leading-relaxed">
              The ASCENT Spouse Gathering takes place alongside the Air & Space Forces Association Summit, giving participants access to a broader national leadership environment, professional expo resources, and partner organizations supporting military families.
            </p>
          </div>

          {/* AFSA Partnership */}
          <div className="text-center mb-12">
            <p className="text-sm text-[#1F2933]/60 mb-6">Hosted in partnership with</p>
            <Link href="https://www.hqafsa.org/summit26.html" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/partners/summit-365.png"
                alt="Air & Space Forces Association Summit 2026"
                width={320}
                height={128}
                className="mx-auto hover:opacity-80 transition-opacity"
              />
            </Link>
          </div>

          {/* Links Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              href="https://www.hqafsa.org/summit26.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 bg-white rounded-xl border border-[#E2E8F0] hover:border-[#ff7a27] hover:shadow-md transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-[#ff7a27]/10 flex items-center justify-center group-hover:bg-[#ff7a27]/20 transition-colors">
                <ArrowRight className="w-5 h-5 text-[#ff7a27]" />
              </div>
              <div>
                <p className="font-semibold text-[#0a2540]">AFSA Summit 2026</p>
                <p className="text-sm text-[#1F2933]/60">Event details & schedule</p>
              </div>
            </Link>
            <a
              href="/ascent-2026-agenda.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 bg-white rounded-xl border border-[#E2E8F0] hover:border-[#ff7a27] hover:shadow-md transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-[#ff7a27]/10 flex items-center justify-center group-hover:bg-[#ff7a27]/20 transition-colors">
                <ArrowRight className="w-5 h-5 text-[#ff7a27]" />
              </div>
              <div>
                <p className="font-semibold text-[#0a2540]">Sponsor / Exhibitor Info</p>
                <p className="text-sm text-[#1F2933]/60">View PDF</p>
              </div>
            </a>
            <Link
              href="https://thehiltonorlando.com/about/hotel-policies-information/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 bg-white rounded-xl border border-[#E2E8F0] hover:border-[#ff7a27] hover:shadow-md transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-[#ff7a27]/10 flex items-center justify-center group-hover:bg-[#ff7a27]/20 transition-colors">
                <ArrowRight className="w-5 h-5 text-[#ff7a27]" />
              </div>
              <div>
                <p className="font-semibold text-[#0a2540]">Hilton Host Hotel</p>
                <p className="text-sm text-[#1F2933]/60">Policies & information</p>
              </div>
            </Link>
            <Link
              href="https://book.passkey.com/event/51219755/owner/213/home"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 bg-white rounded-xl border border-[#E2E8F0] hover:border-[#ff7a27] hover:shadow-md transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-[#ff7a27]/10 flex items-center justify-center group-hover:bg-[#ff7a27]/20 transition-colors">
                <ArrowRight className="w-5 h-5 text-[#ff7a27]" />
              </div>
              <div>
                <p className="font-semibold text-[#0a2540]">Overflow Hotel</p>
                <p className="text-sm text-[#1F2933]/60">Book alternate accommodations</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why ASCENT Section */}
      <section className="py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/academy/conference-peace.jpg"
            alt="Leadership training session"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[#0a2540]/90" />
        <div
          ref={whyReveal.ref}
          className={`relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center transition-all duration-700 ${
            whyReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Logo above section */}
          <div className="flex justify-center mb-6">
            <Image
              src="/images/mfi-shield-logo-transparent.png"
              alt="Military Family Institute"
              width={56}
              height={56}
            />
          </div>
          <p className="text-xs font-semibold tracking-[0.15em] uppercase mb-4 text-[#ff7a27]">
            Why ASCENT
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
            The Journey You&apos;re Already On
          </h2>
          <p className="text-xl text-white/80 mb-6 leading-relaxed">
            ASCENT represents the journey military spouses are already on.
          </p>
          <p className="text-2xl font-semibold text-[#ff7a27] mb-4">
            Not just enduring—but rising.
          </p>
          <p className="text-2xl font-semibold text-[#ff7a27] mb-8">
            Not just supporting—but leading.
          </p>
          <p className="text-lg text-white/70">
            This gathering equips you for that climb.
          </p>
        </div>
      </section>

      {/* Support the ASCENT Experience Section */}
      <section className="pt-28 sm:pt-36 pb-20 sm:pb-28 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold tracking-[0.15em] uppercase mb-4 text-[#ff7a27]">
              Make an Impact
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0a2540] mb-6">
              Support the ASCENT Experience
            </h2>
            <p className="text-lg text-[#1F2933]/70 max-w-2xl mx-auto">
              ASCENT is offered at no cost to military spouses. Donations help make this leadership experience accessible to those who need it most.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-[#E2E8F0]">
              <div className="w-14 h-14 rounded-xl bg-[#066779]/10 group-hover:bg-[#ff7a27]/10 flex items-center justify-center mb-5 transition-colors duration-300">
                <Heart className="w-7 h-7 text-[#066779] group-hover:text-[#ff7a27] transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-[#0a2540] mb-3">Support a Spouse</h3>
              <p className="text-[#1F2933]/60 text-sm mb-6">
                Your gift directly funds a military spouse&apos;s participation, covering registration, materials, and resources.
              </p>
              <Button
                asChild
                className="w-full bg-[#066779] hover:bg-[#055465] text-white font-semibold rounded-lg"
              >
                <Link href="/donate-ascent">Give Now</Link>
              </Button>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-[#E2E8F0]">
              <div className="w-14 h-14 rounded-xl bg-[#066779]/10 group-hover:bg-[#ff7a27]/10 flex items-center justify-center mb-5 transition-colors duration-300">
                <Users className="w-7 h-7 text-[#066779] group-hover:text-[#ff7a27] transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-[#0a2540] mb-3">Sponsor a Seat</h3>
              <p className="text-[#1F2933]/60 text-sm mb-6">
                Fully sponsor a military spouse&apos;s gathering experience, including travel support and accommodations assistance.
              </p>
              <Button
                asChild
                className="w-full bg-[#066779] hover:bg-[#055465] text-white font-semibold rounded-lg"
              >
                <Link href="/donate-ascent">Become a Sponsor</Link>
              </Button>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-[#E2E8F0]">
              <div className="w-14 h-14 rounded-xl bg-[#066779]/10 group-hover:bg-[#ff7a27]/10 flex items-center justify-center mb-5 transition-colors duration-300">
                <Handshake className="w-7 h-7 text-[#066779] group-hover:text-[#ff7a27] transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-[#0a2540] mb-3">Partner with the Mission</h3>
              <p className="text-[#1F2933]/60 text-sm mb-6">
                Join as an organizational partner to support multiple spouses and expand the reach of this transformative experience.
              </p>
              <Button
                asChild
                className="w-full bg-[#066779] hover:bg-[#055465] text-white font-semibold rounded-lg"
              >
                <Link href="/donate-ascent">Partner With Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="register" className="py-24 sm:py-32 relative overflow-hidden">
        {/* Background image */}
        <Image
          src="/images/academy/conference-audience.jpg"
          alt="Conference audience"
          fill
          className="object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#0a2540]/80" />
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#ff7a27]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#066779]/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        
        <div
          ref={ctaReveal.ref}
          className={`relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center transition-all duration-700 ${
            ctaReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
            <Sparkles className="w-5 h-5 text-[#ff7a27]" />
            <span className="text-white/90 text-lg font-semibold">Limited Spots Available</span>
          </div>
          
          <h2 className="text-4xl sm:text-6xl font-bold text-white mb-6 leading-tight">
            Be Part of the First ASCENT Gathering
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-xl mx-auto">
            This is the inaugural experience—and the beginning of something bigger.
          </p>
          
          <Button
            size="lg"
            onClick={() => setIsClosedModalOpen(true)}
            className="bg-[#ff7a27] hover:bg-[#e86a1a] text-white font-semibold px-10 py-6 text-lg rounded-md shadow-xl hover:shadow-2xl transition-all"
          >
            Reserve Your Seat Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          
          <p className="mt-8 text-white/50 text-sm">
            Questions? <Link href="/contact" className="text-[#ff7a27] hover:underline">Contact us</Link>
          </p>
        </div>
      </section>

      {/* Registration Closed Modal */}
      {isClosedModalOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-50 animate-[fadeIn_0.3s_ease-out]"
            onClick={() => setIsClosedModalOpen(false)}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="registration-closed-title"
              className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden pointer-events-auto animate-[slideUp_0.3s_ease-out]"
            >
              {/* Close button */}
              <button
                type="button"
                onClick={() => setIsClosedModalOpen(false)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>

              <div className="px-6 py-8 text-center">
                <div className="mx-auto w-14 h-14 rounded-full bg-[#ff7a27]/10 flex items-center justify-center mb-4">
                  <Mail className="w-7 h-7 text-[#ff7a27]" />
                </div>
                <h2 id="registration-closed-title" className="text-2xl font-bold text-[#0a2540] mb-3">
                  Registration Is Closed
                </h2>
                <p className="text-base text-[#1F2933]/70 mb-6 leading-relaxed">
                  Registration for the event is now closed. Please email us if you need assistance.
                </p>
                <Button
                  asChild
                  className="w-full bg-[#ff7a27] hover:bg-[#e86a1a] text-white font-semibold rounded-lg"
                >
                  <a href="mailto:info@militaryfamilyinstitute.org">
                    <Mail className="mr-2 w-4 h-4" />
                    info@militaryfamilyinstitute.org
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <style jsx global>{`
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes slideUp {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `}</style>
        </>
      )}
    </div>
  )
}
