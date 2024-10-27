"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { Button, Container, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function SignIn() {
  const [userName, setUserName] = React.useState('');
  const Router = useRouter()

  const handelClick = () => {
    Router.push("/Auth/signup")
  }
  const handleSignIn = async () => {
    try {
      const response = await axios.post(
        'http://localhost:8000/api/v1/login',
        { userName: userName },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        })
      console.log(response);
      alert("You are successfully logged in")
      Router.push("/comment");

    } catch (error) {
      console.error('Error in Axios request:', error);
    }
  }


  return (
    <Container maxWidth="sm"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        mt: 10, p: 2
      }}>

      <Box
        component="form"
        sx={{ bgcolor: '#cfe8fc', height: '50vh', width: '50%', p: 2 }}
        noValidate
        autoComplete="off"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap={2}

      >
        <Typography variant="h6" component="h1" gutterBottom>Sign in to your account</Typography>

        <TextField
          required
          id="outlined-required"
          label="Required"
          placeholder='userName..'
          value={userName || ''}
          onChange={(e) => setUserName(e.target.value)}
          sx={{ width: '90%', bgcolor: '#f4fafe' }}
        />

        <Button variant="contained" sx={{ width: '90%' }} onClick={handleSignIn}>
          Sign In
        </Button>

        <Typography variant="subtitle1" gutterBottom>Don’t have an account?{" "}

          <Typography variant="button" gutterBottom sx={{ color: "#0041cf", cursor: "pointer" }} onClick={handelClick}>SignUp</Typography></Typography>

      </Box>
    </Container>
  );
}