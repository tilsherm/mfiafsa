import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Thank You | ASCENT Spouse Gathering",
  description: "Thank you for registering for the ASCENT Spouse Gathering.",
}

export default function AscentThankYouPage() {
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
            Thank You for Registering for Ascent!
          </h1>
          <div className="text-lg text-[#1F2933]/80 leading-relaxed mb-10 space-y-4">
            <p>We&apos;ve successfully received your registration.</p>
            <p className="text-xl font-semibold text-[#066779]">
              Important: Check Your Email
            </p>
            <p>
              A confirmation email from{" "}
              <a
                href="mailto:info@militaryfamilyinstitute.org"
                className="text-[#ff7a27] font-semibold hover:underline"
              >
                info@militaryfamilyinstitute.org
              </a>{" "}
              is on its way.
            </p>
            <p>
              If you don&apos;t see it within a few minutes, please check your
              Spam or Junk folder and add{" "}
              <a
                href="mailto:info@militaryfamilyinstitute.org"
                className="text-[#ff7a27] font-semibold hover:underline"
              >
                info@militaryfamilyinstitute.org
              </a>{" "}
              to your safe senders or contacts list.
            </p>
            <p>
              A member of our team will also be reaching out soon with your next
              steps.
            </p>
            <p>
              If you have any questions in the meantime, please don&apos;t
              hesitate to reach out.
            </p>
            <p>We look forward to connecting with you!</p>
          </div>
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
