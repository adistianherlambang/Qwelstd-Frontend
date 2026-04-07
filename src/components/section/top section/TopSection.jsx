"use client"
import React, { useState, useEffect, useRef, Children } from "react"
import styles from "./style.module.css"
import ClientOnly from "@/components/client/ClientOnly"

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*"

// scramble string per karakter
const scrambleString = (text, progress, total) =>
  text.split("").map((c, i) =>
    progress / total > i / text.length ? c : chars[Math.floor(Math.random() * chars.length)]
  )

// recursive render per child
function renderScramble(children, progress, totalFrames) {
  return Children.map(children, child => {
    if (typeof child === "string") {
      return scrambleString(child, progress, totalFrames).map((c, i) => <span key={i}>{c}</span>)
    } else if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        children: renderScramble(child.props.children, progress, totalFrames),
      })
    }
    return null
  })
}

export default function TopSection({ children }) {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(false)
  const containerRef = useRef(null)
  const totalFrames = 40

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (containerRef.current) observer.observe(containerRef.current)
  }, [])

  useEffect(() => {
    if (!visible) return
    let frame = 0
    const animate = () => {
      setProgress(frame)
      frame++
      if (frame <= totalFrames) requestAnimationFrame(animate)
    }
    animate()
  }, [visible])

  return (
    <div className={styles.container} ref={containerRef}>
      <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="3" cy="3" r="3" fill="#EE3E75" />
      </svg>
      <div className={styles.text}>
        {renderScramble(children, progress, totalFrames)}
      </div>
    </div>
  )
}