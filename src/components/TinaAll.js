import React, { useEffect, useState } from 'react'
import Tina from '../images/Tina.png'
import { TinaDiv } from './Shared'
import { TinaTextbox } from './TinaTextbox'

export const TinaAll = () => {
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
        <TinaTextbox />
      ) : (
        <TinaDiv>
          <img src={Tina} alt="Tina" height="300px" />
        </TinaDiv>
      )}
    </div>
  )
}
