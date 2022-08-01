
import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Auth from './Pages/Auth';
import Dashboard from './Pages/Dashboard';
import Profile from './Pages/Profile';

import { Box, styled } from '@mui/material';
import Header from './components/Header';
import Contact from './Pages/Contact';
import Help from './Pages/Help';

const StyledBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
})


const App = () => {

  const [user, setUser] = useState(false)

  useEffect(() => {
    const userStatus = localStorage.getItem("user");
    console.log('userStatus : ',userStatus);
    userStatus && JSON.parse(userStatus) ? (setUser(true)) : (setUser(false));
  }, [])


  useEffect(() => {
    localStorage.setItem("user", user)
  }, [user])
  


  return (
    <>
        <StyledBox>
        {user &&       <Header logout={() => setUser(false)}/>
}
      <Routes>
        {!user &&
          <Route path="/auth" element={<Auth authenticate={() => setUser(true)} />} />
        }
        {user &&
          <>
            <Route path="/profile" element={<Profile logout={() => setUser(false)} />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/help" element={<Help />} />
          </>
        }
        <Route path="*" element={<Navigate to={user? "/profile" : "/auth"} />} />
      </Routes>
      </StyledBox>

    </>
  );
}








export default App;
