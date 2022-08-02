import { AppBar, styled, Avatar, Box, Button, Container, IconButton, Menu, Toolbar, Tooltip, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

require('./Header.css');

const pages = ['Profile', 'Dashboard', 'Contact', 'Help'];

const StyledTypography = styled(Typography)({
  mr: 2,
  display: { xs: 'flex', md: 'flex' },
  fontFamily: 'monospace',
  fontWeight: 700,
  letterSpacing: '.3rem',
  color: 'inherit',
  textDecoration: 'none',
})

const linkStyle = {
  textDecoration: 'none',
  color: 'white',
  textTransform: 'none'
}

const StyledNavigateButton = styled(Button)({
  my: 2,
  color: 'white',
  display: 'block'
})

const StyledNavigationBox = styled(Box)({
  flexGrow: 1,
  display: 'flex'
})




const Header = ({ setUserDetails, logout }) => {
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>

            <StyledTypography
              variant="h6"
              noWrap
              component="a"
              href="/"
            >
              LOGO
            </StyledTypography>

            <StyledNavigationBox>
              {pages.map((page) => (
                <StyledNavigateButton
                  key={page}
                >
                  <Link
                    style={linkStyle}
                    to={`/${page}`} >
                    {page}
                  </Link>
                </StyledNavigateButton>
              ))}
            </StyledNavigationBox>

            <Box sx={{ flexGrow: 0 }}>
              <Button
                onClick={() => { setUserDetails(''); logout() }}
                sx={{ textTransform: 'none' }}
                color="error"
                variant="contained" >
                Logout
              </Button>
            </Box>

          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}

export default Header
