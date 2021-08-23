/*
Watch this short video:
https://tk-assets.lambdaschool.com/0aebd463-7c5e-4d0b-ad22-4da8f4b54e92_squares.gif


*/

import React, { useState } from 'react'
const listOfSquareIds = ['sqA', 'sqB', 'sqC', 'sqD']

export default function Squares() {
  const [activeSquare, setActiveSquare] = useState(null)
  const [squares, setSquares] = useState(listOfSquareIds)

  const getClassName = (id) => {
    if (id == activeSquare) {
      return 'active'
    } else {
      return ''
    }
  }

  const markActive = (id) => {
    if (id == activeSquare) {
      setActiveSquare(null)
    } else {
      setActiveSquare(id)
    }
    getClassName(id)
  }

  return (
    <div className='widget-squares container'>
      <h2>Squares</h2>
      <div className='squares'>
        {listOfSquareIds.map((id) => (
          <div
            id={id}
            key={id}
            className={`square ${getClassName(id)}`}
            onClick={() => markActive(id)}
          ></div>
        ))}
      </div>
    </div>
  )
}
