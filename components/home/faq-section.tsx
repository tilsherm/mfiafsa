"use client"

import { useEffect, useRef, useState } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

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

export function FaqSection() {
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
    <section ref={sectionRef} className="py-28 bg-[#fafbfc]">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#066779] mb-2">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-1 bg-[#5eb7bb] mx-auto mb-6" />
        </div>

        <div
          className={`transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Accordion type="single" collapsible className="space-y-4">
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
  )
}
