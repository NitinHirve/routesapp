import {
    Accordion, AccordionDetails, AccordionSummary, Avatar, Box, Button,
    Collapse, createTheme, List, ListItem, ListItemText, Paper, Step, StepContent,
    StepLabel, Stepper, styled, Table, TableBody, TableCell, TableContainer, TableHead,
    TableRow, ThemeProvider, Typography, Stack, useTheme, Grid, Tooltip
} from '@mui/material';
import { ExpandMore, FiberManualRecord, Download, HelpOutline } from '@mui/icons-material';
import React, { useState } from 'react'
import MediaQuery, { useMediaQuery } from "react-responsive";
import { makeStyles } from '@mui/styles';

import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from '@mui/lab';
import CheckIcon from '@mui/icons-material/Check';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Adjust, RadioButtonUnchecked, AccessTime, HighlightOff, WarningAmber } from '@mui/icons-material';
// import { useTheme } from '@mui/styles';
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

    const theme = useTheme();

    const StyledTypographyUserAmount = styled(Typography)({
        fontSize: '15px',
        fontFamily: 'Montserrat',
        fontWeight: '600',
        [theme.breakpoints.up('xs')]: {
            textAlign: 'right',
        },
        [theme.breakpoints.up('sm')]: {
            textAlign: 'left',
        },
    })

    const StyledTypographyFlowMsg = styled(Typography)({
        fontSize: '14px',
        fontFamily: 'Montserrat',
        fontWeight: '600',
        width: '65%',
        [theme.breakpoints.up('xs')]: {
            textAlign: 'right',
        },
        [theme.breakpoints.up('sm')]: {
            textAlign: 'left',
        },
    })


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
                    marginBottom: '15px',
                }}
                expanded={expanded === 'panel3'}
                onChange={handleChange('panel3')}
            >
                <AccordionSummary
                    expandIcon={<ExpandMore sx={{ color: '#e8541e', fontSize: '25px' }} />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                    sx={{ display: 'flex', justifyContent: 'space-between' }}
                >
                    <Stack width="100%" direction="row" sx={{ justifyContent: { xs: 'space-between', sm: 'normal' } }} >
                        <Box sx={{ minWidth: { sm: "35%", xs: 'auto' } }}>
                            <Stack direction="row">
                                <Avatar
                                    alt={user.name}
                                    src={user.flag}
                                    sx={{ width: 20, height: 20, marginTop: '10px', marginRight: '5px' }}
                                />

                                <Box sx={{ marginLeft: { xs: "none", sm: "20px" } }}>
                                    <StyledTypographyUser variant="h5">{user.name}</StyledTypographyUser>
                                    <MediaQuery minWidth={601}>
                                        <StyledTypographyUserSub variant="h6">{user.account_no}</StyledTypographyUserSub>
                                    </MediaQuery>
                                    <MediaQuery maxWidth={600}>
                                        <StyledTypographyUserSub variant="h6" >
                                            {user.status === 'in progress' && <FiberManualRecord sx={{ color: 'orange', fontSize: '10px' }} />}
                                            {user.status === 'rejected' && <FiberManualRecord sx={{ color: 'red', fontSize: '10px' }} />}
                                            {user.status === 'success' && <FiberManualRecord sx={{ color: '#36aa6a', fontSize: '10px' }} />}
                                            {user.topMessage}
                                        </StyledTypographyUserSub>
                                    </MediaQuery>
                                </Box>
                            </Stack>
                        </Box>
                        <Box sx={{ minWidth: { sm: "50%" } }}>

                            <Box sx={{}}>
                                <StyledTypographyUserAmount variant="h5">{user.amount}</StyledTypographyUserAmount>
                                <MediaQuery minWidth={601}>
                                    <StyledTypographyUserSub variant="h6">
                                        {user.status === 'in progress' && <FiberManualRecord sx={{ color: 'orange', fontSize: '10px' }} />}
                                        {user.status === 'rejected' && <FiberManualRecord sx={{ color: 'red', fontSize: '10px' }} />}
                                        {user.status === 'success' && <FiberManualRecord sx={{ color: '#36aa6a', fontSize: '10px' }} />}
                                        {user.topMessage}
                                    </StyledTypographyUserSub>
                                </MediaQuery>
                                <MediaQuery maxWidth={600}>
                                    <StyledTypographyUserSub align="right" variant="h6">{user.account_no}</StyledTypographyUserSub>
                                </MediaQuery>
                            </Box>
                        </Box>
                        <Box sx={{ display: { xs: "none", sm: "block" } }}>
                            {user.status === 'rejected' && <WarningAmber sx={{ marginTop: '10px' }} fontSize="small" />}
                        </Box>
                    </Stack>
                </AccordionSummary>


                <AccordionDetails >
                    <Box sx={{ backgroundColor: '#fff', padding: '7.5px', margin: '0 4px 0 4px' }}>
                        <Box >
                            <Timeline position="right">

                                {user.timeline.map((flow, i) => (
                                    flow.avail ?
                                        (<>
                                            <TimelineItem>
                                                <TimelineOppositeContent display="none" />
                                                <TimelineSeparator sx={{ marginLeft: { sm: 0, xs: '-20px' } }}>
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
                                                            <StyledTypographyFlowMsg sx={{ color: "#333333" }}>{flow.msg}</StyledTypographyFlowMsg>
                                                        </>}
                                                        {flow.status === 'pending' && <>
                                                            <p style={{ width: '35%', color: '#cccccc' }}>{flow.name}</p>
                                                            <StyledTypographyFlowMsg sx={{ color: '#cccccc' }}>{flow.msg}</StyledTypographyFlowMsg>
                                                        </>}
                                                        {flow.status === 'rejected' && <>
                                                            <p style={{ width: '35%', color: "#333333" }}>{flow.name}</p>
                                                            <StyledTypographyFlowMsg sx={{ color: 'red' }}>{flow.msg}</StyledTypographyFlowMsg>
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

                            {(user.status != 'rejected') && <Typography sx={{ cursor: "pointer", fontSize: '13px', margin: { sm: '15px 0 15px 15px', xs: '15px 0 15px -3px' }, fontFamily: 'Montserrat', color: 'red' }} variant="h5">
                                <Download sx={{ marginBottom: '-7px' }} />&nbsp;Download payment confirmation &nbsp;
                                <Tooltip sx={{ backgroundColor: "black" }} title={<div>You can scan your document or take a picture<br></br>
                                    of it on your smartphone</div>} placement="top">
                                    <HelpOutline sx={{ marginBottom: '-7px', color: 'gray' }} />
                                </Tooltip>
                            </Typography>
                            }

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


                    {/* try start */}

                    <Box sx={{ backgroundColor: '#fff', padding: '15px', margin: '0 4px 0 4px' }}>


                        <Grid container spacing={2}>

                            <Grid item sm={4} xs={12}>
                                <Box >
                                    <StyledTypographyTableHead variant="h5">Payment method</StyledTypographyTableHead>
                                    <StyledTypographyTableData variant="h6">{user.paymentDetails.paymentMethod}</StyledTypographyTableData>
                                </Box>
                            </Grid>


                            <Grid item sm={4} xs={12}>
                                <Box >
                                    <StyledTypographyTableHead variant="h5">Customer reference</StyledTypographyTableHead>
                                    <StyledTypographyTableData variant="h6">{user.paymentDetails.customerReference}</StyledTypographyTableData>
                                </Box>
                            </Grid>

                            <Grid item sm={4} xs={12}>
                                <Box >
                                    <StyledTypographyTableHead variant="h5">Payment reference</StyledTypographyTableHead>
                                    <StyledTypographyTableData variant="h6">{user.paymentDetails.paymentReference}</StyledTypographyTableData>
                                </Box>
                            </Grid>

                            <Grid item sm={4} xs={12}>
                                <Box >
                                    <StyledTypographyTableHead variant="h5">Country</StyledTypographyTableHead>
                                    <StyledTypographyTableData variant="h6">{user.paymentDetails.country}</StyledTypographyTableData>
                                </Box>
                            </Grid>

                            <Grid item sm={4} xs={12}>
                                <Box >
                                    <StyledTypographyTableHead variant="h5">Account number</StyledTypographyTableHead>
                                    <StyledTypographyTableData variant="h6">{user.paymentDetails.accountNumber}</StyledTypographyTableData>
                                </Box>
                            </Grid>

                            <Grid item sm={4} xs={12}>
                                <Box >
                                    <StyledTypographyTableHead variant="h5">Sort code</StyledTypographyTableHead>
                                    <StyledTypographyTableData variant="h6">{user.paymentDetails.sortCode}</StyledTypographyTableData>
                                </Box>
                            </Grid>

                        </Grid>

                    </Box>

                    {/* try end */}

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