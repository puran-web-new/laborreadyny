import { useId } from "react"

export default function DotPattern({ width = 5, height = 5 }: { width?: number; height?: number }) {
  const id = useId()
  return (
    <svg aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full fill-white/20">
      <defs>
        <pattern id={id} width={width} height={height} patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
          <circle cx="1" cy="0.5" r="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
    </svg>
  )
}
