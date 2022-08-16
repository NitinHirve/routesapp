import { Grid, TextField } from '@mui/material'
import React from 'react'
import DOMPurify from 'dompurify';
var clean2 = DOMPurify.sanitize("<script>Hello</script>Hii");



const EmpTextField = ({ cols, label, placeholder, errors, name, onChange, index, user }) => {


    console.log('EmpTextField errors : ', errors);

    return (
        <>
            <Grid item md={cols}>
                <TextField
                    error={errors ? errors : false}
                    label={label}
                    placeholder={placeholder}
                    variant="outlined"
                    type={name==='phone'?'number':'text'}
                    name={name}
                    onChange={(e) => onChange(e, index)}
                    value={DOMPurify.sanitize(user[name])}
                    fullWidth
                />
            </Grid>
        </>
    )
}


export default EmpTextField