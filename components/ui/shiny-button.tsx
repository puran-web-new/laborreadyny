"use client"

import type React from "react"

interface ShinyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
}

export const ShinyButton: React.FC<ShinyButtonProps> = ({ children, className = "", ...props }) => {
  return (
    <button
      {...props}
      className={
        "relative scale-90 overflow-hidden rounded-lg border-2 border-white/30 bg-white/20 px-8 py-4 font-open-sans-custom text-xs uppercase tracking-wide text-white shadow-[0_0_30px_rgba(255,255,255,0.4),inset_0_0_20px_rgba(255,255,255,0.1)] backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_50px_rgba(255,255,255,0.6),inset_0_0_30px_rgba(255,255,255,0.2)] " + className
      }
    >
      <span className="relative z-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">{children}</span>
      <span className="absolute inset-0 z-0 animate-[shimmer_2.8s_ease-in-out_infinite] bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.6)_50%,transparent_100%)]" />
      <style>{`@keyframes shimmer { 0%,35% { transform: translateX(-120%); } 70%,100% { transform: translateX(120%); } }`}</style>
    </button>
  )
}
