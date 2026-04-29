import React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Military Family Institute",
  description: "Get in touch with Military Family Institute. We're here to help military leaders, community partners, spouses, and organizations learn more about our work.",
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
