"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { X } from "lucide-react"

export function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if banner was dismissed in this session
    const isDismissed = sessionStorage.getItem("ascent-banner-dismissed")
    if (!isDismissed) {
      setIsVisible(true)
    }
  }, [])

  const handleDismiss = () => {
    setIsVisible(false)
    sessionStorage.setItem("ascent-banner-dismissed", "true")
  }

  if (!isVisible) return null

  return (
    <Link 
      href="/ascentsignup" 
      className="block bg-[#ff7a27] hover:bg-[#e86a1a] text-white py-3 px-4 transition-colors relative group"
    >
      <div className="mx-auto max-w-7xl flex items-center justify-center text-center">
        <p className="text-sm sm:text-base font-medium group-hover:underline">
          Registration is now closed for the 2026 ASCENT Spouse Gathering in Orlando - Learn More
        </p>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            handleDismiss()
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-white/20 rounded-full transition-colors"
          aria-label="Dismiss banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </Link>
  )
}
