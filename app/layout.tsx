import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Open_Sans, Instrument_Serif } from "next/font/google"

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-open-sans",
  display: "swap",
})

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
  variable: "--font-instrument",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Puran Accounting & Tax Solution Lab | NEXUS Platform Coming Soon",
  description:
    "Puran Accounting & Tax Solution Lab is building the NEXUS Platform, a sleek client experience for accounting, tax, document intake, and service information.",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`font-sans ${openSans.variable} ${instrumentSerif.variable}`}>{children}</body>
    </html>
  )
}
