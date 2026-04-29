import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Programs | Military Family Institute",
  description: "Explore training programs offered by Military Family Institute for military spouses and communities.",
}

export default function ProgramsPage() {
  return (
    <div className="pt-20">
      <section className="py-28 sm:py-36 bg-[#F4FAFB]">
        <div className="mx-auto max-w-[720px] px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold tracking-[0.12em] uppercase mb-4 text-[#ff7a27]">
            PROGRAMS
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#066779] mb-6 text-balance">
            Programs Coming Soon
          </h1>
          <p className="text-lg text-[#1F2933] leading-relaxed">
            We are currently developing our training programs page. Check back soon to learn more about
            leadership development, workshops, and resources available for military spouses and communities.
          </p>
        </div>
      </section>
    </div>
  )
}
