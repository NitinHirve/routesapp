import React from 'react'
import {Link} from 'react-router-dom';

const Profile = ({logout}) => {
  return (
    <>
      <Link to="/dashboard" >Dashboard</Link>
      <h1>Hi you are logged in</h1>
      <button onClick={logout}>Logout</button>
    </>
  )
}

export default Profile