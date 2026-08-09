const features = [
  ["Client intake", "A cleaner path for tax, accounting, document requests, and support."],
  ["Tax readiness", "Service information for individuals, families, and businesses."],
  ["Document workflow", "Organized client document guidance is being prepared."],
  ["NEXUS dashboard", "A premium dashboard-style experience is coming soon."],
  ["Business support", "Clients can still contact the office during construction."],
  ["Secure presentation", "Professional messaging and trust-first client communication."],
]

export function Feature() {
  return (
    <div className="w-full py-20 lg:py-0">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-start gap-4 py-20 lg:py-0">
          <div>
            <span className="rounded-md border border-white/20 bg-white/10 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm">Platform</span>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="font-open-sans-custom text-3xl tracking-tighter text-white [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] md:text-5xl lg:max-w-xl">
              Our Key Features
            </h2>
            <p className="max-w-xl text-lg leading-relaxed tracking-tight text-gray-300 [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)] font-open-sans-custom lg:max-w-xl">
              The new Puran Accounting & Tax Solution Lab NEXUS Platform is being prepared for a cleaner client experience.
            </p>
          </div>
          <div className="flex w-full flex-col gap-10 pt-12">
            <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 lg:grid-cols-3">
              {features.map(([title, text]) => (
                <div key={title} className="flex w-full flex-row items-start gap-6">
                  <span className="mt-2 text-white">✓</span>
                  <div className="flex flex-col gap-1">
                    <p className="font-open-sans-custom text-white">{title}</p>
                    <p className="font-open-sans-custom text-sm text-gray-300">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
