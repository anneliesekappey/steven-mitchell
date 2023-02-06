import React, { useEffect, useState } from 'react'
import Penny from '../images/Penny.png'
import { PennyDiv } from './Shared'
import { PennyTextbox } from './PennyTextbox'

export const PennyAll = () => {
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
        <PennyTextbox />
      ) : (
        <PennyDiv>
          <img src={Penny} alt="Penny" height="300px" />
        </PennyDiv>
      )}
    </div>
  )
}
