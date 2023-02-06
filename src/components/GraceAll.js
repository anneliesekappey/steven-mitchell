import React, { useEffect, useState } from 'react'
import Grace from '../images/Grace.png'
import { GraceDiv } from './Shared'
import { GraceTextbox } from './GraceTextbox'

export const GraceAll = () => {
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
        <GraceTextbox />
      ) : (
        <GraceDiv>
          <img src={Grace} alt="Grace" height="300px" />
        </GraceDiv>
      )}
    </div>
  )
}
