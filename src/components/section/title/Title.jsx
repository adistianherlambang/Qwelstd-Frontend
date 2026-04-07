"use client"
import React, { useState, useEffect, useRef } from "react"
import styles from "./style.module.css"

export default function Title({ children }) {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect() // hentikan observasi setelah terlihat
        }
      },
      { threshold: 0.1 } // trigger ketika 10% terlihat
    )

    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={styles.container}
    >
      <div className={styles.wrapper}>{visible ? children : null}</div>
    </div>
  )
}