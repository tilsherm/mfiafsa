import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Store | Military Family Institute",
  description: "Shop Military Family Institute merchandise and resources.",
}

export default function StorePage() {
  return (
    <div className="pt-20">
      <section className="py-28 sm:py-36 bg-[#F4FAFB]">
        <div className="mx-auto max-w-[720px] px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold tracking-[0.12em] uppercase mb-4 text-[#ff7a27]">
            STORE
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#066779] mb-6 text-balance">
            Store Coming Soon
          </h1>
          <p className="text-lg text-[#1F2933] leading-relaxed">
            Our store is currently being set up. Check back soon to browse merchandise and resources
            from Military Family Institute.
          </p>
        </div>
      </section>
    </div>
  )
}
