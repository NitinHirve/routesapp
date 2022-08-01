import React from 'react'

const Profile = ({ userDetails, logout }) => {
  return (
    <>
      {
        userDetails.given_name ? <h1 style={{margin:"50px 0 50px 0"}}>Hi {userDetails.given_name} you are logged in</h1> : <h1 style={{margin:"50px 0 50px 0"}}>Hi you are logged in</h1>
      }
    </>
  )
}

export default Profile