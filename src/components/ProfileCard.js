import React from 'react'

const DatingProfile = ({
  name,
  emotionalAge,
  claimToFame,
  bestPartAboutMe,
  worstPartAboutMe,
}) => {
  return (
    <li>
      Name: <strong>{`${name}`}</strong>
      Emotional Age: <strong>{`More or less ${emotionalAge}`}</strong>
      Claim to Fame: <strong>{`I'm best known for... ${claimToFame}`}</strong>
      Best Thing about Me: {`${bestPartAboutMe}`}
      Worst Thing about Me: {`${worstPartAboutMe}`}
    </li>
  )
}

export default DatingProfile
