import { Box, Grid, Stack, styled, Typography } from '@mui/material'
import React from 'react'

// import a from '../../Images/icon-make-a-transfer.svg'

const StyledBox = styled(Box)({
    backgroundColor: '#fff',
    padding: { sm: '15px', xs: '30px' },
    border: '1px solid #e9e9e9',
    borderRadius: '4px',
    '&:hover': { border: '1px solid #f64200' }
})

const StyledTypographyHead = styled(Typography)({

    fontFamily: 'Montserrat',
    fontWeight: '600',
    fontSize: '16px',
    color: '#121212'
})

const details = [
    {
        title: 'Make a transferrr',
        subTitle: 'Send money to one of your recipients right now',
        svg: '<svg width="69" height="38" viewBox="0 0 69 38" xmlns="http://www.w3.org/2000/svg"><title>E27F400B-F812-40AE-B51B-38BFD98DAAEA</title><g transform="translate(2 2)" stroke-width="4" fill="none" fill-rule="evenodd"><circle stroke="#E9E9E9" cx="32" cy="17" r="17" /><g stroke-linecap="round" stroke="#F64200"><path stroke-linejoin="round" d="M16.773 6L27 16.527l-10.348 10.65" /><path d="M25 16.5H0" /></g><g stroke-linecap="round" stroke="#F64200"><path stroke-linejoin="round" d="M54.773 6L65 16.527l-10.348 10.65" /><path d="M63 16.5H38" /></g></g></svg>',
        logoWidth: '70px'

    },
    {
        title: 'Top-Up Balance',
        subTitle: 'Add currency to your wallet for use at a later date',
        svg: '<svg width="53" height="38" viewBox="0 0 53 38" xmlns="http://www.w3.org/2000/svg"><title>A8CBEA6F-81E1-4B40-AB4E-049DFCA9C934</title><g transform="translate(2 2)" stroke-width="4" fill="none" fill-rule="evenodd"><circle stroke="#E9E9E9" cx="32" cy="17" r="17" /><g stroke-linecap="round" stroke="#F64200"><path stroke-linejoin="round" d="M16.773 6L27 16.527l-10.348 10.65" /><path d="M25 16.5H0" /></g></g></svg>',
        logoWidth: '55px'
    }
]

function createMarkup(str) { return { __html: str }; };

const TransferAndTopUp = () => {
    return (
        <>
            <Box>
                <Grid container spacing={2}>
                    {
                        details.map((detail, i) => (
                            <Grid item sm={6} xs={12}>
                                <StyledBox sx={{ padding: { sm: '15px', xs: '28px 15px' } }}>
                                    <Stack spacing={2} direction="row" sx={{ alignItems: 'center' }}>
                                        <Box sx={{ width: detail.logoWidth }} dangerouslySetInnerHTML={createMarkup(detail.svg)}></Box>
                                        <Box sx={{ padding: '7.5px' }}>
                                            <StyledTypographyHead variant="h6">{detail.title}</StyledTypographyHead>
                                            <Typography variant="p" className='payments_subhead' sx={{ width: '100%', display: { sm: 'block', xs: 'none' } }} >{detail.subTitle}</Typography>
                                        </Box>
                                    </Stack>
                                </StyledBox>
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </>
    )
}

export default TransferAndTopUp