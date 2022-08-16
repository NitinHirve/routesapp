import React, { useCallback } from 'react'
import { Typography, styled, alpha, InputBase, Box } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

const StyledTypography = styled(Typography)({
  margin: "50px 0 50px 0",
})


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  border: '2px solid gray',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));


const Profile = ({ userDetails, logout }) => {

  const [searchState, setSearchState] = useState([])

  const debounce =(callback)=>{
    let timer ;
    return function(...args){
      const context= this;
      if(timer){
        clearTimeout(timer)
      }
      timer= setTimeout(()=>{
        timer=null;
        callback.apply(context,args)
      },1000)
    }
    
  }

  const handleChange = (e) => {
    const { value } = e.target;
    fetch(`https://demo.dataverse.org/api/search?q=${value}`)
      .then(res => res.json())
      .then(result => setSearchState(result.data.items))
  }

// useCallback provide us memoized callback and do no rerender everytime component did mount.
  const optimizedVersion = useCallback(debounce(handleChange))



  return (
    <>
      {
        userDetails.given_name ?
          (<StyledTypography
            variant="h4" >Hi {userDetails.given_name} you are logged in
          </StyledTypography>) :
          (<StyledTypography
            variant="h4" >
            Hi you are logged in
          </StyledTypography>)
      }
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          name="search"
          onChange={optimizedVersion}
          inputProps={{ 'aria-label': 'search' }}
        />
      </Search>
      {
        searchState?.length > 0 &&
        <Box>
          {
            searchState.map((item, i) => <>
              <div>{item.name}</div>
            </>)
          }
        </Box>

      }
    </>
  )
}

export default Profile