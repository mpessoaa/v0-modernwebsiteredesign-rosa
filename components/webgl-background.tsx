"use client"

import { useEffect, useRef } from "react"

export function WebGLBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
    if (!gl) {
      console.warn("WebGL not supported")
      return
    }

    let startTime: number
    let animationId: number

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      gl.viewport(0, 0, canvas.width, canvas.height)
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Vertex shader
    const vertexShaderSource = `
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `

    // Fragment shader with purple/lilac gradient
    const fragmentShaderSource = `
      precision mediump float;
      uniform float time;
      uniform vec2 resolution;

      void main() {
        vec2 uv = gl_FragCoord.xy / resolution;
        
        // Purple/lilac colors
        vec3 color1 = vec3(0.72, 0.58, 0.96); // #B794F4 - lilac
        vec3 color2 = vec3(0.54, 0.27, 0.89); // #8A2BE2 - purple
        vec3 color3 = vec3(0.58, 0.32, 0.92); // #9353EA - violet
        
        // Animated gradient
        float t = time * 0.3;
        float wave1 = sin(uv.x * 3.0 + t) * 0.5 + 0.5;
        float wave2 = cos(uv.y * 3.0 - t) * 0.5 + 0.5;
        float pattern = wave1 * wave2;
        
        vec3 color = mix(color1, color2, pattern);
        color = mix(color, color3, sin(t + uv.x * 2.0) * 0.5 + 0.5);
        
        // Add some noise/grain
        float noise = fract(sin(dot(uv, vec2(12.9898, 78.233))) * 43758.5453);
        color += noise * 0.02;
        
        // Fade edges
        float vignette = smoothstep(1.0, 0.3, length(uv - 0.5));
        color *= vignette * 0.4 + 0.1;
        
        gl_FragColor = vec4(color, 0.3);
      }
    `

    // Compile shader
    function createShader(type: number, source: string) {
      const shader = gl.createShader(type)
      if (!shader) return null
      gl.shaderSource(shader, source)
      gl.compileShader(shader)
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error("Shader compile error:", gl.getShaderInfoLog(shader))
        gl.deleteShader(shader)
        return null
      }
      return shader
    }

    const vertexShader = createShader(gl.VERTEX_SHADER, vertexShaderSource)
    const fragmentShader = createShader(gl.FRAGMENT_SHADER, fragmentShaderSource)

    if (!vertexShader || !fragmentShader) return

    // Create program
    const program = gl.createProgram()
    if (!program) return

    gl.attachShader(program, vertexShader)
    gl.attachShader(program, fragmentShader)
    gl.linkProgram(program)

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Program link error:", gl.getProgramInfoLog(program))
      return
    }

    // Create buffer
    const positionBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
    const positions = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1])
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW)

    const positionLocation = gl.getAttribLocation(program, "position")
    gl.enableVertexAttribArray(positionLocation)
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0)

    // Get uniform locations
    const timeLocation = gl.getUniformLocation(program, "time")
    const resolutionLocation = gl.getUniformLocation(program, "resolution")

    // Animation loop
    startTime = Date.now()

    function render() {
      const time = (Date.now() - startTime) / 1000

      // biome-ignore lint/correctness/useHookAtTopLevel: This is WebGL API, not a React hook
      gl.useProgram(program)

      gl.uniform1f(timeLocation, time)
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height)

      gl.clearColor(0, 0, 0, 0)
      gl.clear(gl.COLOR_BUFFER_BIT)
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)

      animationId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div id="webgl" className="fixed top-0 left-0 w-full h-screen pointer-events-none z-0">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  )
}
