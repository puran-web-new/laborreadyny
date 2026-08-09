"use client"

import { useEffect, useState } from "react"

export function LiquidMetalBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-[#00042e]">
      <div
        className={
          "absolute -inset-[18%] opacity-95 blur-[1px] transition-opacity duration-700 " +
          (mounted ? "opacity-100" : "opacity-80")
        }
        style={{
          background:
            "conic-gradient(from 150deg at 42% 48%, #02062f 0deg, #f8f8ff 36deg, #3ee8ff 44deg, #051060 60deg, #080014 104deg, #e9e7ff 132deg, #ff005d 140deg, #09105e 154deg, #050015 218deg, #ffffff 254deg, #2ef4ff 264deg, #030528 286deg, #7a45ff 324deg, #02062f 360deg)",
          animation: "liquid-drift 18s ease-in-out infinite alternate",
          transformOrigin: "center",
        }}
      />
      <div
        className="absolute inset-0 opacity-65"
        style={{
          background:
            "radial-gradient(circle at 50% 40%, transparent 0%, rgba(0,0,0,.08) 28%, rgba(0,0,0,.42) 72%, rgba(0,0,0,.78) 100%)",
        }}
      />
      <style>{`
        @keyframes liquid-drift {
          0% { transform: translate3d(-2%, -1%, 0) rotate(0deg) scale(1.06); filter: hue-rotate(0deg) saturate(1.05); }
          50% { transform: translate3d(1.5%, 2%, 0) rotate(7deg) scale(1.13); filter: hue-rotate(18deg) saturate(1.25); }
          100% { transform: translate3d(3%, -1%, 0) rotate(-5deg) scale(1.1); filter: hue-rotate(-12deg) saturate(1.18); }
        }
      `}</style>
    </div>
  )
}
