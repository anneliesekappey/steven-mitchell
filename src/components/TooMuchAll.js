import React, { useEffect, useState } from 'react'
import TooMuchWoman from '../images/TooMuchWoman.png'
import { TooMuchDiv } from './Shared'
import { TooMuchTextbox } from './TooMuchTextbox'

export const TooMuchAll = () => {
  const [hover, setHover] = useState(false)
  const onHover = () => {
    setHover(true)
  }

  const onLeave = () => {
    setHover(false)
  }

  useEffect(() => {
    onLeave()
  }, [])

  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      role="textbox"
      tabIndex="-4"
    >
      {hover ? (
        <TooMuchTextbox />
      ) : (
        <TooMuchDiv>
          <img src={TooMuchWoman} alt="Woman" height="300px" />
        </TooMuchDiv>
      )}
    </div>
  )
}
