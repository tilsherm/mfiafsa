import type { Metadata } from "next"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Apply | Military Spouse Academy",
  description: "Apply for the Military Spouse Academy leadership development program.",
}

export default function ApplicationPage() {
  return (
    <div className="pt-20 min-h-screen bg-[#FAFBFC]">
      {/* Header */}
      <section className="bg-[#066779] py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Apply for the Military Spouse Academy
          </h1>
          <p className="text-lg text-white/85 max-w-2xl mx-auto">
            Complete the application below to begin your leadership journey.
          </p>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-8">
            <img
              src="/images/mfi-shield-logo-transparent.png"
              alt="Military Family Institute"
              className="h-16 w-auto"
            />
          </div>

          <div className="min-h-[1500px]">
            <iframe
              src="https://client.agdashboard.com/widget/form/Ayj4adN9kunOccz4qOwY"
              style={{ width: "100%", height: "1466px", border: "none", borderRadius: "3px" }}
              id="inline-Ayj4adN9kunOccz4qOwY"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Form 24"
              data-height="1466"
              data-layout-iframe-id="inline-Ayj4adN9kunOccz4qOwY"
              data-form-id="Ayj4adN9kunOccz4qOwY"
              title="Form 24"
            />
            <Script
              src="https://client.agdashboard.com/js/form_embed.js"
              strategy="lazyOnload"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
