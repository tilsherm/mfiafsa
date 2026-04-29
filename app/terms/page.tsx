import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms and Conditions | Military Family Institute",
  description: "Terms and Conditions for using the Military Family Institute website.",
}

export default function TermsPage() {
  return (
    <div className="pt-20 min-h-screen bg-[#FAFBFC]">
      {/* Header */}
      <section className="bg-[#066779] py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Terms and Conditions
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-[#1F2933]/60 mb-8 text-sm">Effective Date: 2026</p>
          <p className="text-[#1F2933] text-lg mb-10 leading-relaxed">
            Welcome to the Military Family Institute website. By accessing or using
            this website, you agree to the following terms:
          </p>

          <div className="space-y-10">
            {/* 1 */}
            <div>
              <h2 className="text-xl font-bold text-[#066779] mb-4">1. Use of Site</h2>
              <ul className="list-disc pl-6 space-y-3 text-[#1F2933] leading-relaxed">
                <li>You agree to use this website for lawful purposes only.</li>
                <li>You may not misuse, disrupt, or attempt to access restricted areas of the website.</li>
              </ul>
            </div>

            {/* 2 */}
            <div>
              <h2 className="text-xl font-bold text-[#066779] mb-4">2. Content</h2>
              <ul className="list-disc pl-6 space-y-3 text-[#1F2933] leading-relaxed">
                <li>All content on this website, including text, images, and resources, is the property of Military Family Institute unless otherwise noted.</li>
                <li>You may not reproduce, distribute, or modify any content without permission.</li>
              </ul>
            </div>

            {/* 3 */}
            <div>
              <h2 className="text-xl font-bold text-[#066779] mb-4">3. Third-Party Links</h2>
              <ul className="list-disc pl-6 space-y-3 text-[#1F2933] leading-relaxed">
                <li>Our site may contain links to external websites. We are not responsible for the content or privacy practices of those sites.</li>
              </ul>
            </div>

            {/* 4 */}
            <div>
              <h2 className="text-xl font-bold text-[#066779] mb-4">4. Disclaimers</h2>
              <ul className="list-disc pl-6 space-y-3 text-[#1F2933] leading-relaxed">
                <li>Information provided on this site is for general educational purposes and does not constitute legal, financial, or professional advice.</li>
                <li>Military Family Institute is not liable for any loss or damage resulting from your use of the website.</li>
              </ul>
            </div>

            {/* 5 */}
            <div>
              <h2 className="text-xl font-bold text-[#066779] mb-4">5. Changes</h2>
              <ul className="list-disc pl-6 space-y-3 text-[#1F2933] leading-relaxed">
                <li>We reserve the right to modify these Terms and Conditions at any time. Updated versions will be posted on this page.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
