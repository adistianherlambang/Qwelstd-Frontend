import React, { Children } from 'react'

export default function ButtonHover( {children} ) {

  const text = String(children).split("")
  
  return (
    <div>{text.map((char, index) => <div>{char} + {index}</div>)}</div>
  )
}
