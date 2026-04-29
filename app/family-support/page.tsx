"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Check, Users, BookOpen, Target, Shield, MessageCircle } from "lucide-react"
import { useEffect, useRef, useState } from "react"

function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return { ref, isVisible }
}

function CTAButton({ variant = "orange", label = "Learn More" }: { variant?: "orange" | "white"; label?: string }) {
  return (
    <Button
      asChild
      size="lg"
      className={
        variant === "orange"
          ? "bg-[#ff7a27] hover:bg-[#e86a1a] text-white font-semibold px-10 py-6 text-lg rounded-lg transition-all hover:shadow-xl"
          : "bg-white hover:bg-white/90 text-[#066779] font-semibold px-10 py-6 text-lg rounded-lg transition-all hover:shadow-xl"
      }
    >
      <Link href="/contact">{label}</Link>
    </Button>
  )
}

export default function FamilySupportPage() {
  const gapReveal = useReveal()
  const overviewReveal = useReveal()
  const whoReveal = useReveal()
  const impactReveal = useReveal()
  const toolsReveal = useReveal()
  const instructorReveal = useReveal()
  const bringReveal = useReveal()

  return (
    <>
      {/* ======== HERO SECTION ======== */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Desktop video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover hidden md:block"
        >
          <source
            src="https://assets.cdn.filesafe.space/Uj1VvtqOgHRiGPTavosH/media/699752833ff516f3d8502ecb.mov"
            type="video/mp4"
          />
        </video>
        {/* Mobile video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover md:hidden"
        >
          <source
            src="https://assets.cdn.filesafe.space/Uj1VvtqOgHRiGPTavosH/media/699f44148a039e1da2b8a71c.mov"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0" style={{ background: "rgba(6, 103, 121, 0.65)" }} />

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#ff7a27] mb-4">
            Advanced Program
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance leading-tight">
            Family Support Leader Development Course
          </h1>
          <div className="max-w-2xl mx-auto mb-10">
            <p className="text-white/90 text-lg sm:text-xl leading-relaxed">
              Advanced Leadership for Installation<br />
              and Command-Level Family Support Leaders
            </p>
          </div>

          <CTAButton variant="orange" />
        </div>
      </section>

      {/* ======== THE LEADERSHIP GAP ======== */}
      <section className="bg-white py-14 sm:py-20">
        <div
          ref={gapReveal.ref}
          className={`mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center transition-all duration-700 ${gapReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
          <p className="text-xs font-semibold tracking-[0.12em] uppercase mb-4 text-[#ff7a27]">
            The Gap
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#066779] mb-8 text-balance">
            The Leadership Gap Family Support Leaders Face
          </h2>
          <p className="text-[#1F2933] text-lg mb-8 max-w-2xl mx-auto">
            Across every branch, installation- and command-level family support leaders are tasked with leading volunteers, supporting families in crisis, and bridging communication between command and community. Yet very few receive structured leadership training tailored to these responsibilities.
          </p>

          <div className="flex justify-center mb-8">
            <img
              src="/images/mfi-shield-logo.png"
              alt="Military Family Institute"
              className="h-16 w-auto"
            />
          </div>

          <div className="text-left max-w-md mx-auto mb-8">
            <p className="text-[#1F2933] font-semibold mb-4">Key Responsibilities:</p>
            <div className="flex flex-col gap-3">
              {[
                "Manage sensitive relationships",
                "Lead volunteer teams",
                "Navigate crises with composure",
                "Support families through transitions",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#ff7a27] flex-shrink-0" />
                  <p className="text-[#1F2933]">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="text-[#1F2933] text-lg font-medium mb-10 max-w-xl mx-auto">
            This course closes the gap by giving you the tools to perform all of these effectively and confidently.
          </p>

          <CTAButton />
        </div>
      </section>

      {/* ======== PROGRAM FEATURES BUBBLE ======== */}
      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div
            ref={overviewReveal.ref}
            className={`relative rounded-2xl overflow-hidden px-8 sm:px-12 py-12 sm:py-14 text-center transition-all duration-700 ${overviewReveal.isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
              }`}
          >
            {/* Background image + overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/images/family-support/group-participants.jpg')" }}
            />
            <div className="absolute inset-0 bg-[#044050]/85" />

            <div className="relative z-10">
              <p className="text-xs font-semibold tracking-[0.12em] uppercase mb-3 text-[#ff7a27]">
                The Program
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-balance">
                Program Features
              </h2>
              <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto">
                Six-session live cohort held every two weeks. First session: 2.5 hours; subsequent sessions: 2 hours each. Participants receive hands-on guidance to apply leadership tools in real time.
              </p>
            </div>
          </div>
        </div>
        {/* Orange arrow connector - animated */}
        <div className={`flex justify-center py-4 transition-all duration-700 delay-300 ${overviewReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}>
          <svg width="24" height="32" viewBox="0 0 24 32" fill="none" className="text-[#ff7a27] animate-bounce">
            <path d="M12 0v24M4 20l8 8 8-8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </section>

      {/* ======== TRAINING BLOCKS ======== */}
      <section className="bg-white pb-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Group Workshops -- image left, text right */}
          <div className="border border-[#066779]/10 rounded-2xl shadow-sm p-6 sm:p-8 mb-2">
            <div className="grid lg:grid-cols-5 gap-8 items-center">
              <div className="lg:col-span-2">
                <div className="relative rounded-xl overflow-hidden shadow-md border border-[#066779]/5">
                  <img
                    src="/images/family-support/zoom-grid.jpg"
                    alt="Live facilitated group workshop with military spouses on video call"
                    className="w-full h-auto rounded-xl"
                  />
                  <div className="absolute inset-0 rounded-xl" style={{ background: "rgba(6, 103, 121, 0.12)" }} />
                </div>
              </div>
              <div className="lg:col-span-3">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#ff7a27]/20 flex items-center justify-center">
                    <Users className="h-5 w-5 text-[#ff7a27]" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#066779]">Group Workshops</h3>
                </div>
                <p className="text-[#1F2933]/80 text-base sm:text-lg">
                  Live facilitated training every two weeks for 2 hours, where participants work through real challenges, receive feedback, and learn from peers.
                </p>
              </div>
            </div>
          </div>

          {/* Orange connector line */}
          <div className="flex justify-center">
            <div className="w-px h-8 bg-[#ff7a27]/40" />
          </div>

          {/* Organizational Support -- text left, image right */}
          <div className="border border-[#066779]/10 rounded-2xl shadow-sm p-6 sm:p-8">
            <div className="grid lg:grid-cols-5 gap-8 items-center">
              <div className="lg:col-span-3">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#ff7a27]/20 flex items-center justify-center">
                    <BookOpen className="h-5 w-5 text-[#ff7a27]" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#066779]">Organizational Support</h3>
                </div>
                <p className="text-[#1F2933]/80 text-base sm:text-lg">
                  Practical implementation frameworks -- tools like 5 Voices, 5 Gears, Peace Index, 70:30 Principle, and the Support Challenge Matrix applied directly to your role.
                </p>
              </div>
              <div className="lg:col-span-2">
                <img
                  src="/images/family-support/yolanda-giant.jpg"
                  alt="Yolanda Easton at GiANT headquarters"
                  className="w-full h-auto rounded-xl shadow-md border border-[#066779]/5"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======== TOOLS YOU WILL USE ======== */}
      <section className="bg-white pt-4 pb-12">
        <div
          ref={toolsReveal.ref}
          className={`mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 transition-all duration-700 ${toolsReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
          <div className="text-center mb-10">
            <p className="text-xs font-semibold tracking-[0.12em] uppercase mb-4 text-[#ff7a27]">
              The Toolkit
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#066779] mb-4 text-balance">
              Tools You Will Use
            </h2>
          </div>

          {/* Logo + Peace Index Row */}
          <div className="grid sm:grid-cols-3 gap-10 items-center">
            <div className="flex flex-col items-center">
              <img
                src="/images/family-support/giant-logo.png"
                alt="GiANT Worldwide"
                className="h-12 w-auto mix-blend-multiply"
              />
              <p className="text-[#1F2933]/50 text-sm mt-3">GiANT Leadership</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/images/family-support/5-voices-logo.webp"
                alt="5 Voices Certified"
                className="h-20 w-auto"
              />
              <p className="text-[#1F2933]/50 text-sm mt-3">5 Voices Assessment</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/images/family-support/peace-index.png"
                alt="Peace Index Framework"
                className="h-20 w-auto mix-blend-multiply"
              />
              <p className="text-[#1F2933]/50 text-sm mt-3">Peace Index</p>
            </div>
          </div>
        </div>
      </section>

      {/* ======== IMPACT SECTION ======== */}
      <section className="relative py-14 sm:py-20 overflow-hidden">
        {/* Desktop background */}
        <div
          className="absolute inset-0 bg-cover bg-center hidden md:block"
          style={{ backgroundImage: "url('/images/family-support/training-group.jpg')" }}
        />
        {/* Mobile background - Yolanda presenting */}
        <div
          className="absolute inset-0 bg-cover bg-center md:hidden"
          style={{ backgroundImage: "url('/images/family-support/yolanda-presenting-mobile.png')" }}
        />
        <div className="absolute inset-0" style={{ background: "rgba(6, 103, 121, 0.75)" }} />

        <div
          ref={impactReveal.ref}
          className={`relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center transition-all duration-700 ${impactReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
          <p className="text-xs font-semibold tracking-[0.12em] uppercase mb-4 text-[#ff7a27]">
            The Impact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10 text-balance">
            What Changes When You Step Into the Course
          </h2>

          <div className="grid sm:grid-cols-2 gap-6 text-left max-w-2xl mx-auto mb-12">
            {[
              "Communicate with more clarity and confidence",
              "Strengthen relational health at home and in community",
              "Lead with steadiness instead of reaction",
              "Stabilize families and improve volunteer culture",
              "Strengthen command-community trust",
              "Support mission readiness through strong leadership",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#ff7a27] flex items-center justify-center">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <p className="text-white/90">{item}</p>
              </div>
            ))}
          </div>

          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
            By investing in your development, you strengthen both families and the community.
          </p>

          <CTAButton variant="white" />
        </div>
      </section>

      {/* ======== WHO SHOULD JOIN ======== */}
      <section className="bg-white py-14 sm:py-20">
        <div
          ref={whoReveal.ref}
          className={`mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 transition-all duration-700 ${whoReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-[0.12em] uppercase mb-4 text-[#ff7a27]">
              Is This for You?
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#066779] mb-6 text-balance">
              Who Should Join
            </h2>
            <p className="text-[#1F2933]/70 text-lg max-w-2xl mx-auto">
              This program is designed for installation- or command-level spouses and family leaders. This is not an entry-level program.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto mb-10">
            {[
              "Key Support Liaisons / Ombudsmen",
              "Command Spouse Leaders",
              "Family Readiness Group Leaders",
              "Installation-level volunteer leaders",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-[#066779]/5 rounded-xl p-5">
                <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[#ff7a27] flex items-center justify-center">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <p className="text-[#1F2933] text-sm font-medium">{item}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <CTAButton />
          </div>
        </div>
      </section>

      {/* ======== INSTRUCTOR & LEADERSHIP ======== */}
      <section className="bg-[#066779] py-14 sm:py-20">
        <div
          ref={instructorReveal.ref}
          className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 transition-all duration-700 ${instructorReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#ff7a27] mb-6">
                Led by Yolanda Easton
              </h2>
              <p className="text-white/90 text-lg mb-4">
                Yolanda is a GiANT-certified guide, military spouse, and leadership coach who has spent years developing programs that serve the unique needs of military families.
              </p>
              <p className="text-white/75 mb-8">
                Her approach centers on practical tools, not theory -- equipping leaders with frameworks they can apply immediately in their roles and relationships.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white hover:bg-white/90 text-[#066779] font-semibold px-10 py-6 text-lg rounded-lg transition-all hover:shadow-xl"
              >
                <Link href="/book-a-call">Book a Call</Link>
              </Button>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative max-w-sm w-full">
                <img
                  src="/images/family-support/yolanda-portrait.jpg"
                  alt="Yolanda Easton, Founder and Executive Director"
                  className="w-full h-auto rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======== BRING TO YOUR INSTALLATION ======== */}
      <section className="bg-white py-14 sm:py-20">
        <div
          ref={bringReveal.ref}
          className={`mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center transition-all duration-700 ${bringReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
          <p className="text-xs font-semibold tracking-[0.12em] uppercase mb-4 text-[#ff7a27]">
            For Installations
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#066779] mb-8 text-balance">
            Bring the Cohort to Your Installation
          </h2>
          <p className="text-[#1F2933]/70 text-lg mb-10 max-w-2xl mx-auto">
            This course can be delivered on-site, virtually, or through blended learning, depending on your installation's needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton label="Request Information" />
            <Button
              asChild
              size="lg"
              className="bg-[#066779] hover:bg-[#055565] text-white font-semibold px-10 py-6 text-lg rounded-lg transition-all hover:shadow-xl"
            >
              <Link href="/book-a-call">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ======== FAQ ======== */}
      <section className="bg-[#F6FBFC] py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold tracking-[0.12em] uppercase mb-4 text-[#ff7a27]">
              FAQ
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#066779] text-balance">
              Frequently Asked Questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="flex flex-col gap-3">
            {[
              {
                q: "Do I need to speak with someone before joining the course?",
                a: "Yes, a brief phone call is required to verify your leadership role and ensure the program is a good fit.",
              },
              {
                q: "How often is this course offered?",
                a: "The course runs three times per year for open enrollment. Special cohorts can also be requested by Wings for their members.",
              },
              {
                q: "Can I join mid-course?",
                a: "For open cohorts, you can join at any time. To earn the badge or certificate, participants must complete the full three-month program.",
              },
              {
                q: "Who is this course for?",
                a: "This program is specifically designed for spouses serving in installation-level or command leadership roles.",
              },
              {
                q: "How is this course different from the Military Spouse Academy?",
                a: "This program focuses on challenges unique to leadership positions, including team dynamics, trust-building, communication, and time management. The same GiANT tools are used, but they are tailored to the specific needs of spouses in leadership roles.",
              },
              {
                q: "Is this course open to spouses from all branches?",
                a: "Yes, it is open to all service branches.",
              },
              {
                q: "Do I need to verify that I\u2019m in a KSL, FRG, or Ombudsman position to participate?",
                a: "Yes, you will need to have your appointment letter showing you\u2019ve been appointed to this position or equivalent.",
              },
              {
                q: "Is there any type of certificate I receive upon completion?",
                a: "Yes, participants receive a badge, certificate, and CEU credit after completing all six sessions.",
              },
              {
                q: "Is this strictly a cohort program or are there additional training options outside live sessions?",
                a: "Currently, there is no additional training created. Participants will be added to a private community for support, and future classes may be offered.",
              },
            ].map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-white rounded-xl border border-[#066779]/10 px-6">
                <AccordionTrigger className="text-[#066779] font-semibold text-base sm:text-lg hover:no-underline">
                  {i + 1}. {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-[#1F2933]/75 leading-relaxed text-base">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

    </>
  )
}
