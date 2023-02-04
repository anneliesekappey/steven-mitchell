import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ProfileCard from '../components/ProfileCard.js'

export const ProfileDetails = () => {
  const [profile, setProfile] = useState({})
  const { _id } = useParams()

  useEffect(() => {
    const getProfileDetails = async () => {
      const result = await axios.get(
        `https://shy-gray-donkey-slip.cyclic.app/datingprofile/${_id}`
      )
      const data = result.data
      setProfile(data)
    }
    getProfileDetails(_id)
  }, [_id])

  return (
    <div>
      <h2>
        <ProfileCard {...profile} />
      </h2>
    </div>
  )
}
