import { AppBar, Avatar, Box, Button, Container, IconButton, Menu, Toolbar, Tooltip, Typography } from '@mui/material';
import React from 'react'
import {Link} from 'react-router-dom';

const pages = ['Profile','Dashboard', 'Contact', 'Help'];


const Header = ({logout}) => {
  return (
    <>
          <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
            </IconButton>
            
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link style={{textDecoration: 'none',color: 'white'}}to={`/${page}`} >{page}</Link>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
              {/* <Button onClick={logout}>Logout</Button>  */}
              <Button onClick={logout}sx={{textTransform: 'none'}} color="error" variant="contained" >Logout</Button>
          
          </Box>


        </Toolbar>
      </Container>
    </AppBar>
    </>
  )
}

export default Header