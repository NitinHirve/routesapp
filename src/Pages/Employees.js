import React, { useState } from 'react'
import { AppBar, Grid, Container, Paper, styled, TextField, Avatar, Box, Button, IconButton, Menu, Toolbar, Tooltip, Typography } from '@mui/material';
import { DeleteOutline } from '@mui/icons-material';
import Emp from '../components/Emp'
import EmpTable from '../components/EmpTable'

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
    const [errors, setErrors] = useState([]);

    const addEmployee = () => {
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

    const saveEmployees = () => {

        let flag = false;

        users.map((emp, i) => {
            if (emp.name === '') {
                setErrors(...errors, errors.push([true]))
                flag = true;
            }
            else {
                setErrors(...errors, errors.push([false]))
            }

            if (emp.email === '') {
                setErrors(...errors, errors[i].push(true))
                flag = true;
            }
            else {
                setErrors(...errors, errors[i].push(false))
            }
            if (emp.phone === '') {
                setErrors(...errors, errors[i].push(true))
                flag = true;
            }
            else {
                setErrors(...errors, errors[i].push(false))
            }
            if (emp.address === '') {
                setErrors(...errors, errors[i].push(true))
                flag = true;
            }
            else {
                setErrors(...errors, errors[i].push(false))
            }
        })

        setErrors([])

        console.log("Errors : ", errors);
        if (flag) {
            alert("Please fill the all field details")
        }

        else {
            setSavedEmployees([...savedEmployees, ...users])
            //  debugger;
            console.log("Hii")
            setUsers([])
            alert("Employees successfully saved")
        }

    }

    return (
        <>
            <Container >
                <Paper sx={{ marginTop: "20px" }} component={Box} p={4}>
                    {
                        users.map((user, index) => (
                            <>
                                <Emp
                                    user={user}
                                    errors={
                                        errors
                                            ? (Array.isArray(errors) ? errors[index] : errors)
                                            : ''
                                    }
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
                        <Button
                            onClick={() => { saveEmployees() }}
                            sx={{ textTransform: "none", marginLeft: '15px' }}
                            color='secondary'
                            variant="contained"
                        >
                            Save employees
                        </Button>
                    }
                </Paper>
                <Button
                    onClick={() => { setShowTable(!showTable) }}
                    sx={{ textTransform: "none", marginTop: '15px' }}
                    color='secondary'
                    variant="outlined"
                >
                    {showTable ? "Hide table" : "Show table"}
                </Button>

                {
                    showTable && <EmpTable employees={savedEmployees} />
                }

            </Container>
        </>
    )
}

export default Employees