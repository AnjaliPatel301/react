import React, { useContext } from 'react'
import userContext from './userContext'

const Profile = () => {
    const {user} = useContext(userContext)

    if(!user) return <div>login kro bachcha😜</div>
  return (
    <div className='text-center bg-red-600 text-white text-5xl py-4'>
        Welcome..{user.username}
    </div>
  )
}

export default Profile