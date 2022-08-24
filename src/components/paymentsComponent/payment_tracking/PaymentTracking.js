import { AddIcCallOutlined } from '@mui/icons-material'
import { Box, Fab, styled, Tooltip, Typography } from '@mui/material'
import React from 'react'
import Transactions from './Transactions'
import HelpIcon from '@mui/icons-material/Help';

import { users } from './Users'
import './GlobalCssSlider.css'


const StyledBox = styled(Box)({

  backgroundColor: '#fff',
  padding: '15px 7.5px 0px 7.5px',
  border: '1px solid #e9e9e9',
  borderRadius: '4px',

})

const StyledTypographyHead = styled(Typography)({

  fontFamily: 'Montserrat',
  fontWeight: '600',
  fontSize: '16px',
  color: '#121212'
})

const StyledTooltipMain = styled(Tooltip)({
  color: '#939393',
  fontSize: '24px',
  position: "absolute",
  top: 30,
  right: 15
})




const PaymentTracking = () => {
  
  return (
    <>

      <StyledBox sx={{ position: 'relative'}}>

        <Box sx={{ padding: '7.5px' }}>
          <StyledTypographyHead variant="h6">Payment tracking</StyledTypographyHead>
          <p className='payments_subhead'>Check the status of payments to your recipients - simply click a payment to see more detail.</p>
        </Box>

        <StyledTooltipMain
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
        >
          <HelpIcon />
        </StyledTooltipMain>


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


export default PaymentTracking