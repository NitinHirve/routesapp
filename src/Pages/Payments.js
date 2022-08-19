import { AddIcCallOutlined } from '@mui/icons-material'
import { Box, Fab, styled, Tooltip, Typography } from '@mui/material'
import React from 'react'
import Transactions from '../components/payment_tracking/Transactions'
import HelpIcon from '@mui/icons-material/Help';

import { users } from '../components/payment_tracking/Users'



const StyledBox = styled(Box)({
  maxWidth: '755.5px',
  backgroundColor: '#fff',
  padding: '15px 7.5px 0px 7.5px',
  marginTop: '20px',
  border: '1px solid #e9e9e9',
  borderRadius: '4px'

})




const Payments = () => {
  return (
    <>
      {/* <Typography mt={3} variant="h5">Payment Tracking</Typography> */}

      <StyledBox sx={{ position: 'relative' }}>

        <Box sx={{ padding: '7.5px' }}>
          <Typography sx={{ fontFamily: 'Montserrat', fontWeight: '600', fontSize: '16px', color: '#121212' }} variant="h6">Payment tracking</Typography>
          <p style={{ width: '85%', fontFamily: 'Montserrat', fontSize: '14px', color: '#626262' }}>Check the status of payments to your recipients - simply click a payment to see more detail.</p>
        </Box>

        <Tooltip
          title={
            <div>Payment tracking statuses<br /><br />
              Instruction: Payment created<br />
              Fx Deal: We've received your funds<br />
              Initiated: Payment sent by our banking system<br />
              Accepted: Payment accepted by bank<br />
              Completed: Payment sent to your recipient<br />
            </div>
          }
          placement="left"
          arrow
          sx={{ color: '#939393', fontSize: '24px', position: "absolute", top: 30, right: 15 }}>
          <HelpIcon />
        </Tooltip>


        <Box sx={{ padding: '7.5px 7px 7.5px 7px' }}>

          {
            users.map((user, i) => (
              <Transactions key={i} user={user} />
            ))
          }

        </Box>



      </StyledBox>
    </>

  )
}


export default Payments