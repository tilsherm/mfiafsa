import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Military Family Institute",
  description: "Privacy Policy for the Military Family Institute website.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-20 min-h-screen bg-[#FAFBFC]">
      {/* Header */}
      <section className="bg-[#066779] py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Privacy Policy
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-[#1F2933]/60 mb-10 text-sm">Effective Date: 2026</p>

          <div className="space-y-10">
            {/* 1 */}
            <div>
              <h2 className="text-xl font-bold text-[#066779] mb-4">1. Information We Collect</h2>
              <ul className="list-disc pl-6 space-y-3 text-[#1F2933] leading-relaxed">
                <li>Personal information you provide, such as name, email address, and phone number.</li>
                <li>Information collected automatically, like IP addresses and device type, for website analytics.</li>
              </ul>
            </div>

            {/* 2 */}
            <div>
              <h2 className="text-xl font-bold text-[#066779] mb-4">2. Use of Information</h2>
              <ul className="list-disc pl-6 space-y-3 text-[#1F2933] leading-relaxed">
                <li>To respond to your messages or inquiries.</li>
                <li>To send newsletters, updates, or promotional materials if you opt in.</li>
                <li>To improve website functionality and user experience.</li>
              </ul>
            </div>

            {/* 3 */}
            <div>
              <h2 className="text-xl font-bold text-[#066779] mb-4">3. Sharing of Information</h2>
              <ul className="list-disc pl-6 space-y-3 text-[#1F2933] leading-relaxed">
                <li>We do not sell your personal information.</li>
                <li>Information may be shared with trusted service providers who support our operations.</li>
              </ul>
            </div>

            {/* 4 */}
            <div>
              <h2 className="text-xl font-bold text-[#066779] mb-4">4. Cookies and Tracking</h2>
              <ul className="list-disc pl-6 space-y-3 text-[#1F2933] leading-relaxed">
                <li>We may use cookies to enhance your browsing experience.</li>
              </ul>
            </div>

            {/* 5 */}
            <div>
              <h2 className="text-xl font-bold text-[#066779] mb-4">5. Your Rights</h2>
              <ul className="list-disc pl-6 space-y-3 text-[#1F2933] leading-relaxed">
                <li>You can request access, correction, or deletion of your personal information.</li>
                <li>You may opt out of receiving marketing communications at any time.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
