"use client"

import { useEffect, useState } from "react"

interface Butterfly {
  id: number
  x: number
  y: number
  delay: number
  duration: number
  size: number
}

export function FlyingButterflies() {
  const [butterflies, setButterflies] = useState<Butterfly[]>([])

  useEffect(() => {
    // Create 8 butterflies with random positions and animations
    const newButterflies: Butterfly[] = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 15 + Math.random() * 10,
      size: 30 + Math.random() * 20,
    }))
    setButterflies(newButterflies)
  }, [])

  return (
    <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
      {butterflies.map((butterfly) => (
        <div
          key={butterfly.id}
          className="absolute animate-fly"
          style={{
            left: `${butterfly.x}%`,
            top: `${butterfly.y}%`,
            animationDelay: `${butterfly.delay}s`,
            animationDuration: `${butterfly.duration}s`,
          }}
        >
          <svg width={butterfly.size} height={butterfly.size} viewBox="0 0 100 100" className="opacity-30">
            <g transform="translate(50,50)">
              {/* Left wing */}
              <ellipse cx="-20" cy="0" rx="25" ry="35" fill="rgb(138, 43, 226)" className="animate-wing" />
              {/* Right wing */}
              <ellipse
                cx="20"
                cy="0"
                rx="25"
                ry="35"
                fill="rgb(147, 51, 234)"
                className="animate-wing"
                style={{ animationDelay: "0.1s" }}
              />
              {/* Body */}
              <ellipse cx="0" cy="0" rx="4" ry="30" fill="rgb(100, 80, 120)" />
              {/* Head */}
              <circle cx="0" cy="-25" r="6" fill="rgb(100, 80, 120)" />
              {/* Antennas */}
              <path d="M 0,-25 Q -5,-35 -8,-40" stroke="rgb(100, 80, 120)" strokeWidth="1.5" fill="none" />
              <path d="M 0,-25 Q 5,-35 8,-40" stroke="rgb(100, 80, 120)" strokeWidth="1.5" fill="none" />
            </g>
          </svg>
        </div>
      ))}
    </div>
  )
}
