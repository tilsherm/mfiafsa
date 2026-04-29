"use client"

import React from "react"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const boardMembers = [
  {
    name: "Mark Tilsher",
    role: "Chairman",
    image: "/images/board-mark.jpg",
  },
  {
    name: "Mike Oppedahl",
    role: "Board Member",
    image: "/images/board-mike.jpg",
  },
  {
    name: "Anne O'Hea",
    role: "Board Member",
    image: "/images/board-annie.jpg",
  },
]

const teamMembersTopRow = [
  { name: "Jaclyn Bunte", role: "Instructor", image: "/images/ambassadors/kara-hileman.jpg" },
  { name: "Kara Hileman", role: "Instructor", image: "/images/ambassadors/jaclyn-bunte.jpg" },
  { name: "Amanda Lindsey-Boor", role: "Instructor", image: "/images/ambassadors/amanda-lindsey-boor.jpg" },
]

const teamMembersBottomRow = [
  { name: "Milt Lutton", role: "Instructor", image: "/images/ambassadors/milt-lutton.jpg" },
  { name: "Katie Rojas", role: "Social Media Manager", image: "/images/ambassadors/katie-rojas.jpg" },
]

const faqs = [
  {
    question: "Who is eligible to participate in Military Family Institute training?",
    answer: "Our training programs are available to military spouses, family members, and community organizations that support military families. We partner with installations, family readiness groups, and other organizations to provide access to our resources.",
  },
  {
    question: "Is there a cost to participate in the training programs?",
    answer: "No. All training provided by Military Family Institute is offered at no cost to participating spouses through nonprofit partnerships and organizational support.",
  },
  {
    question: "How can our installation or organization host a training workshop?",
    answer: "We start with a conversation to understand your community's specific needs and goals. Book a call with our team to discuss the best training approach for your organization.",
  },
  {
    question: "What topics do your training programs cover?",
    answer: "Our programs focus on leadership development, communication skills, emotional resilience, self-awareness, and practical tools for navigating military life transitions and challenges.",
  },
  {
    question: "Are virtual training options available?",
    answer: "Yes. We offer in-person workshops, virtual live sessions, and on-demand learning resources to meet the diverse needs of military communities across the country.",
  },
]

function useScrollReveal() {
  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return { ref, isVisible }
}

export default function AboutPage() {
  const missionReveal = useScrollReveal()
  const ceoReveal = useScrollReveal()
  const whoWeAreReveal = useScrollReveal()
  const approachReveal = useScrollReveal()
  const boardReveal = useScrollReveal()
  const ambassadorReveal = useScrollReveal()
  const faqReveal = useScrollReveal()

  return (
    <div className="pt-20">
      {/* 1. Hero - Flag Background */}
      <section className="relative pt-16 pb-24 sm:pt-20 sm:pb-28 overflow-hidden">
        {/* Flag background - desktop */}
        <div
          className="absolute inset-0 bg-cover bg-center hidden md:block"
          style={{ backgroundImage: "url('/images/flag-teal.png')" }}
        />
        {/* Flag background - mobile (zoomed/cropped for full coverage) */}
        <div
          className="absolute inset-0 bg-cover bg-center md:hidden"
          style={{ backgroundImage: "url('/images/flag-teal-mobile.png')" }}
        />
        {/* Subtle overlay for text legibility - stronger on mobile */}
        <div
          className="absolute inset-0 md:hidden"
          style={{ background: "rgba(6, 50, 65, 0.25)" }}
        />
        <div
          className="absolute inset-0 hidden md:block"
          style={{ background: "rgba(6, 103, 121, 0.3)" }}
        />

        <div className="relative z-10 mx-auto max-w-[1120px] px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 text-balance">
            Our Leadership and Mission
          </h1>
          <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
            Military Family Institute is a nonprofit organization dedicated to strengthening
            military families through leadership development, training, and community support.
          </p>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
          <svg
            viewBox="0 0 1440 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
            preserveAspectRatio="none"
          >
            <path d="M0 60V30C240 10 480 0 720 10C960 20 1200 40 1440 30V60H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* 2. Mission Section - Clean White Background */}
      <section
        ref={missionReveal.ref as React.RefObject<HTMLElement>}
        className="py-14 sm:py-20 bg-white"
      >
        <div
          className={`mx-auto max-w-[720px] px-4 sm:px-6 lg:px-8 transition-all duration-[450ms] ease-out ${
            missionReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          <div className="mb-5">
            <img
              src="/images/mfi-shield-logo.png"
              alt="Military Family Institute"
              width={48}
              height={48}
              className="mix-blend-multiply"
            />
          </div>
          <p className="text-xs font-semibold tracking-[0.12em] uppercase mb-5 text-[#ff7a27]">
            OUR MISSION
          </p>
          <p className="text-xl text-[#1F2933] leading-[1.8] text-left">
            Military Family Institute exists to{" "}
            <strong className="text-[#066779] font-semibold">strengthen military families</strong> by providing{" "}
            <strong className="text-[#066779] font-semibold">leadership development</strong>, training resources,
            and community support. We believe that when families are equipped with{" "}
            <strong className="text-[#066779] font-semibold">practical tools</strong> and ongoing support, they
            become the foundation for mission success and{" "}
            <strong className="text-[#066779] font-semibold">long-term readiness</strong>.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px w-full bg-[#E2E8F0]" />

      {/* 3. Meet Our CEO */}
      <section ref={ceoReveal.ref as React.RefObject<HTMLElement>} className="py-14 sm:py-20 bg-white">
        <div className="mx-auto max-w-[1120px] px-4 sm:px-6 lg:px-8">
          <div
            className={`bg-white rounded-[20px] p-6 sm:p-8 transition-all duration-[450ms] ease-out ${
              ceoReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
            style={{
              border: "1px solid rgba(10,60,70,0.10)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            }}
          >
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Image */}
              <div className="relative">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/yolanda-ceo.jpg"
                    alt="Yolanda Easton, CEO of Military Family Institute"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>

              {/* Content */}
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#066779] mb-2">Meet Our CEO</h2>
                <div className="w-12 h-1 bg-[#FF7A1A] mb-6" />

                <div className="flex flex-col gap-5 text-[#1F2933] leading-relaxed max-w-[720px]">
                  <p>
                    Yolanda Easton is the founder and CEO of Military Family Institute, bringing decades of
                    military service, spouse experience, and community leadership to her work supporting
                    military families.
                  </p>
                  <p>
                    Her journey began in uniform. In 1990, Yolanda enlisted in the United States Air Force as a
                    Communication-Navigation Specialist aboard the KC-135R Tanker. Rising to the rank of
                    Technical Sergeant and serving on active duty and in the Air National Guard, she supported
                    international operations and developed the discipline, resilience, and strategic clarity
                    that would later shape her leadership philosophy.
                  </p>
                  <p>
                    After her time in service, Yolanda experienced military life from another vantage
                    point--as a military spouse. Navigating deployments, relocations, and the daily
                    responsibility of holding a family steady during seasons of uncertainty, she saw firsthand
                    both the strain and the remarkable strength within military homes.
                  </p>
                  <p>
                    Through those lived experiences--on the flightline and at the kitchen table--Yolanda
                    discovered a deeper calling: equipping military spouses with the leadership tools they need
                    to thrive, not just survive. She pursued advanced training in leadership development,
                    communication, and resilience, eventually becoming a trusted speaker and facilitator for
                    military communities across the country.
                  </p>
                  <p>
                    Military Family Institute grew from her vision to close the gap between the professional
                    development service members receive and the support available to their families. Today, the
                    organization provides free leadership training resources to military spouses nationwide,
                    helping them build stronger families and healthier communities.
                  </p>
                  <p className="font-medium text-[#066779]">
                    Her mission is simple: strengthen the people behind the uniform so they can confidently
                    support those who wear it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual transition between CEO and Who We Are */}
      <div className="h-px w-full bg-[#E2E8F0]" />

      {/* 4. Who We Are */}
      <section
        ref={whoWeAreReveal.ref as React.RefObject<HTMLElement>}
        className="relative py-14 sm:py-20 overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/soldiers-marching.jpg')" }}
        />
        <div className="absolute inset-0 bg-[#044050]/60" />
        <div
          className={`relative z-10 mx-auto max-w-[1120px] px-4 sm:px-6 lg:px-8 transition-all duration-[450ms] ease-out ${
            whoWeAreReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-2">Who We Are</h2>
          <div className="w-16 h-1 bg-[#ff7a27] mx-auto mb-8" />

          <div className="flex flex-col gap-5 text-white/90 leading-relaxed max-w-[720px] mx-auto">
            <p>
              Military Family Institute is a nonprofit organization built by both military spouses and prior service
              members to support the long-term strength of military families.
            </p>
            <p>
              Our leadership team brings more than 160 years of combined military and community experience. We
              understand life on both sides of the mission. The demands placed on families. The pressure faced
              by service members. The reality of constant transition and change.
            </p>
            <p>
              While service members receive ongoing professional development throughout their careers, spouses
              are often left without consistent access to leadership tools, emotional support frameworks, and
              structured growth opportunities. We exist to close that gap.
            </p>
            <p>
              Our work is focused on equipping spouses with practical skills and support systems that
              strengthen families, improve stability, and create healthier military communities.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px w-full bg-[#E2E8F0]" />

      {/* 5. Our Approach */}
      <section
        ref={approachReveal.ref as React.RefObject<HTMLElement>}
        className="py-14 sm:py-20 bg-[#F4FAFB]"
      >
        <div
          className={`mx-auto max-w-[1120px] px-4 sm:px-6 lg:px-8 transition-all duration-[450ms] ease-out ${
            approachReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          <p
            className="text-xs font-semibold tracking-[0.08em] uppercase text-center mb-4"
            style={{ color: "rgba(10,60,70,0.70)" }}
          >
            OUR APPROACH
          </p>
          <p className="text-xl text-[#1F2933] leading-relaxed text-center max-w-[720px] mx-auto">
            Our work is led by experienced military spouses and prior service members who understand the realities of
            military life and the importance of supporting the people behind the mission.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px w-full bg-[#E2E8F0]" />

      {/* 6. Board of Directors */}
      <section ref={boardReveal.ref as React.RefObject<HTMLElement>} className="py-14 sm:py-20 bg-white">
        <div className="mx-auto max-w-[1120px] px-4 sm:px-6 lg:px-8">
          <div
            className={`transition-all duration-[450ms] ease-out ${
              boardReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#066779] text-center mb-2">
              Our Board of Directors
            </h2>
            <div className="w-16 h-1 bg-[#5eb7bb] mx-auto mb-12" />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-[900px] mx-auto">
              {boardMembers.map((member, index) => (
                <div
                  key={member.name}
                  className={`text-center transition-all duration-[450ms] ease-out ${
                    boardReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg mb-5">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={`${member.name}, ${member.role}`}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-[#066779] mb-1">{member.name}</h3>
                  <p className="text-sm text-[#066779]">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Wave transition to Ambassadors */}
      <div className="bg-white">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto block"
          preserveAspectRatio="none"
        >
          <path d="M0 0V30C240 50 480 60 720 50C960 40 1200 20 1440 30V0H0Z" fill="white" />
          <path d="M0 60V30C240 50 480 60 720 50C960 40 1200 20 1440 30V60H0Z" fill="#F0F5F4" />
        </svg>
      </div>

      {/* 7. Ambassadors */}
      <section
        ref={ambassadorReveal.ref as React.RefObject<HTMLElement>}
        className="py-14 sm:py-20 bg-[#F0F5F4]"
      >
        <div className="mx-auto max-w-[1120px] px-4 sm:px-6 lg:px-8">
          <div
            className={`transition-all duration-[450ms] ease-out ${
              ambassadorReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#066779] text-center mb-2">
              MFI Team Members
            </h2>
            <div className="w-16 h-1 bg-[#FF7A1A] mx-auto mb-4" />
            <p className="text-[#1F2933]/70 text-center mb-12 max-w-lg mx-auto">
              Our team is growing. Meet the people helping extend our mission into military
              communities nationwide.
            </p>

            {/* Top row - 3 members */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-[900px] mx-auto">
              {teamMembersTopRow.map((member, index) => (
                <div
                  key={member.name}
                  className={`text-center transition-all duration-[450ms] ease-out ${
                    ambassadorReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                  }`}
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg mb-5">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={`${member.name}, ${member.role}`}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-[#066779] mb-1">{member.name}</h3>
                  <p className="text-sm text-[#066779]">{member.role}</p>
                </div>
              ))}
            </div>

            {/* Bottom row - 2 members centered (pyramid on desktop, flat on mobile) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-10 max-w-[600px] mx-auto sm:justify-items-center">
              {teamMembersBottomRow.map((member, index) => (
                <div
                  key={member.name}
                  className={`text-center w-full sm:max-w-[260px] transition-all duration-[450ms] ease-out ${
                    ambassadorReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                  }`}
                  style={{ transitionDelay: `${(index + 3) * 80}ms` }}
                >
                  <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg mb-5">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={`${member.name}, ${member.role}`}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-[#066779] mb-1">{member.name}</h3>
                  <p className="text-sm text-[#066779]">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ Section */}
      <section ref={faqReveal.ref as React.RefObject<HTMLElement>} className="py-20 sm:py-28 bg-[#fafbfc]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-12 transition-all duration-[450ms] ease-out ${
              faqReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#066779] mb-2">
              Frequently Asked Questions
            </h2>
            <div className="w-16 h-1 bg-[#5eb7bb] mx-auto mb-6" />
          </div>

          <div
            className={`transition-all duration-[450ms] ease-out delay-200 ${
              faqReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          >
            <Accordion type="single" collapsible className="flex flex-col gap-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white rounded-lg px-6 border border-[#e2e8f0] shadow-sm"
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
        </div>
      </section>
    </div>
  )
}
