import { AppBar, Avatar, Box, Button, Container, IconButton, Menu, Toolbar, Tooltip, Typography } from '@mui/material';
import React from 'react'
import {Link} from 'react-router-dom';
import Header from '../components/Header';

const pages = ['Dashboard', 'Contact', 'Help'];


const Profile = ({logout}) => {
  return (
    <>
      {/* <Link to="/dashboard" >Dashboard</Link> */}

    <br></br><br></br><br></br><br></br>
      <h1>Hi you are logged in</h1>
    </>
  )
}

export default Profile