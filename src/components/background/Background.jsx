import React from 'react'

export default function Background() {
  return (
    <div style={{
      position: "relative"
    }}>
      <div style={{
        position: "absolute",
        zIndex: "-4",
        top: 0,
        right: 0
      }}>
        <img src='./bg.svg'/>
      </div>
    </div>
  )
}
