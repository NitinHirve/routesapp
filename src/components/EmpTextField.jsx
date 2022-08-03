import { Grid, TextField } from '@mui/material'
import React from 'react'

const EmpTextField = ({ cols, label, placeholder, name, onChange, index, user }) => {
    return (
        <>
            <Grid item md={cols}>
                <TextField
                // error ={true}
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