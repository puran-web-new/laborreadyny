import DotPattern from "@/components/ui/dot-pattern"

export function ContactCard() {
  return (
    <div className="relative grid h-full w-full rounded-lg border-2 border-white/10 bg-white/5 shadow-lg backdrop-blur-sm md:grid-cols-2 lg:grid-cols-3">
      <DotPattern width={5} height={5} />
      <div className="flex flex-col justify-between lg:col-span-2">
        <div className="relative h-full space-y-4 px-4 py-8 md:p-8">
          <h1 className="font-open-sans-custom text-3xl font-bold text-white [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] md:text-4xl lg:text-5xl">Get in touch</h1>
          <p className="max-w-xl text-sm text-gray-300 [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)] font-open-sans-custom md:text-base lg:text-lg">
            Need help while the new NEXUS Platform is under construction? Contact Puran Accounting & Tax Solution Lab directly.
          </p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="py-3"><p className="font-open-sans-custom text-white">Email</p><p className="text-xs text-gray-300 font-open-sans-custom">info@puranaccounting.com</p></div>
            <div className="py-3"><p className="font-open-sans-custom text-white">Website</p><p className="text-xs text-gray-300 font-open-sans-custom">puranaccounting.com</p></div>
            <div className="py-3"><p className="font-open-sans-custom text-white">Status</p><p className="text-xs text-gray-300 font-open-sans-custom">NEXUS coming soon</p></div>
          </div>
        </div>
      </div>
      <div className="flex h-full w-full items-center border-t border-white/10 bg-white/10 p-5 md:col-span-1 md:border-l md:border-t-0">
        <form action="mailto:info@puranaccounting.com" method="post" className="w-full space-y-4">
          <label className="flex flex-col gap-2 text-white font-open-sans-custom">Name<input className="rounded-md border border-white/20 bg-white/10 px-3 py-2 text-white" name="name" /></label>
          <label className="flex flex-col gap-2 text-white font-open-sans-custom">Email<input className="rounded-md border border-white/20 bg-white/10 px-3 py-2 text-white" type="email" name="email" /></label>
          <label className="flex flex-col gap-2 text-white font-open-sans-custom">Message<textarea className="min-h-24 rounded-md border border-white/20 bg-white/10 px-3 py-2 text-white" name="message" /></label>
          <button className="w-full rounded-md bg-white px-4 py-2 font-open-sans-custom text-black" type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}
