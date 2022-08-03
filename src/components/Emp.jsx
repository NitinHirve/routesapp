
import React from 'react'
import { DeleteOutline } from '@mui/icons-material'
import { Grid, IconButton, TextField } from '@mui/material'
import EmpTextField from '../components/EmpTextField'



const Emp = ({ user, index, onChange, removeEmployee }) => {

    const textFeildProps = [

        { cols: 3, label: 'Name', placeholder: 'Enter employee name', name: 'name' },
        { cols: 3, label: 'Email', placeholder: 'Enter employee email', name: 'email' },
        { cols: 2, label: 'Phone', placeholder: 'Enter employee phone number', name: 'phone' },
        { cols: 3, label: 'Address', placeholder: 'Enter employee address', name: 'address' },
    ]
    return (
        <>
            <Grid sx={{ marginBottom: "20px" }} spacing={3} container key={index} >
                {
                    textFeildProps.map((field, i) =>
                        <EmpTextField key={i}
                            cols={field.cols}
                            label={field.label}
                            name={field.name}
                            onChange={onChange}
                            index={index}
                            user={user}
                        />)
                }
                <Grid item md={1}>
                    <IconButton color="error">
                        <DeleteOutline onClick={() => { removeEmployee(index) }} />
                    </IconButton>
                </Grid>
            </Grid>
        </>
    )
}

export default Emp