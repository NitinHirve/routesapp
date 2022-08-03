import React, { useState } from 'react'
import { AppBar, Grid, Container, Paper, styled, TextField, Avatar, Box, Button, IconButton, Menu, Toolbar, Tooltip, Typography } from '@mui/material';
import { DeleteOutline } from '@mui/icons-material';
import Emp from '../components/Emp'

const Employees = () => {

    const userTemplate = {
        name: '',
        email: '',
        phone: '',
        address: ''
    }

    const [users, setUsers] = useState([userTemplate]);

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

    return (
        <>
            <Container >
                <Paper component={Box} p={4}>
                    {
                        users.map((user, index) => (
                            <>
                                <Emp user={user} index={index} onChange={onChange} removeEmployee={removeEmployee} />
                            </>
                        ))
                    }
                    <Button onClick={() => { addEmployee() }} sx={{ textTransform: "none" }} variant="contained" >Add employee</Button>
                    <Button sx={{ textTransform: "none",marginLeft:'15px' }} color='secondary' variant="contained" >Save employees</Button>

                </Paper>
            </Container>
        </>
    )
}

export default Employees