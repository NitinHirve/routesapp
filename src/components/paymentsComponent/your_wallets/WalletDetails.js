import { ExpandMore } from '@mui/icons-material';
import { Accordion, useTheme, AccordionDetails, AccordionSummary, Avatar, Box, Button, Grid, Stack, styled, Typography } from '@mui/material';
import React, { useState } from 'react'
import { Delete, Add, CallMade, AccountBalance } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';


const StyledTypographyUserAmount = styled(Typography)({
    fontSize: '16px',
    fontFamily: 'Montserrat',
    fontWeight: '500',
})

const StyledWalletBox = styled(Box)({
    padding: '7.5px',
    display: 'flex',
    flexWrap: 'wrap',
    columnGap: '10px',
    rowGap: '10px',
    textTransform: 'none',
})

const StyledAccordion = styled(Accordion)({
    margin: 0,
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
    border: 'none',
    borderRadius: '4px',
    marginBottom: '5px',
})



const buttonStyle = {
    padding: '10px',
    width: { sm: '150px', xs: '100%' },
    textTransform: 'none',
    "&.MuiButton-outlined": {
        borderColor: '#e9e9e9',
        color: '#3e3e3e',
        backgroundColor: '#fff',
        fontSize: '15px'
    },
    '&:hover': {
        bgcolor: '#f7261b',
        color: 'white!important',
        "& .Icon": {
            color: "white"
        }
    },
}

const WalletDetails = ({ wallet }) => {

    const [expanded, setExpanded] = useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const theme = useTheme();


    return (
        <>
            <StyledAccordion
                elevation={0}
                expanded={expanded === 'panel3'}
                onChange={handleChange('panel3')}
            >
                <AccordionSummary
                    expandIcon={<ExpandMore sx={{ color: '#e8541e', fontSize: '25px' }} />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                    sx={{ display: 'flex', justifyContent: 'space-between' }}
                >
                    <Stack width="100%" direction="row"  >
                        <Avatar
                            alt='nitin'
                            src={wallet.flag}
                            sx={{ width: 20, height: 20, marginRight: '5px' }}
                        />
                        <StyledTypographyUserAmount variant="h5">
                        {wallet.balance}&nbsp; {wallet.currency}{wallet.payment_due && <span className='wallet_subhead'>&nbsp;(Payment due {wallet.payment_due})</span>}
                        </StyledTypographyUserAmount>

                    </Stack>
                </AccordionSummary>
                <AccordionDetails >

                    <StyledWalletBox >
                        <Button variant="outlined"
                            sx={buttonStyle}
                            startIcon={<Add className="Icon" sx={{ color: '#f7261b' }} />}>
                            Add {wallet.currency}
                        </Button>

                        <Button variant="outlined"
                            sx={buttonStyle}
                            startIcon={<CallMade className="Icon" sx={{ color: '#f7261b' }} />}>
                            Send {wallet.currency}
                        </Button>
                        <Button variant="outlined"
                            sx={{ ...buttonStyle, width: { sm: '200px', xs: '100%' }, }}
                            startIcon={<AccountBalance className="Icon" sx={{ color: '#f7261b' }} />}>
                            Bank details
                        </Button>

                    </StyledWalletBox>

                </AccordionDetails>

            </StyledAccordion>

        </>
    )
}

export default WalletDetails