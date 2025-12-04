"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Sphere } from "@react-three/drei"
import type * as THREE from "three"

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.08
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <Sphere ref={meshRef} args={[1.8, 24, 24]}>
      <meshBasicMaterial color="#B794F4" wireframe transparent opacity={0.35} />
    </Sphere>
  )
}

export function WireframeSphere() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} style={{ background: "transparent" }}>
        <ambientLight intensity={0.3} />
        <AnimatedSphere />
      </Canvas>
    </div>
  )
}
