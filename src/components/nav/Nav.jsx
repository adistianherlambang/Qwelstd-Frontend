"use client"

import React, {useState, useRef, useEffect, Children} from 'react'
import styles from "./style.module.css"

import ButtonHover from '../button hover/buttonHover'
import TextScramble from '../scramble/Scramble'

export default function Nav() {
  
  const [open, setOpen] = useState(false)
  const [close, setClose] = useState(false)
  const [render, setRender] = useState(false)

  const timer = 300

  useEffect(() => {
    let t

    if (open) {
      setRender(true)
    } else {
      t = setTimeout(() => {
        setRender(false)
      }, timer)
    }

    return () => clearTimeout(t)
  }, [open])

  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <div className={styles.navButton} onClick={() => setOpen(!open)}>
          <hr className={styles.hamburger}/>
          <hr className={styles.hamburger}/>
          <hr className={styles.hamburger}/>
        </div>
        <ButtonHover>Kontak Kami</ButtonHover>
      </div>
      <NavOpen open={open} setOpen={setOpen} render={render}/>
    </div>
  )
}

export function NavOpen({ open, setOpen, render }) {

  const [visibleItems, setVisibleItems] = useState([])

  const links = [
    { label: "Tentang Kami", href: "#" },
    { label: "Masalah UMKM", href: "#" },
    { label: "Framework Visual", href: "#" },
    { label: "Solusi UMKM", href: "#" },
  ]

  useEffect(() => {
    if (!render) {
      setVisibleItems([])
      return
    }

    const timers = []

    links.forEach((_, index) => {
      const t = setTimeout(() => {
        setVisibleItems(prev => [...prev, index])
      }, index * 200)

      timers.push(t)
    })

    return () => timers.forEach(clearTimeout)
  }, [render])

  useEffect(() => {
    const timer = setTimeout(() => render, 100)
  })

  return (
    <>
    {render && 
      <div className={`${styles.navOpen} ${open ? styles.navOpenAnim : styles.navCloseAnim}`}>
        {links.map((item, index) => {
          if (!visibleItems.includes(index)) return null
          return(
            <div onClick={() => setOpen(false)} className={styles.item}><TextScramble start={open}><a>{item.label}</a><br/></TextScramble></div>
          )
        })}
      </div>
    }
    </>
  )
}