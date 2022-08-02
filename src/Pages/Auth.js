import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage, FieldArray, FastField } from 'formik';
import { Box, Button, FormControl, FormControlLabel, FormLabel, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText, Radio, RadioGroup, Slide, Stack, styled, Switch, TextField, Typography } from '@mui/material';
import * as Yup from 'yup';
import jwt_decode from 'jwt-decode';
import { USER_EMAIL, USER_PASSWORD } from '../Credentials';
const google = window.google;



const StyledLoginBox = styled(Box)({
  marginBottom: "13px",
  display: 'flex',
  justifyContent: 'center'
})

const StyledFieldBox = styled(Box)({
  marginBottom: "13px"
})


const initialValues = {
  email: "",
  password: ""
}

const validationSchema = Yup.object({
  email: Yup.string().required('Required!'),
  password: Yup.string().required('Required!'),
});

const Auth = ({ setUserDetails, authenticate }) => {


  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID Token : ", response.credential)
    var userObject = jwt_decode(response.credential)
    console.log('userObject : ', userObject);
    console.log('email_verified : ', userObject.email_verified);
    if (userObject.email_verified) {
      setUserDetails(userObject);
      authenticate();
    }
  }


  useEffect(() => {

    //global google
    google.accounts.id.initialize({
      client_id: "649557221476-62min6qpm0ugmmtl7s6lcerevsrqgin5.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {
        theme: "outline", size: "large"
      }
    );

  })


  const navigate = useNavigate()

  const onSubmit = (values) => {
    console.log('User credentials : ', values);
    if (values.email === USER_EMAIL && values.password === USER_PASSWORD) {
      authenticate();
      navigate("profile");
    }
    else {
      alert("Invalid user email or password");
    }
  }

  return (
    <>

      <h2 style={{ margin: "60px 0 60px 0" }}>Login </h2>
      <Formik

        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <StyledFieldBox >
            <Field
              type="text"
              label="Email address"
              variant="outlined"
              id="email-address"
              name="email"
              placeholder="Your email"
              as={TextField} />
          </StyledFieldBox>
          <StyledFieldBox >
            <Field
              type="password"
              label="Password"
              variant="outlined"
              id="password"
              name="password"
              placeholder="Your password" as={TextField} />
          </StyledFieldBox>
          <StyledLoginBox >
            <Button
              sx={{ textTransform: 'none' }}
              type="submit"
              variant="contained" >
              Login
            </Button>
          </StyledLoginBox>
          <Box id="signInDiv"></Box>
        </Form>
      </Formik>
    </>
  )
}

export default Auth