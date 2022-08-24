import React from 'react'
import { Box, Fab, styled, TableCell, TableRow, Typography, tableCellClasses, TableHead, Table, TableContainer, Paper, TableBody, Avatar } from '@mui/material'
import '../payment_tracking/GlobalCssSlider.css';
import { Stack } from '@mui/system';
import MediaQuery from "react-responsive";


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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 16,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,

    },
    // hide  border
    '& td, & th': {
        border: 0,
    },
}));

const recipients = [
    { name: 'Captain America', flag: "http://ec2-34-249-94-64.eu-west-1.compute.amazonaws.com/images/flags/us.svg", currency: 'USD', account_no: '****9101' },
    { name: 'Harry Potter', flag: "http://ec2-34-249-94-64.eu-west-1.compute.amazonaws.com/images/flags/gb.svg", currency: 'GBP', account_no: '****5678' },
    { name: 'Captain America', flag: "http://ec2-34-249-94-64.eu-west-1.compute.amazonaws.com/images/flags/us.svg", currency: 'USD', account_no: '****1234' },
]

const YourRecipients = () => {
    return (
        <>
            <StyledBox >
                <Box sx={{ padding: '7.5px' }}>
                    <StyledTypographyHead variant="h6">Your recipients</StyledTypographyHead>
                    <p className='payments_subhead' style={{width: '100%'}}>Make a transfer to an existing recipient or add a new one.</p>
                </Box>
                <Box sx={{ padding: '7.5px 7px 7.5px 7px', color: '#121212' }}>
                    <MediaQuery minWidth={601}>
                        <TableContainer >
                            <Table aria-label="customized table" sx={{
                                "& .MuiTableRow-root:hover": {
                                    backgroundColor: "#eae8e8",
                                    borderLeft: '2px solid #f7261b'
                                }
                            }}>
                                <TableBody>
                                    {
                                        recipients.map((recipient, i) => (
                                            <StyledTableRow key={i}  >
                                                <StyledTableCell component="th" scope="row">
                                                    {recipient.name}
                                                </StyledTableCell>
                                                <StyledTableCell align="right">
                                                    <Stack direction="row">
                                                        <Avatar
                                                            alt={recipient.name}
                                                            src={recipient.flag}
                                                            sx={{ width: 18, height: 17, marginRight: '7px' }}
                                                        />
                                                        {recipient.currency}
                                                    </Stack>
                                                </StyledTableCell>
                                                <StyledTableCell align="right">{recipient.account_no}</StyledTableCell>
                                                <StyledTableCell sx={{ color: 'red', cursor: 'pointer' }} align="right">Transfer</StyledTableCell>
                                            </StyledTableRow>
                                        ))
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </MediaQuery>
                    <MediaQuery maxWidth={600}>
                        {
                            recipients.map((recipient, i) => (
                                <Box sx={{ backgroundColor: '#f4f4f4', borderRadius: '4px', marginBottom: '16px', padding: '16px' }}>
                                    <Stack direction="column">
                                        <Typography>{recipient.name}</Typography>
                                        <Typography><Stack direction="row">
                                            <Avatar
                                                alt={recipient.name}
                                                src={recipient.flag}
                                                sx={{ width: 18, height: 17, marginRight: '7px' }}
                                            />
                                            {recipient.currency}
                                        </Stack></Typography>
                                        <Typography>{recipient.account_no}</Typography>
                                        <Typography sx={{ color: 'red', cursor: 'pointer', paddingTop: '5px' }}>Transfer</Typography>
                                    </Stack>
                                </Box>

                            ))
                        }
                    </MediaQuery>
                </Box>
            </StyledBox>
        </>
    )
}

export default YourRecipients