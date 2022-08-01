import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage, FieldArray, FastField } from 'formik';
import { Box, Button, FormControl, FormControlLabel, FormLabel, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText, Radio, RadioGroup, Slide, Stack, styled, Switch, TextField, Typography } from '@mui/material';
import * as Yup from 'yup';


const initialValues = {
  email: "",
  password: ""
}

const validationSchema = Yup.object({
  email: Yup.string().required('Required!'),
  password: Yup.string().required('Required!'),
});

const Auth = ({ authenticate }) => {



  const navigate = useNavigate()

  // const onClick = () => {
  //   authenticate();
  //   navigate("profile");
  // }

  const onSubmit = (values) => {
    console.log('User credentials : ',values);
    if(values.email==='hirvenitin@gmail.com' && values.password==='12345')
    {
      authenticate();
      navigate("profile");
    }
    else{
      alert("Invalid user email or password");
    }
}

  return (
    <>
    <br></br><br></br><br></br><br></br>
      <h2>Login </h2><br></br><br></br><br></br><br></br>
      <Formik
       initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
      >
        <Form>
          <Box sx={{marginBottom: "13px"}}>
            <Field type="text" label="Email address" variant="outlined" id="email-address" name="email"
              placeholder="Your email" as={TextField} />
          </Box>
          <Box sx={{marginBottom: "13px"}}>
            <Field type="password" label="Password" variant="outlined" id="password" name="password"
              placeholder="Your password" as={TextField} />
          </Box>
          <Box sx={{marginBottom: "13px",display:'flex',justifyContent:'center'}}>
            <Button sx={{textTransform: 'none'}} type="submit" variant="contained" >Login</Button>
          </Box>
        </Form>
      </Formik>
    </>
  )
}

export default Auth