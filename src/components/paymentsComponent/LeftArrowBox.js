import { Box, styled } from '@mui/material'
import React from 'react'
import {ArrowForwardIos} from '@mui/icons-material';

const StyledBox = styled(Box)({
    display:'flex', 
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor: '#fff',
    padding: '20px 15px 20px 15px',
    border: '1px solid #e9e9e9',
    borderRadius: '4px',
    fontSize:'19px',
    '&:hover':{border:'1px solid #f64200'}
})



const LeftArrowBox = ({title}) => {
    return (
        <>
            <StyledBox >
                <Box>{title}</Box>
                <ArrowForwardIos  sx={{color:'#f64200',fontSize:'15px'}} />
            </StyledBox>
        </>
    )
}

export default LeftArrowBox