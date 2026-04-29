import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Thank You | Military Spouse Academy Application",
  description: "Thank you for applying to the Military Spouse Academy.",
}

export default function SpouseThankYouPage() {
  return (
    <div className="pt-20 min-h-screen bg-[#FAFBFC]">
      <section className="py-28 sm:py-36">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-8">
            <img
              src="/images/mfi-shield-logo-transparent.png"
              alt="Military Family Institute"
              className="h-20 w-auto"
            />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#066779] mb-6">
            Thank You for Your Application!
          </h1>
          <p className="text-lg text-[#1F2933]/80 leading-relaxed mb-10">
            A member from our team will reach out to you shortly.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[#ff7a27] hover:bg-[#e86a1a] text-white font-semibold px-10 py-6 text-lg rounded-lg transition-all hover:shadow-lg"
          >
            <Link href="/">Return Home</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
