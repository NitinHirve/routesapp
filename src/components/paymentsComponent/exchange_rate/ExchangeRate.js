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

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];

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


const StyledTextField = styled(TextField)({
    backgroundColor: "white",
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


    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };


    return (
        <>
            <StyledBox >
                <Box sx={{ padding: '7.5px 0 7.5px 0 ' }}>
                    <StyledTypographyHead variant="h6">Check the exchange rate</StyledTypographyHead>
                </Box>

                <Stack
                    direction="row"
                    divider={<Divider sx={{ height: '40px', marginTop: '5px' }} orientation="vertical" flexItem />}
                    spacing={2}
                    sx={{ border: '1px solid  #e9e9e9', borderRadius: '4px', height: '52px', padding: '7.5px 10px 7.5px 10px', marginTop: '10px' }}
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
                    <Box sx={{ width: { sm: '45%', xs: '50%' }, position: 'relative' }} >
                        <Box sx={{ display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Stack direction="row">
                                <Avatar
                                    alt='AUD'
                                    src='http://ec2-34-249-94-64.eu-west-1.compute.amazonaws.com/images/flags/au.svg'
                                    sx={{ width: 20, height: 20, margin: 0, padding: 0, marginRight: '12px' }}
                                />
                                <p style={{ fontSize: '19px' }}>AUD</p>

                            </Stack>
                            <Box>
                                <KeyboardArrowDown sx={{ color: '#e8541e' }} />
                            </Box>

                        </Box>
                        
                    </Box>
                </Stack>


                <Stack
                    direction="row"
                    divider={<Divider sx={{ height: '40px', marginTop: '5px' }} orientation="vertical" flexItem />}
                    spacing={2}
                    sx={{ border: '1px solid  #e9e9e9', borderRadius: '4px', height: '52px', padding: '7.5px 10px 7.5px 10px', marginTop: '10px' }}
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
                    <Box sx={{ width: { sm: '45%', xs: '50%' }, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
                        <Stack direction="row">
                            <Avatar
                                alt='USD'
                                src='http://ec2-34-249-94-64.eu-west-1.compute.amazonaws.com/images/flags/us.svg'
                                sx={{ width: 20, height: 20, margin: 0, padding: 0, marginRight: '12px' }}
                            />
                            <p style={{ fontSize: '19px' }}>USD</p>
                        </Stack>
                        <Box>
                            <KeyboardArrowDown sx={{ color: '#e8541e' }} />
                        </Box>

                    </Box>
                </Stack>
                <p className='wallet_subhead' style={{ margin: '10px 0 10px 0', fontSize: '16px' }}>
                    Exchange rate is &nbsp;&nbsp;<span style={{ color: '#f64200' }}>1.1749</span><Chip
                        sx={{ marginLeft: '25px', height: '25px', '&:hover': { backgroundColor: '#f96c39', boxShadow: 'none' }, borderRadius: '5px', backgroundColor: '#f64200', color: '#fff' }} label="Check rate" onClick={() => { }} /></p>

                <Button variant="outlined"
                    sx={buttonStyle}>
                    Transfer now
                </Button>



            </StyledBox>
        </>
    )
}

export default ExchangeRate