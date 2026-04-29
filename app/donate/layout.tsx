import React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Donate | Military Family Institute",
  description: "Support Military Family Institute's mission to strengthen military families. Your tax-deductible donation provides free leadership training and resources to military spouses nationwide.",
}

export default function DonateLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
