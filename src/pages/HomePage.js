import React from 'react'
import { GraceAll } from '../components/GraceAll'
import { TinaAll } from '../components/TinaAll'
import { PennyAll } from '../components/PennyAll'
import imgLogo from '../images/Sign.png'
import { SignDiv } from '../components/Shared'
import { TooMuchAll } from '../components/TooMuchAll'

export const HomePage = () => {
  return (
    <div>
      <div>
        <TinaAll />
      </div>
      <div>
        <GraceAll />
      </div>
      <div>
        <SignDiv />
        <img src={imgLogo} alt="Queen Vee Club" height="400px" />
      </div>
      <div>
        <PennyAll />
      </div>
      <div>
        <TooMuchAll />
      </div>
    </div>
  )
}
