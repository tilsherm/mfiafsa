"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, Users, BookOpen, Shield, Heart, CalendarDays, Laptop } from "lucide-react"
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

function CTAButton({ variant = "orange", label = "Book a Conversation", href = "/book-a-call" }: { variant?: "orange" | "white"; label?: string; href?: string }) {
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
      <Link href={href}>{label}</Link>
    </Button>
  )
}

export default function SpouseAcademyPage() {
  const gapReveal = useReveal()
  const academyReveal = useReveal()
  const frameworkReveal = useReveal()
  const pathReveal = useReveal()
  const changesReveal = useReveal()
  const forYouReveal = useReveal()
  const leadershipReveal = useReveal()
  const impactReveal = useReveal()

  return (
    <>
      {/* ======== HERO SECTION ======== */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/academy/hero-group-new.jpg')" }}
        />
        <div className="absolute inset-0 bg-[#066779]/80" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#ff7a27] mb-4">
            Flagship Program
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance leading-tight">
            Spouse Academy
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 font-light mb-4 max-w-2xl mx-auto">
            Leadership Development for Those Who Hold the Line at Home
          </p>
          <div className="max-w-xl mx-auto mb-10">
            <p className="text-white/80 leading-relaxed">
              {"You support the mission. You hold everything together. You weren't meant to lead without support."}
            </p>
          </div>

          <CTAButton label="Start Your Application" href="/application" />
          <p className="text-white/60 text-sm mt-4">
            This program is 100% free for accepted participants.
          </p>
        </div>
      </section>

      {/* ======== THE GAP (Silent Gap) ======== */}
      <section className="bg-[#f0f4f6] pt-20 pb-14 sm:pt-28 sm:pb-18">
        <div
          ref={gapReveal.ref}
          className={`mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center transition-all duration-700 ${gapReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
          <div className="flex justify-center mb-5">
            <img
              src="/images/mfi-shield-logo.png"
              alt="Military Family Institute"
              className="h-12 w-auto"
            />
          </div>
          <p className="text-xs font-semibold tracking-[0.12em] uppercase mb-4 text-[#ff7a27]">
            The Gap
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#066779] mb-8 text-balance">
            The Silent Gap No One Talks About
          </h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-[#1F2933] text-lg mb-4">
              Service members are trained from day one. You were not.
            </p>
            <p className="text-[#1F2933]/70 mb-6">
              You navigate deployments, transitions, and daily uncertainty without formal support.
              You manage change, lead households, and carry the weight of your community.
            </p>
            <p className="text-[#1F2933]/70 mb-6">
              Over time, that expectation takes its toll:
            </p>

            <div className="text-left max-w-md mx-auto mb-8 flex flex-col gap-3">
              {[
                "Feeling stretched too thin",
                "Struggling to communicate under pressure",
                "Losing confidence in your leadership voice",
                "Constantly adapting without guidance",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="mt-1.5 flex-shrink-0 w-2.5 h-2.5 rounded-full bg-[#ff7a27]" />
                  <p className="text-[#1F2933]/80">{item}</p>
                </div>
              ))}
            </div>

            <p className="text-[#066779] text-lg font-medium mb-3">
              {"Military readiness starts at home. You shouldn't have to figure it all out alone."}
            </p>
            <p className="text-[#1F2933]/70 text-lg">
              The Military Spouse Academy exists to close that gap.
            </p>
          </div>
        </div>
      </section>

      {/* ======== WHAT IS THE SPOUSE ACADEMY ======== */}
      <section className="bg-[#f7f8fa] py-16 sm:py-22">
        <div
          ref={academyReveal.ref}
          className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 transition-all duration-700 ${academyReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
          <div className="max-w-5xl mx-auto text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.12em] uppercase mb-4 text-[#ff7a27]">
              About the Academy
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#066779] mb-8 text-balance">
              What is the Military Spouse Academy?
            </h2>

            {/* Background image only behind flagship paragraph */}
            <div className="relative rounded-2xl overflow-hidden mb-8">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/academy/conference-audience.jpg')" }}
              />
              <div className="absolute inset-0 bg-[#0a2540]/70" />
              <div className="relative z-10 px-8 py-10 sm:px-14 sm:py-12">
                <p className="text-white/95 text-lg leading-relaxed">
                  The Military Spouse Academy is the flagship leadership program of the Military Family Institute. It is a structured, practical leadership development program designed to equip military spouses with the tools, language, and support they need to lead with clarity, confidence, and resilience in their homes and communities.
                </p>
              </div>
            </div>

            <p className="text-[#1F2933]/70 leading-relaxed mb-10 max-w-3xl mx-auto">
              This is not a one-time workshop or a generic training. The Academy is a lifestyle of growth, helping spouses practice leadership every day, navigate real challenges, and apply strategies that work in the unique context of military life.
            </p>

            <CTAButton label="Book a Call" />
          </div>

          {/* Divider line */}
          <div className="w-20 h-px bg-[#1F2933]/30 mx-auto mb-10" />

          {/* Three Academy Framework Elements */}
          <div
            ref={frameworkReveal.ref}
            className={`transition-all duration-700 ${frameworkReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
          >
            <h3 className="text-center text-2xl sm:text-3xl font-bold text-[#066779] mb-4">
              The Academy Framework
            </h3>
            <p className="text-center text-[#1F2933]/70 mb-12 max-w-2xl mx-auto">
              The Academy is built around three core components, each designed to provide consistent, practical support and opportunities to apply leadership in real time:
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: CalendarDays,
                  title: "Monthly Leadership Training",
                  image: "/images/academy/conference-peace.jpg",
                  bg: "bg-[#066779]",
                  points: [
                    "Live, one-hour sessions once per month",
                    "Each session focuses on a core leadership tool, applied to real-world scenarios",
                    "Topics rotate monthly, covering self-awareness, communication under stress, relational influence, and team dynamics",
                  ],
                },
                {
                  icon: Users,
                  title: "Live Group Sessions",
                  image: "/images/academy/workshop-connector.jpg",
                  bg: "bg-[#055565]",
                  points: [
                    "Moderated, private space for peer discussion, accountability, and sharing resources",
                    "Access to ongoing guidance from Military Family Institute leaders",
                    "A space to ask questions, reflect on challenges, and connect with others",
                  ],
                },
                {
                  icon: Laptop,
                  title: "On-Demand Platform",
                  image: "/images/academy/hero-group-new.jpg",
                  bg: "bg-[#044050]",
                  points: [
                    "Access to a private leadership platform with self-paced modules",
                    "Worksheets, reflection guides, and implementation frameworks",
                    "Includes replays of past live sessions for flexible learning",
                  ],
                },
              ].map((item) => (
                <div key={item.title} className={`${item.bg} rounded-2xl overflow-hidden shadow-lg flex flex-col`}>
                  <div className="w-full h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ff7a27] mb-4">
                      <item.icon className="h-6 w-6 text-white" strokeWidth={1.5} />
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-3">{item.title}</h4>
                    <ul className="flex flex-col gap-2">
                      {item.points.map((point) => (
                        <li key={point} className="flex items-start gap-2">
                          <div className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#ff7a27]" />
                          <p className="text-white/75 text-sm leading-snug">{point}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======== CHOOSE YOUR PATH ======== */}
      <section className="bg-white py-20 sm:py-28">
        <div
          ref={pathReveal.ref}
          className={`mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 transition-all duration-700 ${pathReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.12em] uppercase mb-4 text-[#ff7a27]">
              Membership Options
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#066779] mb-4 text-balance">
              How to Join
            </h2>
            <p className="text-[#1F2933]/70 text-lg max-w-2xl mx-auto">
              Applicants can choose the path that best fits their goals and level of engagement. Both options are designed to provide structured leadership development at no cost.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Core Membership */}
            <div className="bg-[#066779]/5 border border-[#066779]/10 rounded-2xl p-8 sm:p-10 flex flex-col shadow-sm">
              <p className="text-xs font-semibold tracking-[0.12em] uppercase mb-2 text-[#ff7a27]">
                Option A
              </p>
              <h3 className="text-2xl font-bold text-[#066779] mb-2">Core Membership</h3>
              <p className="text-[#1F2933]/60 text-sm mb-3">
                Ideal for spouses seeking structured development, real-world application, and peer support.
              </p>
              <div className="inline-flex items-center gap-1.5 bg-[#066779]/10 text-[#066779] text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
                <Check className="h-3 w-3" />
                Fully funded for eligible participants
              </div>

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {[
                  "Monthly, one-hour live leadership training",
                  "On-demand leadership modules, worksheets, and replays",
                  "Access to the private leadership community",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#066779] flex items-center justify-center">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <p className="text-[#1F2933] text-sm">{item}</p>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                size="lg"
                className="bg-[#066779] hover:bg-[#055568] text-white font-semibold px-8 py-5 text-base rounded-lg w-full"
              >
                <Link href="/application">Apply for Core</Link>
              </Button>
            </div>

            {/* Plus / Coaching Track */}
            <div className="bg-[#055565] rounded-2xl p-8 sm:p-10 flex flex-col shadow-lg">
              <p className="text-xs font-semibold tracking-[0.12em] uppercase mb-2 text-[#ff7a27]">
                Option B
              </p>
              <h3 className="text-2xl font-bold text-white mb-2">Plus / Coaching Track</h3>
              <p className="text-white/60 text-sm mb-3">
                Ideal for spouses seeking deeper coaching and application.
              </p>
              <div className="inline-flex items-center gap-1.5 bg-white/15 text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
                <Check className="h-3 w-3" />
                Fully funded for eligible participants
              </div>

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {[
                  "Includes everything in the Core Membership",
                  "Quarterly small group coaching sessions",
                  "Live Q&A sessions with instructors",
                  "Priority access to workshops and additional opportunities",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#ff7a27] flex items-center justify-center">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <p className="text-white/90 text-sm">{item}</p>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                size="lg"
                className="bg-[#ff7a27] hover:bg-[#e86a1a] text-white font-semibold px-8 py-5 text-base rounded-lg w-full"
              >
                <Link href="/application">Apply for Plus</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ======== WHAT CHANGES ======== */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/academy/collaboration-whiteboard.jpg')" }}
        />
        <div className="absolute inset-0 bg-[#066779]/85" />
        <div
          ref={changesReveal.ref}
          className={`relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center transition-all duration-700 ${changesReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
          <p className="text-xs font-semibold tracking-[0.12em] uppercase mb-4 text-[#ff7a27]">
            The Shift
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10 text-balance">
            What Begins to Change
          </h2>

          <div className="grid sm:grid-cols-2 gap-6 text-left max-w-2xl mx-auto mb-10">
            {[
              "Communicate with more clarity",
              "Recognize unhealthy patterns sooner",
              "Lead with steadiness instead of reaction",
              "Strengthen relational health at home",
              "Gain confidence in your leadership voice",
              "Make decisions from intention instead of pressure",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#ff7a27] flex items-center justify-center">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <p className="text-white">{item}</p>
              </div>
            ))}
          </div>

          <p className="text-white/80 text-lg max-w-xl mx-auto">
            You do not become someone new.
            You become intentional about who you already are.
          </p>
        </div>
      </section>

      {/* ======== WHO THIS IS FOR ======== */}
      <section className="bg-white py-20 sm:py-28">
        <div
          ref={forYouReveal.ref}
          className={`mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 transition-all duration-700 ${forYouReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-[0.12em] uppercase mb-4 text-[#ff7a27]">
              Is This for You?
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#066779] mb-6 text-balance">
              This Is for You If:
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto mb-10">
            {[
              "You lead at home or in your community",
              "You feel reactive instead of intentional",
              "You support a service member and want support too",
              "You want stronger communication and clarity",
              "You believe family leadership matters",
              "You are ready to grow, not just cope",
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
            <p className="text-[#1F2933]/70 mb-8">
              This is not about adding pressure. It is about building capacity.
            </p>
            <CTAButton label="Apply to Join the Academy" href="/application" />
          </div>
        </div>
      </section>

      {/* ======== IMPACT / EMOTIONAL SECTION ======== */}
      <section className="relative py-28 sm:py-36">
        {/* Desktop background */}
        <div
          className="absolute inset-0 bg-cover bg-center hidden md:block"
          style={{ backgroundImage: `url('/images/family-walking.jpg')` }}
        />
        {/* Mobile background - Yolanda presenting */}
        <div
          className="absolute inset-0 bg-cover bg-center md:hidden"
          style={{ backgroundImage: `url('/images/academy/yolanda-presenting-mobile.png')` }}
        />
        <div className="absolute inset-0 bg-[#066779]/75 md:bg-[#066779]/80" />

        <div
          ref={impactReveal.ref}
          className={`relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center transition-all duration-700 ${impactReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10 text-balance">
            When a Spouse Grows, Everything Changes
          </h2>

          <div className="grid grid-cols-2 gap-6 mb-12 max-w-lg mx-auto">
            {[
              { icon: Heart, label: "Marriages stabilize" },
              { icon: Users, label: "Children observe resilience" },
              { icon: Shield, label: "Communities strengthen" },
              { icon: BookOpen, label: "Leadership multiplies" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <item.icon className="h-7 w-7 text-[#ff7a27] mx-auto mb-2" />
                <p className="text-white font-medium text-sm">{item.label}</p>
              </div>
            ))}
          </div>

          <p className="text-white/80 text-lg mb-10">
            The military talks about readiness. We build it at home.
          </p>

          <CTAButton variant="orange" label="Apply to Join the Academy" href="/application" />
        </div>
      </section>

      {/* ======== PROGRAM LEADERSHIP ======== */}
      <section className="bg-[#f7f8fa] py-20 sm:py-28">
        <div
          ref={leadershipReveal.ref}
          className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 transition-all duration-700 ${leadershipReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
          <div className="grid lg:grid-cols-[340px_1fr] gap-12 items-center">
            {/* Image - Left */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/academy/yolanda-new.jpg"
                  alt="Yolanda Easton, Founder of Military Family Institute"
                  width={340}
                  height={510}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
            {/* Text - Right */}
            <div>
              <p className="text-xs font-semibold tracking-[0.12em] uppercase mb-4 text-[#ff7a27]">
                Program Leadership
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#066779] mb-6">
                Led by Yolanda Easton
              </h2>
              <p className="text-[#1F2933] text-lg mb-4 leading-relaxed">
                {"Yolanda is the CEO of the Military Family Institute. She's a GiANT-certified guide, military spouse, and leadership coach. Her work connects proven leadership tools with the realities of military family life, creating programs that are both practical and transformational."}
              </p>
              <div className="mt-8 text-center lg:text-left">
                <CTAButton label="Book a Conversation" />
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
