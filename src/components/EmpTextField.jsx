import { Grid, TextField } from '@mui/material'
import React from 'react'

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
                    name={name}
                    onChange={(e) => onChange(e, index)}
                    value={user[name]}
                    fullWidth
                />
            </Grid>
        </>
    )
}

export default EmpTextField