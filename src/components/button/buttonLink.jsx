"use client"

import React from 'react'

export default function ButtonLink({children, target}) {
  return (
    <div onClick={() => window.open(`${target}`, "_blank")}>
      {children}
    </div>
  )
}
