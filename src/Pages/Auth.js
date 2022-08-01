import React from 'react';
import {useNavigate} from 'react-router-dom';

const Auth = ({authenticate}) => {
   
    const navigate = useNavigate()

    const onClick = ()=>{
        authenticate();
        navigate("profile");
    }

  return (
    <>
        <h2>Please authenticate to continue </h2>
        <button onClick ={onClick}>Authentication</button>
    </>
  )
}

export default Auth