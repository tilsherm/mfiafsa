import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Linkedin } from "lucide-react"

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/book-a-call", label: "Book A Call" },
  { href: "/donate", label: "Donate" },
  { href: "/contact", label: "Contact Us" },
]

export function Footer({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const isLight = variant === "light"

  return (
    <footer className={isLight ? "bg-white text-[#1F2933]" : "bg-[#066779] text-white"}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* Logo & Mission */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div>
                <img
                  src="/images/mfi-shield-logo-transparent.png"
                  alt="Military Family Institute"
                  width={52}
                  height={52}
                />
              </div>
              <div>
                <p className={`text-lg font-bold leading-tight ${isLight ? "text-[#1F2933]" : ""}`}>Military Family</p>
                <p className={`text-lg font-bold leading-tight ${isLight ? "text-[#1F2933]" : ""}`}>Institute</p>
              </div>
            </div>
            <p className={isLight ? "text-[#1F2933]/70 leading-relaxed max-w-md" : "text-white/80 leading-relaxed max-w-md"}>
              Military Family Institute is a registered nonprofit organization committed 
              to serving military families and communities through leadership development, 
              training, and ongoing support.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`text-lg font-semibold mb-6 ${isLight ? "text-[#1F2933]" : ""}`}>Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={isLight ? "text-[#1F2933]/70 hover:text-[#066779] transition-colors" : "text-white/80 hover:text-white transition-colors"}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h3 className={`text-lg font-semibold mb-6 ${isLight ? "text-[#1F2933]" : ""}`}>Connect With Us</h3>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/militaryfamilyinstitute/"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center w-12 h-12 rounded-lg transition-colors ${isLight ? "bg-[#1F2933]/10 hover:bg-[#ff7a27]" : "bg-white/10 hover:bg-[#ff7a27]"}`}
                aria-label="Follow us on Instagram"
              >
                <Instagram className={`h-6 w-6 ${isLight ? "text-[#1F2933]" : "text-white"}`} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61552678522679"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center w-12 h-12 rounded-lg transition-colors ${isLight ? "bg-[#1F2933]/10 hover:bg-[#ff7a27]" : "bg-white/10 hover:bg-[#ff7a27]"}`}
                aria-label="Follow us on Facebook"
              >
                <Facebook className={`h-6 w-6 ${isLight ? "text-[#1F2933]" : "text-white"}`} />
              </a>
              <a
                href="https://www.linkedin.com/showcase/militaryfamilyinstitute/"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center w-12 h-12 rounded-lg transition-colors ${isLight ? "bg-[#1F2933]/10 hover:bg-[#ff7a27]" : "bg-white/10 hover:bg-[#ff7a27]"}`}
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className={`h-6 w-6 ${isLight ? "text-[#1F2933]" : "text-white"}`} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`border-t py-8 ${isLight ? "border-[#1F2933]/10" : "border-white/20"}`}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col items-center md:items-start gap-2">
              <p className={isLight ? "text-[#1F2933]/50 text-sm" : "text-white/60 text-sm"}>
                &copy; {new Date().getFullYear()} Military Family Institute. All rights reserved.
              </p>
              <div className="flex gap-4">
                <Link
                  href="/terms"
                  className={isLight ? "text-[#1F2933]/50 text-xs hover:text-[#066779] transition-colors" : "text-white/50 text-xs hover:text-white transition-colors"}
                >
                  Terms & Conditions
                </Link>
                <Link
                  href="/privacypolicy"
                  className={isLight ? "text-[#1F2933]/50 text-xs hover:text-[#066779] transition-colors" : "text-white/50 text-xs hover:text-white transition-colors"}
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-end gap-1">
              <p className={isLight ? "text-[#1F2933]/50 text-sm" : "text-white/60 text-sm"}>
                A registered 501(c)(3) nonprofit organization
              </p>
              <p className={isLight ? "text-[#1F2933]/35 text-xs" : "text-white/45 text-xs"}>
                EIN: 33-2677779
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
