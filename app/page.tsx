"use client"

import { useEffect, useRef } from "react"
import { LiquidMetalBackground } from "@/components/liquid-metal-background"
import { FloatingNavbar } from "@/components/floating-navbar"
import { ShinyButton } from "@/components/ui/shiny-button"
import { Feature } from "@/components/ui/feature-with-advantages"
import { StatusBento } from "@/components/ui/status-bento"
import { ContactCard } from "@/components/ui/contact-card"

export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const statusSectionRef = useRef<HTMLElement>(null)
  const contactSectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (!scrollContainer) return

    const handleWheel = (e: WheelEvent) => {
      const delta = e.deltaY
      const width = scrollContainer.offsetWidth
      const currentSection = Math.round(scrollContainer.scrollLeft / width)

      if (currentSection === 2 && statusSectionRef.current) {
        const section = statusSectionRef.current
        const isAtTop = section.scrollTop === 0
        const isAtBottom = section.scrollTop + section.clientHeight >= section.scrollHeight - 1
        if ((delta > 0 && !isAtBottom) || (delta < 0 && !isAtTop)) return
      }

      if (currentSection === 3 && contactSectionRef.current) {
        const section = contactSectionRef.current
        const isAtTop = section.scrollTop === 0
        const isAtBottom = section.scrollTop + section.clientHeight >= section.scrollHeight - 1
        if ((delta > 0 && !isAtBottom) || (delta < 0 && !isAtTop)) return
      }

      e.preventDefault()
      if (Math.abs(delta) > 10) {
        const target = delta > 0 ? Math.min(currentSection + 1, 3) : Math.max(currentSection - 1, 0)
        scrollContainer.scrollTo({ left: target * width, behavior: "smooth" })
      }
    }

    scrollContainer.addEventListener("wheel", handleWheel, { passive: false })
    return () => scrollContainer.removeEventListener("wheel", handleWheel)
  }, [])

  return (
    <main className="relative h-screen overflow-hidden">
      <LiquidMetalBackground />
      <div className="fixed inset-0 z-[5] bg-black/50" />
      <FloatingNavbar />

      <div
        ref={scrollContainerRef}
        className="relative z-10 flex h-screen w-full snap-x snap-mandatory overflow-x-auto overflow-y-hidden scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <style jsx>{`div::-webkit-scrollbar { display: none; }`}</style>

        <section id="home" className="flex min-w-full snap-start items-center justify-center px-4 py-20">
          <div className="mx-auto max-w-5xl">
            <div className="px-0 text-center leading-5">
              <h1 className="mb-8 text-balance text-5xl tracking-tight text-white [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] md:text-6xl lg:text-8xl">
                <span className="font-open-sans-custom not-italic">Puran.</span>{" "}
                <span className="font-serif italic">Accounting.</span>{" "}
                <span className="font-open-sans-custom not-italic">NEXUS.</span>
              </h1>

              <p className="mx-auto mb-8 max-w-3xl text-pretty text-xl font-thin leading-7 tracking-wide text-gray-300 [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)] font-open-sans-custom">
                Puran Accounting & Tax Solution Lab is building a sleek new client experience for accounting, tax,
                document intake, and service information. The website is under construction.
              </p>

              <div className="flex justify-center">
                <a href="mailto:info@puranaccounting.com"><ShinyButton className="px-8 py-3 text-base">contact the office</ShinyButton></a>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="flex min-w-full snap-start items-center justify-center px-4 py-20">
          <div className="mx-auto w-full max-w-7xl">
            <Feature />
          </div>
        </section>

        <section
          id="pricing"
          ref={statusSectionRef}
          className="relative min-w-full snap-start overflow-y-auto px-4 pb-20 pt-24 [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 size-full bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:12px_12px] opacity-30" />
          <div className="relative z-10 mx-auto w-full max-w-5xl">
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <h1 className="font-open-sans-custom text-4xl font-extrabold tracking-tight text-white [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] lg:text-6xl">
                Platform Status
              </h1>
              <p className="mt-4 text-sm text-gray-300 [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)] font-open-sans-custom md:text-base">
                The NEXUS Platform is being prepared. Business support remains active while the website is under construction.
              </p>
            </div>
            <StatusBento />
          </div>
        </section>

        <section
          id="contact"
          ref={contactSectionRef}
          className="relative min-w-full snap-start overflow-y-auto px-4 pb-20 pt-24"
        >
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 size-full bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:12px_12px] opacity-30" />
          <div className="relative z-10 mx-auto mt-[5vh] w-full max-w-5xl">
            <ContactCard />
          </div>
        </section>
      </div>
    </main>
  )
}
