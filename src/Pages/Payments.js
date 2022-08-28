
import { Box, Stack, styled } from '@mui/material';
import PaymentTracking from '../components/paymentsComponent/payment_tracking/PaymentTracking';
import YourRecipients from '../components/paymentsComponent/your_recipients/YourRecipients';
import YourWallets from '../components/paymentsComponent/your_wallets/YourWallets';
import ExchangeRate from '../components/paymentsComponent/exchange_rate/ExchangeRate';
import LeftArrowBox from '../components/paymentsComponent/LeftArrowBox';
import TransferAndTopUp from '../components/paymentsComponent/TransferAndTopUp';




const Payments = () => {

  return (
    <>
      <Stack spacing={3} direction="column" disablePadding sx={{ width: { xs: '98%', sm: '85%', md: '70%' }, marginTop: '20px' }}>
        <ExchangeRate />
        <LeftArrowBox title={'Create new rate alert'} />
        <LeftArrowBox title={'Our bank details'} />
        <TransferAndTopUp />
        <PaymentTracking />
        <YourRecipients />
        <YourWallets />
      </Stack>
    </>
  )
}


export default Payments
