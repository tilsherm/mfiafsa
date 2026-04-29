import Script from "next/script"
import Image from "next/image"

export const metadata = {
  title: "Register for ASCENT | Military Family Institute",
  description: "Register for the 2026 ASCENT Spouse Gathering - August 9-11, Orlando Hilton",
}

export default function AscentRegisterPage() {
  return (
    <div className="bg-[#FAFBFC] min-h-screen">
      {/* Header with background image */}
      <section className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 overflow-hidden min-h-[280px] sm:min-h-0">
        <Image
          src="/images/academy/conference-peace.jpg"
          alt="Leadership training session"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#066779]/80" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold tracking-[0.15em] uppercase mb-4 text-[#ff7a27]">
            August 9-11, 2026 | Orlando Hilton
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4 text-balance">
            Register for the 2026 ASCENT Spouse Gathering
          </h1>
          <p className="text-white/80 text-lg">
            Complete the form below to reserve your seat at our inaugural gathering.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm p-6 sm:p-10">
            <iframe
              src="https://client.agdashboard.com/widget/form/qQJ3yLqgdC3AH7AHo4dJ"
              style={{ width: "100%", height: "700px", border: "none", borderRadius: "3px" }}
              id="inline-qQJ3yLqgdC3AH7AHo4dJ"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="ASCENT Spouse Summit - Signup"
              data-height="646"
              data-layout-iframe-id="inline-qQJ3yLqgdC3AH7AHo4dJ"
              data-form-id="qQJ3yLqgdC3AH7AHo4dJ"
              title="ASCENT Spouse Summit - Signup"
            />
          </div>
        </div>
      </section>

      <Script
        src="https://client.agdashboard.com/js/form_embed.js"
        strategy="lazyOnload"
      />
    </div>
  )
}
