"use client"

export function FloatingNavbar() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" })
  }

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 px-4 py-4">
      <div className="mx-auto max-w-7xl rounded-2xl border-2 border-white/10 bg-white/5 px-6 py-4 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <button onClick={() => scrollToSection("home")} className="cursor-pointer" aria-label="Home">
            <div className="flex items-center gap-2 text-white [text-shadow:_0_2px_8px_rgb(0_0_0_/_40%)]">
              <span className="grid h-8 w-8 place-items-center rounded-lg border border-white/20 bg-white/10 font-open-sans-custom text-sm">NX</span>
            </div>
          </button>

          <div className="hidden items-center gap-8 md:flex">
            <button onClick={() => scrollToSection("features")} className="text-sm font-open-sans-custom text-gray-300 transition-colors hover:text-white [text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)]">Features</button>
            <button onClick={() => scrollToSection("pricing")} className="text-sm font-open-sans-custom text-gray-300 transition-colors hover:text-white [text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)]">Status</button>
            <button onClick={() => scrollToSection("about")} className="text-sm font-open-sans-custom text-gray-300 transition-colors hover:text-white [text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)]">About</button>
            <button onClick={() => scrollToSection("contact")} className="text-sm font-open-sans-custom text-gray-300 transition-colors hover:text-white [text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)]">Contact</button>
          </div>

          <a href="mailto:info@puranaccounting.com" className="rounded-md bg-white px-3 py-2 text-sm font-open-sans-custom text-black hover:bg-gray-100 [text-shadow:_0_1px_2px_rgb(0_0_0_/_10%)]">Get Notified</a>
        </div>
      </div>
    </nav>
  )
}
