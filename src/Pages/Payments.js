
import { Box, Stack } from '@mui/material';
import PaymentTracking from '../components/paymentsComponent/payment_tracking/PaymentTracking';
import YourRecipients from '../components/paymentsComponent/your_recipients/YourRecipients';
import YourWallets from '../components/paymentsComponent/your_wallets/YourWallets';


const Payments = () => {

  return (
    <>
      <Stack spacing={3} direction="column" disablePadding sx={{  width: {xs:'98%',sm:'85%',md:'70%'},marginTop:'20px'}}>
        <PaymentTracking />
        <YourRecipients />
        <YourWallets />
      </Stack>
    </>
  )
}


export default Payments