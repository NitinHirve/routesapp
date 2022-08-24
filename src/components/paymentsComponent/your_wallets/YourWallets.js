import React, { useState } from 'react'
import { Box, Fab, styled, TableCell, TableRow, Typography, tableCellClasses, TableHead, Table, TableContainer, Paper, TableBody, Avatar, Tooltip } from '@mui/material'
import HelpIcon from '@mui/icons-material/Help';
import WalletDetails from './WalletDetails';
import '../payment_tracking/GlobalCssSlider.css';


const StyledBox = styled(Box)({
    backgroundColor: '#fff',
    padding: '15px 7.5px 15px 7.5px',
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


const wallets = [
    {
        flag: 'http://ec2-34-249-94-64.eu-west-1.compute.amazonaws.com/images/flags/eu.svg',
        balance: '12,312.43',
        currency:'EUR',
        payment_due: '10,300.03 EUR',
       
    },
    {
        flag: 'http://ec2-34-249-94-64.eu-west-1.compute.amazonaws.com/images/flags/au.svg',
        balance: '42,300',
        currency:'AUD',
        payment_due: null
    },
    {
        flag: 'http://ec2-34-249-94-64.eu-west-1.compute.amazonaws.com/images/flags/gb.svg',
        balance: '0.00',
        currency:'GBP',
        payment_due: null
    },
]

const YourWallets = () => {

    return (
        <>
            <StyledBox sx={{ position: 'relative' }}>
                <Box sx={{ padding: '7.5px' }}>
                    <StyledTypographyHead variant="h6">Your wallets</StyledTypographyHead>
                    <p className='payments_subhead'>Use your wallet to hold funds until you need them. Transfer funds from your wallet or move money between wallets in a couple of clicks.</p>
                </Box>

                <StyledTooltipMain
                    title={
                        <div>You can have multiple wallets in multiple<br />
                            currencies and top up your wallets with<br />
                            currency for use at a later date.Within each<br />
                            wallet you can see your total balance and any<br />
                            outstanding payments.
                        </div>
                    }
                    placement="left"
                    arrow
                >
                    <HelpIcon />
                </StyledTooltipMain>
                <Box sx={{ padding: '7.5px 7px 7.5px 7px' }}>
                    {
                        wallets.map((wallet, i) => (
                            <WalletDetails key={i} wallet={wallet} />
                        ))
                    }
                </Box>
                <Typography className="yourWallets_footer"  align="right" >View activity</Typography>


            </StyledBox>
        </>
    )
}

export default YourWallets