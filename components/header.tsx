"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/events", label: "Events" },
  { href: "/donate", label: "Donate" },
]

const programsDropdown = [
  { label: "Spouse Academy", href: "/spouse-academy" },
  { label: "Family Support", href: "/family-support" },
  { label: "ASCENT Summit", href: "/ascentsignup" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isProgramsOpen, setIsProgramsOpen] = useState(false)
  const [isMobileProgramsOpen, setIsMobileProgramsOpen] = useState(false)
  const programsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (programsRef.current && !programsRef.current.contains(e.target as Node)) {
        setIsProgramsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white shadow-sm"
          : "bg-white"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center mr-3 md:mr-4">
            <img
              src="/images/mfi-shield-logo.png"
              alt="Military Family Institute"
              width={40}
              height={40}
              className="mix-blend-multiply"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-6">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm lg:text-base text-[#1F2933] hover:text-[#066779] font-medium transition-colors whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}

            {/* Programs Dropdown */}
            <div ref={programsRef} className="relative">
              <button
                type="button"
                onClick={() => setIsProgramsOpen(!isProgramsOpen)}
                className="flex items-center gap-1 text-sm lg:text-base text-[#1F2933] hover:text-[#066779] font-medium transition-colors whitespace-nowrap"
              >
                Programs
                <ChevronDown className={cn("h-4 w-4 transition-transform", isProgramsOpen && "rotate-180")} />
              </button>
              {isProgramsOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-[#1F2933]/10 py-2 z-50">
                  {programsDropdown.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block w-full text-left px-4 py-2.5 text-sm text-[#1F2933] hover:bg-[#066779]/5 hover:text-[#066779] transition-colors"
                      onClick={() => setIsProgramsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.slice(2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm lg:text-base text-[#1F2933] hover:text-[#066779] font-medium transition-colors whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className="bg-[#ff7a27] hover:bg-[#e86a1a] text-white font-semibold px-6 rounded-md transition-all hover:shadow-md"
            >
              <Link href="/book-a-call">Book A Call</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 text-[#1F2933]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-border">
          <nav className="flex flex-col px-4 py-4 gap-4">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#1F2933] hover:text-[#066779] font-medium py-2 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Programs Dropdown */}
            <div>
              <button
                type="button"
                onClick={() => setIsMobileProgramsOpen(!isMobileProgramsOpen)}
                className="flex items-center gap-1 text-[#1F2933] hover:text-[#066779] font-medium py-2 transition-colors w-full"
              >
                Programs
                <ChevronDown className={cn("h-4 w-4 transition-transform", isMobileProgramsOpen && "rotate-180")} />
              </button>
              {isMobileProgramsOpen && (
                <div className="pl-4 flex flex-col gap-2 mt-1">
                  {programsDropdown.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="text-left text-[#1F2933]/70 hover:text-[#066779] font-medium py-1.5 text-sm transition-colors"
                      onClick={() => { setIsMobileProgramsOpen(false); setIsMobileMenuOpen(false) }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.slice(2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#1F2933] hover:text-[#066779] font-medium py-2 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className="bg-[#ff7a27] hover:bg-[#e86a1a] text-white font-semibold rounded-md w-full transition-all"
            >
              <Link href="/book-a-call" onClick={() => setIsMobileMenuOpen(false)}>
                Book A Call
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
