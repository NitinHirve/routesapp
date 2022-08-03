
import React from 'react'
import { DeleteOutline } from '@mui/icons-material'
import { Button, Grid, IconButton, TextField } from '@mui/material'
import EmpTextField from '../components/EmpTextField'
import { Formik, Form, Field, ErrorMessage, FieldArray, FastField } from 'formik';




const Emp = ({ user, index,errors, onChange, removeEmployee }) => {

    console.log('Emp errors : ',errors);

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
                            errors ={
                                errors?(Array.isArray(errors)?errors[i]:errors)   :''
                                }
                        />)
                }
                {/* <Grid item md={1}>
                    <IconButton color="success">
                        <Button size="small" color="success" sx={{ textTransform: "none" }} variant="contained" >Save</Button>
                    </IconButton>
                </Grid> */}
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