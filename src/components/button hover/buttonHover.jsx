"use client"

import React, {useState, useEffect, Children } from 'react'
import styles from "./style.module.css"

export default function ButtonHover( {children} ) {

  const text = String(children).split("")
  
  return (
    <div className={styles.container}>
      {/* {text.map((char, index) => <div>{char} + {index}</div>)} */}
      <div className={styles.textWrapper}>
        {text.map((char, index) =>
          <p
            className={styles.text}
            key={index}
          >
            {char === " " ? "\u00A0" : char}
          </p>
        )}
      </div>
      <div className={styles.box}></div>
    </div>
  )
}
