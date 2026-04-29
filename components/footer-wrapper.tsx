"use client"

import { usePathname } from "next/navigation"
import { Footer } from "@/components/footer"

export function FooterWrapper() {
  const pathname = usePathname()
  const useLight = pathname === "/" || pathname === "/donate" || pathname === "/ascentsignup"

  return <Footer variant={useLight ? "light" : "dark"} />
}
