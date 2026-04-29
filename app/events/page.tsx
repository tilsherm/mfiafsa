import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Events & Program Dates | Military Family Institute",
  description:
    "Stay up to date on upcoming sessions for the Military Spouse Academy and Family Leader Program.",
}

const msaDates = [
  "May 21",
  "June 18",
  "July 16",
  "August 20",
  "September 17",
  "October 15",
  "November 19",
]

const cohorts = [
  {
    label: "Cohort A",
    dates: ["Jun 9 & 23", "Jul 7 & 21", "Aug 4 & 18"],
  },
  {
    label: "Cohort B",
    dates: ["Sep 1 & 15", "Oct 6 & 20", "Nov 2 & 17"],
  },
]

export default function EventsPage() {
  return (
    <div className="bg-[#FAFBFC] min-h-screen">
      {/* Banner Hero */}
      <section className="relative pt-20">
        <div className="relative w-full min-h-[340px] sm:min-h-[420px] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/events/events-banner.png')" }}
          />
          <div className="absolute inset-0 bg-[#044050]/30" />
          <div className="relative z-10 text-center px-4 sm:px-6 py-16 sm:py-20">
            <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4 text-balance">
              Events & Program Dates
            </h1>
            <p className="text-white/85 text-lg sm:text-xl max-w-2xl mx-auto">
              Stay up to date on upcoming sessions for the Military Spouse Academy
              and Family Leader Program.
            </p>
          </div>
        </div>
      </section>

      {/* Logo above event dates */}
      <div className="flex justify-center pt-10 pb-2">
        <Image
          src="/images/mfi-shield-logo-transparent.png"
          alt="Military Family Institute"
          width={72}
          height={72}
        />
      </div>

      {/* Military Spouse Academy Dates */}
      <section id="spouse-academy" className="py-8 sm:py-12 scroll-mt-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm p-8 sm:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#066779] mb-2 text-center">
              Military Spouse Academy{" "}
              <span className="text-[#ff7a27]">{"– 2026 Dates"}</span>
            </h2>
            <p className="text-[#1F2933]/60 text-center mb-8">
              Our flagship leadership program for military spouses.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
              {msaDates.map((date) => (
                <div
                  key={date}
                  className="flex items-center justify-center rounded-xl bg-[#066779]/5 border border-[#066779]/10 py-4 px-3"
                >
                  <span className="text-[#066779] font-semibold text-sm sm:text-base">
                    {date}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <Button
                asChild
                size="lg"
                className="bg-[#ff7a27] hover:bg-[#e86a1a] text-white font-semibold px-10 py-6 text-lg rounded-lg transition-all hover:shadow-xl"
              >
                <Link href="/book-a-call">Book a Call</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-[#E2E8F0]" />
      </div>

      {/* ASCENT Spouse Gathering */}
      <section id="ascent-orlando" className="py-12 sm:py-16 scroll-mt-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#0a2540] to-[#066779] rounded-2xl shadow-lg p-8 sm:p-10 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              ASCENT Spouse Gathering{" "}
              <span className="text-[#ff7a27]">{"– 2026 Dates"}</span>
            </h2>
            <p className="text-white/70 mb-6">
              A 3-day immersive leadership experience for military spouses.
            </p>
            <div className="inline-flex items-center justify-center rounded-xl bg-white/10 border border-white/20 py-4 px-8 mb-8">
              <span className="text-white font-semibold text-lg sm:text-xl">
                August 9-11, 2026
              </span>
            </div>
            <div className="flex justify-center">
              <Button
                asChild
                size="lg"
                className="bg-[#ff7a27] hover:bg-[#e86a1a] text-white font-semibold px-10 py-6 text-lg rounded-lg transition-all hover:shadow-xl"
              >
                <Link href="/ascentregister">Register</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-[#E2E8F0]" />
      </div>

      {/* Family Leader Program Dates */}
      <section id="family-leader" className="py-12 sm:py-16 scroll-mt-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm p-8 sm:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#066779] mb-2 text-center">
              Family Leader Program{" "}
              <span className="text-[#ff7a27]">{"– 2026 Dates"}</span>
            </h2>
            <p className="text-[#1F2933]/60 text-center mb-8">
              Each cohort is structured to build leadership capacity within
              military families.
            </p>

            <div className="flex flex-col gap-4 mb-10">
              {cohorts.map((cohort) => (
                <div
                  key={cohort.label}
                  className="rounded-xl bg-[#066779]/5 border border-[#066779]/10 p-5 sm:p-6"
                >
                  <p className="text-[#ff7a27] font-bold text-sm uppercase tracking-wide mb-2">
                    {cohort.label}
                  </p>
                  <div className="flex flex-wrap gap-x-6 gap-y-1">
                    {cohort.dates.map((d) => (
                      <span
                        key={d}
                        className="text-[#066779] font-medium text-sm sm:text-base"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <Button
                asChild
                size="lg"
                className="bg-[#ff7a27] hover:bg-[#e86a1a] text-white font-semibold px-10 py-6 text-lg rounded-lg transition-all hover:shadow-xl"
              >
                <Link href="/book-a-call">Book a Call</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
