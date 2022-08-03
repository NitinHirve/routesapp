import { Grid, TextField } from '@mui/material'
import { ErrorMessage, Field } from 'formik'
import React from 'react'

const EmpTextField = ({ cols, label, placeholder, name, onChange, index, user }) => {
    return (
        <>
            <Grid item md={cols}>
                <Field
                    // error ={true}
                    type="text"
                    label={label}
                    placeholder={placeholder}
                    variant="outlined"
                    name={`${name}[${index}]`}
                    // onChange={(e) => onChange(e, index)}
                    as={TextField}
                // value={user[name]}
                // fullWidth
                />
                <ErrorMessage name={`${name}[${index}]`} >
                        {
                            errorMsg => <div class="error">{errorMsg}</div>
                        }
                </ErrorMessage>

            </Grid>
        </>
    )
}

export default EmpTextField