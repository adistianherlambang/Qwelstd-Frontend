"use client"

import React, {useState, useEffect, Children } from 'react'
import styles from "./style.module.css"

export default function ButtonHover( {children} ) {

  const text = String(children).split("")
  const [hover, setHover] = useState(false)
  
  return (
    <div
      onClick={() => window.open("https://api.whatsapp.com/send/?phone=6282179537326&text&type=phone_number&app_absent=0")}
      className={styles.container}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* {text.map((char, index) => <div>{char} + {index}</div>)} */}
      <div className={styles.textWrapper}>
        {text.map((char, index) =>
          <p
            className={styles.text}
            key={index}
            style={{
              display: "inline-block",
              transition: "transform 0.3s ease",
              transitionDelay: `${index*20}ms`,
              transform: hover ? "translateY(-30px)" : "translateY(0)"
            }}
          >
            {char === " " ? "\u00A0" : char}
          </p>
        )}
      </div>
      <div className={styles.textWrapper2}>
        {text.map((char, index) =>
          <p
            className={styles.text}
            key={index}
            style={{
              display: "inline-block",
              transition: "transform 0.3s ease",
              transitionDelay: `${index*20}ms`,
              transform: hover ? "translateY(0px)" : "translateY(30px)"
            }}
          >
            {char === " " ? "\u00A0" : char}
          </p>
        )}
      </div>
      <div className={styles.box} style={{backgroundColor: hover ? "white" : "#EE3E75"}}>
        <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.75 5.25L12.75 5.25M12.75 5.25L8.25 9.75M12.75 5.25L8.25 0.75" stroke={hover ? "black" : "white"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  )
}
