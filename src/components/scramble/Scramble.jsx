"use client"

import React, { Children, useEffect, useState, useRef } from "react"

const chars =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*"

// scramble per string (FIXED)
const scrambleString = (text, progress, total) => {
  // jika selesai → return teks asli
  if (progress >= total) return text.split("")

  return text.split("").map((c, i) => {
    const threshold = (i / text.length) * total

    if (progress > threshold) {
      return c
    }

    return chars[Math.floor(Math.random() * chars.length)]
  })
}

// recursive render (preserve tag)
function renderScramble(children, progress, totalFrames) {
  return Children.map(children, child => {
    if (typeof child === "string") {
      return scrambleString(child, progress, totalFrames).map((c, i) => (
        <span key={i}>{c}</span>
      ))
    }

    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        children: renderScramble(
          child.props.children,
          progress,
          totalFrames
        ),
      })
    }

    return null
  })
}

export default function TextScramble({
  children,
  start = false,
  totalFrames = 10,
}) {
  const [progress, setProgress] = useState(0)

  const frameRef = useRef(0)
  const rafRef = useRef(null)

  useEffect(() => {
    if (!start) return

    // reset
    frameRef.current = 0
    setProgress(0)

    const animate = () => {
      frameRef.current += 1
      setProgress(frameRef.current)

      if (frameRef.current < totalFrames) {
        rafRef.current = requestAnimationFrame(animate)
      }
    }

    rafRef.current = requestAnimationFrame(animate)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [start, totalFrames])

  return <>{renderScramble(children, progress, totalFrames)}</>
}