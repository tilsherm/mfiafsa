import type { Metadata } from "next"
import Image from "next/image"
import { MessageCircle, Users, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Book A Call | Military Family Institute",
  description: "Schedule a call with Military Family Institute to learn how we support military spouses and communities through free training resources and nonprofit programs.",
}

const expectations = [
  {
    icon: MessageCircle,
    text: "A short conversation about your community or organization",
  },
  {
    icon: Users,
    text: "An overview of available training options",
  },
  {
    icon: ArrowRight,
    text: "Next steps if there is a good fit",
  },
]

export default function BookACallPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-[#066779] py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center max-w-4xl mx-auto">
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <img
                src="/images/yolanda-book-call.jpg"
                alt="Yolanda Easton, Founder of Military Family Institute"
                className="w-64 sm:w-72 h-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div className="text-left order-1 lg:order-2">
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                <span className="border-b-4 border-[#ff7a27] pb-1">Start The Conversation</span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Schedule a call with Military Family Institute to learn how we support 
                military spouses and communities through free training resources and 
                nonprofit programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column - Info */}
            <div>
              <div className="max-w-none">
                <div className="flex justify-center mb-6">
                  <img
                    src="/images/mfi-shield-logo.png"
                    alt="Military Family Institute"
                    className="h-14 w-auto"
                  />
                </div>
                <p className="text-[#1F2933] text-lg leading-relaxed mb-8 text-left">
                  This conversation is designed to understand your goals and explore 
                  the best training approach for your base, organization, or community.
                </p>
                <p className="text-[#1F2933] text-lg leading-relaxed mb-12 text-left">
                  There is no cost and no obligation. Just a conversation to see how 
                  we can best support you.
                </p>
              </div>

              {/* What to Expect */}
              <div className="bg-[#F5F7F8] rounded-xl p-8">
                <h2 className="text-2xl font-bold text-[#066779] mb-6 text-left">
                  What To Expect On The Call
                </h2>
                <ul className="space-y-6">
                  {expectations.map((item, index) => (
                    <li key={index} className="flex items-start gap-5">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#ff7a27]/10">
                        <item.icon className="h-6 w-6 text-[#ff7a27]" />
                      </div>
                      <span className="text-[#1F2933] text-lg pt-2.5 text-left">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column - Booking Embed */}
            <div>
              <div className="bg-[#F5F7F8] rounded-xl p-4 sm:p-6 min-h-[600px]">
                <iframe
                  src="https://client.agdashboard.com/widget/bookings/yolandaeaston"
                  title="Schedule a call with Yolanda Easton"
                  className="w-full h-[550px] rounded-lg"
                  style={{ border: 'none' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-[#F5F7F8]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#1F2933] text-lg">
            Military Family Institute is a registered 501(c)(3) nonprofit organization 
            committed to serving military families and communities nationwide.
          </p>
        </div>
      </section>
    </div>
  )
}
