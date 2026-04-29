"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

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
    <div className="bg-[#066779] text-white py-3 px-4 relative">
      <div className="mx-auto max-w-7xl flex items-center justify-center gap-4 sm:gap-6 text-center">
        <p className="text-sm sm:text-base font-medium">
          Limited seats available for the 2026 ASCENT Spouse Gathering in Orlando
        </p>
        <Button
          asChild
          size="sm"
          className="bg-[#ff7a27] hover:bg-[#e86a1a] text-white font-semibold px-4 py-1.5 text-sm rounded-md whitespace-nowrap"
        >
          <Link href="/ascentregister">Reserve Your Seat</Link>
        </Button>
        <button
          type="button"
          onClick={handleDismiss}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-white/10 rounded-full transition-colors"
          aria-label="Dismiss banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
