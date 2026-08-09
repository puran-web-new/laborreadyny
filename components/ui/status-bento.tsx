import DotPattern from "@/components/ui/dot-pattern"

const status = [
  "Landing page design in progress",
  "Client dashboard being prepared",
  "Service content being organized",
  "Contact flow remains active",
]

export function StatusBento() {
  return (
    <div className="grid grid-cols-1 gap-1.5 md:grid-cols-2 lg:grid-cols-8">
      <div className="relative overflow-hidden rounded-md border-2 border-white/10 bg-white/5 backdrop-blur-sm lg:col-span-5">
        <DotPattern width={5} height={5} />
        <div className="flex items-center gap-3 p-3">
          <span className="rounded-md border border-white/20 bg-white/10 px-2 py-1 text-xs font-open-sans-custom text-white">NEXUS</span>
          <span className="hidden rounded-md border border-white/20 bg-white/5 px-2 py-1 text-xs font-open-sans-custom text-white lg:flex">Coming Soon</span>
          <a href="mailto:info@puranaccounting.com" className="ml-auto rounded-md bg-white px-3 py-2 text-xs font-open-sans-custom text-black">Contact</a>
        </div>
        <div className="flex flex-col p-3 lg:flex-row">
          <div className="pb-2 lg:w-[30%]">
            <span className="font-mono text-3xl font-semibold tracking-tight text-white [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)]">In Progress</span>
          </div>
          <ul className="grid gap-2 text-xs text-gray-300 font-open-sans-custom lg:w-[70%]">
            {status.map((item) => (
              <li key={item} className="flex items-center gap-2"><span>✓</span><span className="leading-relaxed">{item}</span></li>
            ))}
          </ul>
        </div>
      </div>
      {[
        ["Client Notice", "Online office upgrade underway"],
        ["Documents", "Workflow guidance coming soon"],
        ["Tax Support", "Service information being refined"],
        ["Availability", "Office contact remains active"],
      ].map(([title, text]) => (
        <div key={title} className="relative overflow-hidden rounded-md border-2 border-white/10 bg-white/5 p-3 backdrop-blur-sm lg:col-span-4">
          <DotPattern width={5} height={5} />
          <span className="rounded-md border border-white/20 bg-white/10 px-2 py-1 text-xs font-open-sans-custom text-white">{title}</span>
          <p className="mt-6 font-open-sans-custom text-lg text-white [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)]">{text}</p>
        </div>
      ))}
    </div>
  )
}
