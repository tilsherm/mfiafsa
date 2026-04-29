import type { Metadata } from "next"
import Link from "next/link"
import { Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Contact | Military Family Institute",
  description: "Get in touch with Military Family Institute. We'd love to hear from you.",
}

export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* Hero Section - Solid Blue */}
      <section className="relative py-20 overflow-hidden bg-[#066779]">
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Contact Military Family Institute
          </h1>
          <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
            {"We'd love to hear from you. Whether you're a military leader, community partner, spouse, or organization interested in learning more about our work, our team is here to help."}
          </p>
        </div>
      </section>

      {/* Main Content - Embedded Form */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-6">
            <img
              src="/images/mfi-shield-logo.png"
              alt="Military Family Institute"
              className="h-16 w-auto"
            />
          </div>
          <p className="text-center text-xl text-[#1F2933] mb-12">
            Use the form below, and a member of our team will follow up with you.
          </p>

          {/* Embedded Contact Form */}
          <div className="max-w-2xl mx-auto min-h-[660px]">
            <iframe
              src="https://client.agdashboard.com/widget/form/82zDTdnXKeP8wPUabCu2"
              style={{ width: "100%", height: "644px", border: "none", borderRadius: "3px" }}
              id="inline-82zDTdnXKeP8wPUabCu2"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="MFI CONTACT"
              data-height="644"
              data-layout-iframe-id="inline-82zDTdnXKeP8wPUabCu2"
              data-form-id="82zDTdnXKeP8wPUabCu2"
              title="MFI CONTACT"
            />
            <Script
              src="https://client.agdashboard.com/js/form_embed.js"
              strategy="lazyOnload"
            />
          </div>

          {/* Book a Call Link */}
          <div className="text-center mt-12 p-8 bg-[#F5F7F8] rounded-xl max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Calendar className="h-6 w-6 text-[#066779]" />
              <h3 className="text-xl font-semibold text-[#066779]">
                Looking to schedule a conversation?
              </h3>
            </div>
            <p className="text-[#1F2933] mb-6">
              Visit our Book A Call page to schedule time with our team.
            </p>
            <Button
              asChild
              variant="outline"
              className="border-[#066779] text-[#066779] hover:bg-[#066779] hover:text-white bg-transparent"
            >
              <Link href="/book-a-call">Book A Call</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-12 bg-[#F5F7F8]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#1F2933]">
            Military Family Institute is a registered nonprofit organization
            committed to serving military families and communities.
          </p>
        </div>
      </section>
    </div>
  )
}
