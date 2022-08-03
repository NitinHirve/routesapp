import React, { useState } from 'react'
import { AppBar, Grid, Container, Paper, styled, TextField, Avatar, Box, Button, IconButton, Menu, Toolbar, Tooltip, Typography } from '@mui/material';
import { DeleteOutline } from '@mui/icons-material';
import Emp from '../components/Emp'
import EmpTable from '../components/EmpTable'
import { Formik, Form, Field, ErrorMessage, FieldArray, FastField } from 'formik';
import * as Yup from 'yup';



const initialValues = {
    name: [''],
    email: [''],
    phone: [''],
    address: [''],
}



const validationSchema = Yup.object({
    name:Yup.array().of( Yup.string().required('Required!')),
    email: Yup.array().of(Yup.string().email('Invalid email format yup').required('Required!')),
    phone: Yup.array().of(Yup.string().required('Required!')),
    address:Yup.array().of( Yup.string().required('Required!')),

    // users: Yup.array().of(
    //     Yup.object().shape({
    //       name: Yup.string().required("Name required"),
    //       email: Yup.string().required("email required").email("Enter valid email")
    //     })
    //   )
      
})





const Employees = () => {

    const userTemplate = {
        name: '',
        email: '',
        phone: '',
        address: ''
    }

    const [users, setUsers] = useState([userTemplate]);
    const [showTable, setShowTable] = useState(false);
    const [savedEmployees, setSavedEmployees] = useState([]);

    const addEmployee = () => {
        initialValues['name'].push('')
        initialValues['email'].push('')
        initialValues['phone'].push('')
        initialValues['address'].push('')
        setUsers([...users, userTemplate])
        
    }

    const onChange = (e, index) => {
        const updatedEmployees = users.map((user, i) =>
            index == i
                ? Object.assign(user, { [e.target.name]: e.target.value })
                : user
        );
        setUsers(updatedEmployees);
    }

    const removeEmployee = (index) => {
        const filteredEmployees = [...users];
        filteredEmployees.splice(index, 1)
        setUsers(filteredEmployees);
    }



    const onSubmit = (values) => {
        console.log('Values : ', values);
        console.log("Hello submit");

        // const saveEmployees = () => {


        //     setSavedEmployees([...savedEmployees, ...users])
        //     //  debugger;
        //     setUsers([])
        //     alert("Employees successfully saved")

        // }
        // saveEmployees();
    }

    return (
        <>
            <Container >
                <Paper component={Box} p={4}>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                    >
                        <Form>
                            {
                                users.map((user, index) => (
                                    <>
                                        <Emp
                                            key={index}
                                            user={user}
                                            index={index}
                                            onChange={onChange}
                                            removeEmployee={removeEmployee}
                                        />
                                    </>
                                ))
                            }
                            <Button
                                onClick={() => { addEmployee() }}
                                sx={{ textTransform: "none" }}
                                variant="contained"
                            >
                                Add employee
                            </Button>

                            {users[0] &&

                                <button type="submit">Save</button>
                            }
                        </Form>
                    </Formik>
                </Paper>
                <Button onClick={() => { setShowTable(!showTable) }} sx={{ textTransform: "none", marginTop: '15px' }} color='secondary' variant="outlined" >{showTable ? "Hide table" : "Show table"}</Button>


                {
                    showTable && <EmpTable employees={savedEmployees} />
                }


            </Container>
        </>
    )
}

export default Employees