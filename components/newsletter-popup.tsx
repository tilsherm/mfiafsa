"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import Script from "next/script"

export function NewsletterPopup() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if popup was already shown in this session
    const wasShown = sessionStorage.getItem("newsletter-popup-shown")
    if (wasShown) return

    // Show popup after 15 seconds
    const timer = setTimeout(() => {
      setIsVisible(true)
      sessionStorage.setItem("newsletter-popup-shown", "true")
    }, 15000)

    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-50 animate-[fadeIn_0.3s_ease-out]"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div 
          className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-hidden pointer-events-auto animate-[slideUp_0.3s_ease-out]"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={handleClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close popup"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>

          {/* Header */}
          <div className="bg-[#066779] text-white px-6 py-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
              Join the Military Family Institute Newsletter
            </h2>
            <p className="text-white/80 text-sm sm:text-base">
              Be the first to hear about upcoming spouse gatherings, leadership classes, and registration openings.
            </p>
          </div>

          {/* Form Container */}
          <div className="p-6">
            <iframe
              src="https://client.agdashboard.com/widget/form/KsFaCPz6ttozthFxQurs"
              style={{ width: "100%", height: "450px", border: "none", borderRadius: "3px" }}
              id="inline-KsFaCPz6ttozthFxQurs"
              data-layout='{"id":"INLINE"}'
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="MFI Newsletter"
              data-height="567"
              data-layout-iframe-id="inline-KsFaCPz6ttozthFxQurs"
              data-form-id="KsFaCPz6ttozthFxQurs"
              title="MFI Newsletter"
            />
          </div>
        </div>
      </div>

      <Script src="https://client.agdashboard.com/js/form_embed.js" strategy="lazyOnload" />

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  )
}
