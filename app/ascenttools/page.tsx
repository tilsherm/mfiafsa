import type { Metadata } from "next"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Download Resources | Military Family Institute",
  description: "Download ASCENT resources from the Military Family Institute.",
}

export default function AscentToolsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section - Solid Blue */}
      <section className="relative py-20 overflow-hidden bg-[#066779]">
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Download Resources
          </h1>
          <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
            Fill out the form below to access ASCENT resources.
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

          {/* Embedded Download Form */}
          <div className="max-w-2xl mx-auto min-h-[840px]">
            <iframe
              src="https://client.agdashboard.com/widget/form/4O2zuthj0I0XM8VyOGU6"
              style={{ width: "100%", height: "825px", border: "none", borderRadius: "3px" }}
              id="inline-4O2zuthj0I0XM8VyOGU6"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="download-ascent"
              data-height="825"
              data-layout-iframe-id="inline-4O2zuthj0I0XM8VyOGU6"
              data-form-id="4O2zuthj0I0XM8VyOGU6"
              title="download-ascent"
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
