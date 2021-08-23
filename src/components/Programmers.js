/*


Watch this short video:
https://tk-assets.lambdaschool.com/1ea6e6a2-2ef1-45de-bcab-b99a8f775870_programmers.gif


*/

import React, { useState } from 'react'

// Use this variable ONLY to initialize a slice of state!
// There is something in the JSX right now breaking this rule...
export const listOfAwesome = [
  { id: '1', name: 'Ada Lovelace' },
  { id: '2', name: 'Grace Hopper' },
  { id: '3', name: 'Evelyn Boyd Granville' },
  { id: '4', name: 'Mary Kenneth Keller' },
  { id: '5', name: 'Frances Allen' },
  { id: '6', name: 'Carol Shaw' },
]

export default function Programmers() {
  const [dev, setDevs] = useState(listOfAwesome)
  const [featuredDev, setFeaturedDev] = useState(null)

  const getNameOfFeatured = () => {
    if (featuredDev === null) {
      return null
    } else {
      const position = featuredDev - 1
      return dev[position]['name']
    }
  }

  const style = {
    fontSize: '1.5em',
    marginTop: '0.5em',
    color: featuredDev !== null ? 'gold' : 'royalblue',
  }

  return (
    <div className='widget-programmers container'>
      <h2>Programmers</h2>
      <div className='programmers'>
        {listOfAwesome.map((dev) => (
          <div className='programmer' key={dev.id}>
            {dev.name}{' '}
            <button
              onClick={() => {
                setFeaturedDev(dev.id)
              }}
            >
              Feature
            </button>
          </div>
        ))}
      </div>
      <div id='featured' style={style}>
        {featuredDev !== null
          ? `🎉 Let's celebrate ${getNameOfFeatured()}! 🥳`
          : 'Pick an awesome programmer'}
      </div>
    </div>
  )
}
