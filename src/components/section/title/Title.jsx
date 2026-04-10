"use client"
import React, { useState, useEffect, useRef } from "react"
import styles from "./style.module.css"
import ScrollTrigger from "gsap/ScrollTrigger"
import gsap from "gsap"

gsap.registerPlugin(ScrollTrigger)

export default function Title({ children }) {

  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return

    const el = ref.current.querySelector(`.${styles.wrapper}`)

    gsap.fromTo(
      el,
      { y: 150 },
      {
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",   // saat masuk viewport
          toggleActions: "play none none none",
        }
      }
    )
  }, [])

  return (
    <div
      ref={ref}
      className={styles.container}
    >
      <div className={`${styles.wrapper}`}>{children}</div>
    </div>
  )
}