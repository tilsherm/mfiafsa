import React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Military Family Institute",
  description: "Learn about Military Family Institute's leadership team and our mission to strengthen military families through leadership development, training, and community support.",
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
