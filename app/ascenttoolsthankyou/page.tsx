"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Download, FileText, ExternalLink, Loader2 } from "lucide-react"

const PDF_PATH = "/mastering-communication-deployment-guide.pdf"
const PDF_FILENAME = "Mastering-Communication-Deployment-Guide.pdf"

export default function AscentToolsThankYouPage() {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = async () => {
    setIsDownloading(true)
    try {
      const response = await fetch(PDF_PATH)
      if (!response.ok) throw new Error("Failed to fetch PDF")
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url
      link.download = PDF_FILENAME
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    } catch (error) {
      // Fallback: open the PDF directly so the user can save it manually
      window.open(PDF_PATH, "_blank", "noopener,noreferrer")
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <div className="pt-20">
      {/* Hero Section - Solid Blue */}
      <section className="relative py-20 overflow-hidden bg-[#066779]">
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 text-balance">
            Thank You!
          </h1>
          <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto text-pretty">
            Your resource is ready. Download your guide below.
          </p>
        </div>
      </section>

      {/* Main Content - Download Card */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-8">
            <img
              src="/images/mfi-shield-logo.png"
              alt="Military Family Institute"
              className="h-16 w-auto"
            />
          </div>

          <div className="rounded-2xl border border-[#E2E8F0] bg-[#FAFBFC] p-8 shadow-sm">
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#ff7a27]/10">
                <FileText className="h-8 w-8 text-[#ff7a27]" />
              </div>

              <h2 className="text-2xl font-bold text-[#0a2540] mb-2 text-balance">
                The Military Spouse&apos;s Guide to Strengthening Relationships During Deployment
              </h2>
              <p className="text-[#1F2933]/70 mb-8 leading-relaxed">
                A companion guide built on the 5 Voices framework to help military couples
                thrive through every stage of deployment.
              </p>

              <Button
                onClick={handleDownload}
                disabled={isDownloading}
                size="lg"
                className="w-full sm:w-auto bg-[#ff7a27] hover:bg-[#e86a1a] text-white font-semibold px-8 py-6 text-lg rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                {isDownloading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Preparing Download...
                  </>
                ) : (
                  <>
                    <Download className="mr-2 h-5 w-5" />
                    Download PDF
                  </>
                )}
              </Button>

              <a
                href={PDF_PATH}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#066779] hover:underline"
              >
                <ExternalLink className="h-4 w-4" />
                Or open in a new tab
              </a>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href="/" className="text-[#066779] font-medium hover:underline">
              Return Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
