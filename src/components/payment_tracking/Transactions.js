import { Accordion, AccordionDetails, AccordionSummary, Avatar, Box, Button, Collapse, createTheme, List, ListItem, ListItemText, Paper, Step, StepContent, StepLabel, Stepper, styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, ThemeProvider, Typography } from '@mui/material';
import { ExpandMore, FiberManualRecord } from '@mui/icons-material';
import React, { useState } from 'react'
import { makeStyles } from '@mui/styles';

import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from '@mui/lab';
import CheckIcon from '@mui/icons-material/Check';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Adjust, RadioButtonUnchecked, AccessTime, HighlightOff, WarningAmber } from '@mui/icons-material';
import './GlobalCssSlider.css';


const StyledTypographyUser = styled(Typography)({
    fontSize: '15px',
    fontFamily: 'Montserrat',
    fontWeight: '600'
})

const StyledTypographyUserSub = styled(Typography)({
    fontSize: '13px',
    fontFamily: 'Montserrat',
    color: '#626262'
})

const StyledTypographyTableHead = styled(Typography)({
    fontSize: '13px',
    fontFamily: 'Montserrat',
    color: '#626262'
})

const StyledTypographyTableData = styled(Typography)({
    fontSize: '14px',
    marginTop: '10px',
    fontFamily: 'Montserrat',
    fontWeight: '600'
})


const steps = [
    {
        label: 'Instruction',
        description: `For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.`,
    },
    {
        label: 'Fx Deal',
        description:
            'An ad group contains one or more ads which target a shared set of keywords.',
    },
    {
        label: 'Initiated',
        description: `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`,
    },
    {
        label: 'Accepted',
        description: `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`,
    },
    {
        label: 'Completed',
        description: `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`,
    },
];




const Transactions = ({ user }) => {

    const [expanded, setExpanded] = useState(false);
    const [openInstruction, setInstruction] = useState(false);
    const [openFxDeal, setFxDeal] = useState(false);
    const [openInitiated, setInitiated] = useState(false);
    const [openAccepted, setAccepted] = useState(false);
    const [openRejected, setRejected] = useState(false);
    const [openCompleted, setCompleted] = useState(false);


    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };



    return (
        <>
            <Accordion
                elevation={0}
                sx={{
                    margin: 0,
                    backgroundColor: '#f7f7f7',
                    alignItems: 'center',
                    border: 'none',
                    borderRadius: '4px',
                    marginBottom: '15px'
                }}
                expanded={expanded === 'panel3'}
                onChange={handleChange('panel3')}
            >
                <AccordionSummary
                    expandIcon={<ExpandMore sx={{ color: '#e8541e', fontSize: '25px' }} />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                    sx={{ height: '55px' }}
                >
                    <Avatar
                        alt={user.name}
                        src={user.flag}
                        sx={{ width: 20, height: 20, marginTop: '10px' }}
                    />

                    <Box sx={{ width: '33%', flexShrink: 0, marginLeft: { xs: "none", sm: "20px" } }}>
                        <StyledTypographyUser variant="h5">{user.name}</StyledTypographyUser>
                        <StyledTypographyUserSub variant="h6">{user.account_no}</StyledTypographyUserSub>
                    </Box>
                    <Box sx={{ width: '50%' }}>
                        <StyledTypographyUser variant="h5">{user.amount}</StyledTypographyUser>
                        <StyledTypographyUserSub variant="h6">
                            {user.status === 'in progress' && <FiberManualRecord sx={{ color: 'orange', fontSize: '10px' }} />}
                            {user.status === 'rejected' && <FiberManualRecord sx={{ color: 'red', fontSize: '10px' }} />}
                            {user.status === 'success' && <FiberManualRecord sx={{ color: '#36aa6a', fontSize: '10px' }} />}
                            {user.topMessage}
                        </StyledTypographyUserSub>
                    </Box>
                    <Box>
                        {user.status === 'rejected' && <WarningAmber sx={{ marginTop: '10px' }} fontSize="small" />}
                    </Box>
                </AccordionSummary>


                <AccordionDetails >
                    <Box sx={{ backgroundColor: '#fff', padding: '7.5px', margin: '0 4px 0 4px' }}>
                        <Box  >
                            <Timeline position="right">

                                {user.timeline.map((flow, i) => (
                                    flow.avail ?
                                        (<>
                                            <TimelineItem>
                                                <TimelineOppositeContent display="none" />
                                                <TimelineSeparator>
                                                    {flow.status === 'success' && <CheckCircleIcon sx={{ color: '#36aa6a', fontSize: '21px', marginTop: '5px' }} />}
                                                    {flow.status === 'active' && <Adjust sx={{ color: '#36aa6a', fontSize: '21px', marginTop: '5px' }} />}
                                                    {flow.status === 'rejected' && <HighlightOff sx={{ color: 'red', fontSize: '21px', marginTop: '5px' }} />}
                                                    {flow.status === 'pending' && <RadioButtonUnchecked sx={{ color: '#cccccc', fontSize: '21px', marginTop: '5px' }} />}
                                                    {flow.name === 'Completed' || flow.name === 'Rejected' ? '' : <TimelineConnector sx={{ height: '15px' }} />}
                                                </TimelineSeparator>
                                                <TimelineContent sx={{ fontSize: '14px', color: 'black', fontFamily: 'Montserrat', fontWeight: '600' }}>
                                                    <Box onClick={() => {


                                                        if (flow.name === 'Instruction')
                                                            setInstruction(!openInstruction)
                                                        else if (flow.name === 'FX Deal')
                                                            setFxDeal(!openFxDeal)
                                                        else if (flow.name === 'Initiated')
                                                            setInitiated(!openInitiated)
                                                        else if (flow.name === 'Accepted')
                                                            setAccepted(!openAccepted)
                                                        else if (flow.name === 'Completed')
                                                            setCompleted(!openCompleted)
                                                        else if (flow.name === 'Rejected')
                                                            setRejected(!openRejected)

                                                    }} sx={{ display: 'flex', cursor: 'pointer' }}>
                                                        {(flow.status != 'pending' && flow.status != 'rejected') && <>
                                                            <p style={{ width: '35%', color: "#333333" }}>{flow.name}</p>
                                                            <p style={{ color: "#333333" }}>{flow.msg}</p>
                                                        </>}
                                                        {flow.status === 'pending' && <>
                                                            <p style={{ width: '35%', color: '#cccccc' }}>{flow.name}</p>
                                                            <p style={{ color: '#cccccc' }}>{flow.msg}</p>
                                                        </>}
                                                        {flow.status === 'rejected' && <>
                                                            <p style={{ width: '35%', color: "#333333" }}>{flow.name}</p>
                                                            <p style={{ color: 'red' }}>{flow.msg}</p>
                                                        </>}

                                                    </Box>
                                                    <Box >
                                                        <TableCell style={{ padding: 0 }} colSpan={6}>
                                                            <Collapse style={{ padding: 0 }} in={(
                                                                function () {
                                                                    console.log("IIFE")
                                                                    if (flow.name === 'Instruction')
                                                                        return openInstruction
                                                                    else if (flow.name === 'FX Deal')
                                                                        return openFxDeal
                                                                    else if (flow.name === 'Initiated')
                                                                        return openInitiated
                                                                    else if (flow.name === 'Accepted')
                                                                        return openAccepted
                                                                    else if (flow.name === 'Completed')
                                                                        return openCompleted
                                                                    else if (flow.name === 'Rejected')
                                                                        return openRejected
                                                                }
                                                            )()} timeout="auto" unmountOnExit>
                                                                <Box sx={{ margin: 1 }}>
                                                                    <Table size="small">
                                                                        {flow.dateflow.map((dateWiseUpdate, i) => (
                                                                            <TableRow key={i}>
                                                                                <TableCell
                                                                                    align="left"
                                                                                    sx={{ fontSize: '13px', margin: '15px 0 15px 0', fontFamily: 'Montserrat', color: '#626262' }}
                                                                                ><AccessTime sx={{ fontSize: '15px' }} /> &nbsp; {dateWiseUpdate}</TableCell>
                                                                            </TableRow>
                                                                        ))}
                                                                    </Table>
                                                                </Box>
                                                            </Collapse>
                                                        </TableCell>
                                                    </Box>
                                                </TimelineContent>
                                            </TimelineItem>
                                        </>)
                                        : ''
                                ))

                                }

                            </Timeline>

                        </Box>
                    </Box>
                    <Typography
                        sx={{
                            fontFamily: 'Montserrat',
                            margin: '15px 0 15px 0',
                            fontWeight: '600',
                            fontSize: '15px',
                            color: '#121212'
                        }}
                        variant="h6"
                    >
                        Payment details
                    </Typography>
                    <Box sx={{ backgroundColor: '#fff', padding: '7.5px', margin: '0 4px 0 4px' }}>
                        <TableContainer  >
                            <Table aria-label="simple table">

                                <TableHead>
                                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                        <TableCell>
                                            <Box >
                                                <StyledTypographyTableHead variant="h5">Payment method</StyledTypographyTableHead>
                                                <StyledTypographyTableData variant="h6">{user.paymentDetails.paymentMethod}</StyledTypographyTableData>
                                            </Box>
                                        </TableCell>
                                        <TableCell>
                                            <Box >
                                                <StyledTypographyTableHead variant="h5">Customer reference</StyledTypographyTableHead>
                                                <StyledTypographyTableData variant="h6">{user.paymentDetails.customerReference}</StyledTypographyTableData>
                                            </Box>
                                        </TableCell>
                                        <TableCell>
                                            <Box >
                                                <StyledTypographyTableHead variant="h5">Payment reference</StyledTypographyTableHead>
                                                <StyledTypographyTableData variant="h6">{user.paymentDetails.paymentReference}</StyledTypographyTableData>
                                            </Box>
                                        </TableCell>                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 }, borderTop: 'none' }}>
                                        <TableCell>
                                            <Box >
                                                <StyledTypographyTableHead variant="h5">Country</StyledTypographyTableHead>
                                                <StyledTypographyTableData variant="h6">{user.paymentDetails.country}</StyledTypographyTableData>
                                            </Box>
                                        </TableCell>
                                        <TableCell>
                                            <Box >
                                                <StyledTypographyTableHead variant="h5">Account number</StyledTypographyTableHead>
                                                <StyledTypographyTableData variant="h6">{user.paymentDetails.accountNumber}</StyledTypographyTableData>
                                            </Box>
                                        </TableCell>
                                        <TableCell>
                                            <Box >
                                                <StyledTypographyTableHead variant="h5">Sort code</StyledTypographyTableHead>
                                                <StyledTypographyTableData variant="h6">{user.paymentDetails.sortCode}</StyledTypographyTableData>
                                            </Box>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>

                    <Typography sx={{ fontSize: '13px', margin: '15px 0 15px 0', fontFamily: 'Montserrat', color: '#626262' }} variant="h5">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry &nbsp;
                        <span style={{ color: '#f64200', fontWeight: '500', cursor: 'pointer' }}><strong>Need Help?</strong></span>
                    </Typography>


                </AccordionDetails>
            </Accordion>



        </>
    )
}

export default Transactions