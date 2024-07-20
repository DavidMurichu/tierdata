// Import necessary dependencies
import React, { useState } from 'react';


import 'react-toastify/dist/ReactToastify.css';

import { TextField, Button, Container, Box } from '@mui/material';
import axios from 'axios';
import BaseLink from '../../../../Api/BaseLink';
import { ToastContainer, toast } from 'react-toastify';

const AuthLogin = () => {
    
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')

  
    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        const Base_URL=BaseLink.getBaseLink()
        const response = await axios.post(`${Base_URL}/api/login`, {
          email,
          password
        });
        toast.success('Log in success', 'success');
        localStorage.setItem('access_token', response.data.access);
        localStorage.setItem('refresh_token', response.data.refresh);
        localStorage.setItem('username', username); // Store username
        setLoggedIn(true);
      } catch (error) {
        toast.error('Error Logging in');
        console.error('Login error:', error);
      }
    };
   
    return (

        <Container component="main" maxWidth="xs">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mt: 8,
          }}
        >
          <form onSubmit={handleLogin} noValidate>
            
            <TextField
              margin="normal"
              required
              fullWidth
              label="Email"
              name="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              type="email"
              autoComplete="email"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Password"
              name="password"
              type="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          </form>
        </Box>
        <ToastContainer style={{zIndex:9999999999999999999999}}/>
      </Container>
    )
                
                
                    
                }


export default AuthLogin
