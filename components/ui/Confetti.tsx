"use client"
import React from 'react'

export default function Confetti({ count = 8 }: { count?: number }) {
  // A tiny, dependency-free confetti made from emoji and Tailwind animations.
  // Positions and animation classes are deterministic for simplicity.
  const positions = [8, 20, 35, 50, 65, 80, 90, 30];
  const delays = [0, 100, 200, 50, 150, 250, 75, 175];
  const emojis = ['🎉', '✨', '🥳', '💫', '🎊', '🌟', '🎈', '⭐'];

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: Math.max(0, Math.min(count, positions.length)) }).map((_, i) => (
        <span
          key={i}
          style={{
            left: `${positions[i]}%`,
            bottom: `-10%`,
            animationDelay: `${delays[i]}ms`,
          }}
          className={`absolute text-2xl md:text-3xl lg:text-4xl transform-gpu animate-[confetti_900ms_cubic-bezier(.17,.67,.17,1)_1_forwards]`}
        >
          {emojis[i % emojis.length]}
        </span>
      ))}

      <style jsx>{`
        @keyframes confetti {
          0% { transform: translateY(0) rotate(0deg); opacity: 1 }
          60% { opacity: 1 }
          100% { transform: translateY(-220%) rotate(360deg); opacity: 0 }
        }
      `}</style>
    </div>
  )
}
