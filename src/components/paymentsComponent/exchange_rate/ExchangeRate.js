import { Autocomplete, Avatar, Box, Button, Chip, Divider, createTheme, Stack, styled, TextField, Typography, ThemeProvider, FormControl, Select, OutlinedInput, MenuItem } from '@mui/material'
import React from 'react'
import { KeyboardArrowDown } from '@mui/icons-material';

const StyledBox = styled(Box)({
    backgroundColor: '#fff',
    padding: '15px 15px 15px 15px',
    border: '1px solid #e9e9e9',
    borderRadius: '4px',

})

const StyledTypographyHead = styled(Typography)({

    fontFamily: 'Montserrat',
    fontWeight: '600',
    fontSize: '16px',
    color: '#121212'
})

const StyledTypographyUser = styled(Typography)({
    fontSize: '26px',
    fontFamily: 'Montserrat',
    fontWeight: '600'
})

const StyledTypographyUserSub = styled(Typography)({
    fontSize: '14px',
    fontFamily: 'Montserrat',
    color: '#626262'
})



const contries = [
    {
        code: 'AUD',
        flag: 'http://ec2-34-249-94-64.eu-west-1.compute.amazonaws.com/images/flags/au.svg'
    },
    {
        code: 'GBP',
        flag: 'http://ec2-34-249-94-64.eu-west-1.compute.amazonaws.com/images/flags/gb.svg'
    },
    {
        code: 'USD',
        flag: 'http://ec2-34-249-94-64.eu-west-1.compute.amazonaws.com/images/flags/us.svg'
    },
    {
        code: 'CAD',
        flag: 'http://ec2-34-249-94-64.eu-west-1.compute.amazonaws.com/images/flags/ca.svg'
    },
    {
        code: 'AED',
        flag: 'http://ec2-34-249-94-64.eu-west-1.compute.amazonaws.com/images/flags/ae.svg'
    },
    {
        code: 'HKD',
        flag: 'http://ec2-34-249-94-64.eu-west-1.compute.amazonaws.com/images/flags/hk.svg'
    },
    {
        code: 'EUR',
        flag: 'http://ec2-34-249-94-64.eu-west-1.compute.amazonaws.com/images/flags/eu.svg'
    },
]


const checkRateStyle = {
    marginLeft: '25px',
    height: '25px',
    '&:hover':
    {
        backgroundColor: '#f96c39',
        boxShadow: 'none'
    },
    borderRadius: '5px',
    backgroundColor: '#f64200',
    color: '#fff'
}





const buttonStyle = {
    padding: '15px',
    width: { sm: '220px', xs: '100%' },
    textTransform: 'none',
    marginTop: '10px',
    "&.MuiButton-outlined": {
        borderColor: '#f7261b',
        color: '#f7261b',
        backgroundColor: '#fff',
        fontSize: '17px'
    },
    '&:hover': {
        bgcolor: '#f7261b',
        color: 'white!important',
        "& .Icon": {
            color: "white"
        }
    },
}


const StyledStack = styled(Stack)({
    border: '1px solid  #e9e9e9',
    borderRadius: '4px',
    height: '52px',
    padding: '7.5px 10px 7.5px 10px',
    marginTop: '10px'
})


const StyledTextField = styled(TextField)({
    backgroundColor: "white",
})


const StyledAvatar = styled(Avatar)({
    width: 20,
    height: 20,
    margin: 0,
    padding: 0,
    marginRight: '12px'
})

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};



const ExchangeRate = () => {


    const [paying, setPaying] = React.useState([]);
    const [receiving, setReceiving] = React.useState([]);

    const handleChangePaying = (event) => {
        const {
            target: { value },
        } = event;
        setPaying(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const handleChangeReceiving = (event) => {
        const {
            target: { value },
        } = event;
        setReceiving(
            typeof value === 'string' ? value.split(',') : value,
        );
    };



    return (
        <>
            <StyledBox >
                <Box sx={{ padding: '7.5px 0 7.5px 0 ' }}>
                    <StyledTypographyHead variant="h6">Check the exchange rate</StyledTypographyHead>
                </Box>

                <StyledStack
                    direction="row"
                    divider={<Divider sx={{ height: '40px', marginTop: '5px' }} orientation="vertical" flexItem />}
                    spacing={2}

                >
                    <Box sx={{ width: { sm: '55%', xs: '50%' } }}>

                        <StyledTextField
                            id="outlined-helperText"
                            label="You pay"
                            type='number'
                            defaultValue="25000.00"
                            variant="standard"
                            InputProps={{ disableUnderline: true, style: { fontSize: '26px', fontWeight: '600', padding: 0 } }}
                            InputLabelProps={{ style: { fontSize: '16px' } }}
                            sx={{ width: '100%', caretColor: '#f64200' }}
                        />

                    </Box>
                    <Box sx={{ width: { sm: '45%', xs: '50%' } }} >


                        <Box sx={{ height: '100%' }}>
                            <FormControl sx={{
                                width: '100%',
                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                    border: 'none',
                                },
                                fontStyle: 'none',
                                paddingLeft: 0
                            }}>
                                <Select
                                    displayEmpty
                                    forcePopupIcon={false}
                                    value={paying}
                                    onChange={handleChangePaying}
                                    IconComponent={KeyboardArrowDown}

                                    renderValue={(selected) => {
                                        if (selected.length === 0) {
                                            setPaying({ code: 'AUD', flag: 'http://ec2-34-249-94-64.eu-west-1.compute.amazonaws.com/images/flags/au.svg' })
                                            return <>
                                                <Stack direction="row">
                                                    <StyledAvatar
                                                        alt='AUD'
                                                        src='http://ec2-34-249-94-64.eu-west-1.compute.amazonaws.com/images/flags/au.svg'
                                                    />
                                                    <p style={{ fontSize: '19px' }}>AUD</p>
                                                </Stack>
                                            </>;
                                        }

                                        return <>
                                            <Stack direction="row">
                                                <StyledAvatar
                                                    alt={selected.code}
                                                    src={selected.flag}
                                                />
                                                <p style={{ fontSize: '19px' }}>{selected.code}</p>
                                            </Stack>
                                        </>;;
                                    }}
                                    MenuProps={MenuProps}
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    sx={{
                                        '& .MuiOutlinedInput-notchedOutline': {
                                            border: 'none',
                                        },
                                    }}
                                >
                                    {contries.map((contry, i) => (
                                        <MenuItem
                                            key={i}
                                            value={contry}
                                        >
                                            <>
                                                <Stack direction="row">
                                                    <StyledAvatar
                                                        alt='AUD'
                                                        src={contry.flag}
                                                    />
                                                    <p style={{ fontSize: '19px' }}>{contry.code}</p>
                                                </Stack>
                                            </>
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Box>

                    </Box>
                </StyledStack>


                <StyledStack
                    direction="row"
                    divider={<Divider sx={{ height: '40px', marginTop: '5px' }} orientation="vertical" flexItem />}
                    spacing={2}

                >
                    <Box sx={{ width: { sm: '55%', xs: '50%' } }}>
                        <StyledTextField
                            id="outlined-helperText"
                            label="Recipient gets"
                            type='number'
                            defaultValue="31239.00"
                            variant="standard"
                            InputProps={{ disableUnderline: true, style: { fontSize: '26px', fontWeight: '600', padding: 0 } }}
                            InputLabelProps={{ style: { fontSize: '16px' } }}
                            sx={{ width: '100%', caretColor: '#f64200' }}
                        />
                    </Box>
                    <Box sx={{ width: { sm: '45%', xs: '50%' } }} >
                        <Box sx={{ height: '100%' }}>
                            <FormControl sx={{
                                width: '100%',
                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                    border: 'none',
                                },
                                fontStyle: 'none',
                                paddingLeft: 0
                            }}>
                                <Select
                                    displayEmpty
                                    forcePopupIcon={false}
                                    value={receiving}
                                    onChange={handleChangeReceiving}
                                    IconComponent={KeyboardArrowDown}

                                    renderValue={(selected) => {
                                        if (selected.length === 0) {
                                            setReceiving({ code: 'USD', flag: 'http://ec2-34-249-94-64.eu-west-1.compute.amazonaws.com/images/flags/us.svg' })
                                            return <>
                                                <Stack direction="row">
                                                    <StyledAvatar
                                                        alt='USD'
                                                        src='http://ec2-34-249-94-64.eu-west-1.compute.amazonaws.com/images/flags/us.svg'
                                                    />
                                                    <p style={{ fontSize: '19px' }}>USD</p>
                                                </Stack>
                                            </>;
                                        }

                                        return <>
                                            <Stack direction="row">
                                                <StyledAvatar
                                                    alt={selected.code}
                                                    src={selected.flag}
                                                />
                                                <p style={{ fontSize: '19px' }}>{selected.code}</p>
                                            </Stack>
                                        </>;;
                                    }}
                                    MenuProps={MenuProps}
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    sx={{
                                        '& .MuiOutlinedInput-notchedOutline': {
                                            border: 'none',
                                        },
                                    }}
                                >
                                    {contries.map((contry, i) => (
                                        <MenuItem
                                            key={i}
                                            value={contry}
                                        >
                                            <>
                                                <Stack direction="row">
                                                    <StyledAvatar
                                                        alt='AUD'
                                                        src={contry.flag}
                                                    />
                                                    <p style={{ fontSize: '19px' }}>{contry.code}</p>
                                                </Stack>
                                            </>
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Box>

                    </Box>
                </StyledStack>

                {
                    (paying.code != receiving.code) && <p className='wallet_subhead' style={{ margin: '10px 0 10px 0', fontSize: '16px' }}>
                        Exchange rate is &nbsp;&nbsp;<span style={{ color: '#f64200' }}>1.1749</span><Chip
                            sx={checkRateStyle} label="Check rate" onClick={() => { }} />
                    </p>
                }

                <Button variant="outlined"
                    sx={buttonStyle}>
                    Transfer now
                </Button>

            </StyledBox>
        </>
    )
}

export default ExchangeRate


