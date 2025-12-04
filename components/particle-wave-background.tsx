"use client"

import { useEffect, useRef } from "react"

export function ParticleWaveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []
    let time = 0

    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    class Particle {
      x: number
      y: number
      z: number
      baseX: number
      baseY: number
      baseZ: number
      size: number

      constructor(x: number, y: number, z: number) {
        this.baseX = x
        this.baseY = y
        this.baseZ = z
        this.x = x
        this.y = y
        this.z = z
        this.size = 1.5
      }

      update() {
        const waveX = Math.sin(time * 0.0004 + this.baseX * 0.002 + this.baseZ * 0.001) * 30
        const waveY = Math.cos(time * 0.0007 + this.baseY * 0.002) * 25
        const waveZ = Math.sin(time * 0.0005 + this.baseX * 0.001) * 60

        this.x = this.baseX + waveX
        this.y = this.baseY + waveY
        this.z = this.baseZ + waveZ
      }

      draw() {
        if (!ctx) return

        const perspective = 800
        const scale = perspective / (perspective + this.z)
        const projectedX = this.x * scale + canvas.width / 2
        const projectedY = this.y * scale + canvas.height / 2
        const projectedSize = this.size * scale

        const opacity = Math.max(0.25, Math.min(0.85, scale))
        const depthFactor = (this.z + 1000) / 2000

        // Lilac to purple gradient based on depth
        const r = Math.floor(183 - depthFactor * 45) // 183 to 138
        const g = Math.floor(148 - depthFactor * 105) // 148 to 43
        const b = Math.floor(244 - depthFactor * 18) // 244 to 226

        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`
        ctx.beginPath()
        ctx.arc(projectedX, projectedY, projectedSize, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const initParticles = () => {
      particles = []
      const gridSize = 22
      const gridWidth = 75
      const gridHeight = 55
      const gridDepth = 45

      for (let x = -gridWidth / 2; x < gridWidth / 2; x++) {
        for (let y = -gridHeight / 2; y < gridHeight / 2; y++) {
          for (let z = -gridDepth / 2; z < gridDepth / 2; z++) {
            particles.push(new Particle(x * gridSize, y * gridSize, z * gridSize))
          }
        }
      }
    }

    const animate = () => {
      time++

      ctx.fillStyle = "rgba(255, 255, 255, 1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and sort particles by depth for proper rendering
      particles.forEach((particle) => particle.update())
      particles.sort((a, b) => b.z - a.z)

      // Draw all particles
      particles.forEach((particle) => particle.draw())

      animationFrameId = requestAnimationFrame(animate)
    }

    setCanvasSize()
    window.addEventListener("resize", setCanvasSize)
    animate()

    return () => {
      window.removeEventListener("resize", setCanvasSize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ background: "#ffffff" }} />
}
