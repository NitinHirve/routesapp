import React from 'react'
import { Typography, styled } from '@mui/material'

const StyledTypography = styled(Typography)({
  margin: "50px 0 50px 0",
})

const Profile = ({ userDetails, logout }) => {
  return (
    <>
      {
        userDetails.given_name ?
          (<StyledTypography
            variant="h4" >Hi {userDetails.given_name} you are logged in
          </StyledTypography>) :
          (<StyledTypography
            variant="h4" >
            Hi you are logged in
          </StyledTypography>)
      }
    </>
  )
}

export default Profile