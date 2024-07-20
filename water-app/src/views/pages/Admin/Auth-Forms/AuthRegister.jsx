import React, { useState } from 'react';
import {
  TextField,
  Button,
  Container,
  Box,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Grid,
  FormHelperText, // Import FormHelperText
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useNavigate } from 'react-router-dom';
import ApiService from '../../../../Api/ApiService';


const AuthRegister = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [county, setCounty] = useState('');
  const [subcounty, setSubcounty] = useState('');
  const [username, setUsername] = useState('');
  const [userType, setUserType] = useState('student');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate=useNavigate();

  // Error states
  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    county: false,
    subcounty: false,
    username: false,
    password: false,
    confirmPassword: false,
  });

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'firstName':
        setFirstName(value);
        break;
      case 'lastName':
        setLastName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'county':
        setCounty(value);
        break;
      case 'subcounty':
        setSubcounty(value);
        break;
      case 'username':
        setUsername(value);
        break;
      case 'userType':
        setUserType(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'confirmPassword':
        setConfirmPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Validate fields
    const newErrors = {
      firstName: !firstName,
      lastName: !lastName,
      email: !email || !validateEmail(email),
      county: !county,
      subcounty: !subcounty,
      username: !username,
      password: !password,
      confirmPassword: !confirmPassword || password !== confirmPassword,
    };
  
    setErrors(newErrors);
  
    if (Object.values(newErrors).includes(true)) {
      toast.warning('Please correct the errors in the form');
      return;
    }
  
    // Prepare payload
    const payload = {
      firstName,
      lastName,
      email,
      county,
      subcounty,
      username,
      userType,
      password,
    };
  
    try {
     

      // Send request
      const response = await ApiService.post('addUser', payload);
    
      console.log('response',response);
      

      // Check response status
      if (response.status === 200) {
        toast.success('Registration successful!');
        // Optionally, redirect or perform further actions
        navigate('/login')

      } else {
        // Handle different response statuses or errors
        toast.error(`Registration failed: ${response.data.message || 'An error occurred'}`);
      }
    } catch (error) {
      // Handle unexpected errors
      toast.error(`Registration failed: ${error.message || 'An error occurred'}`);
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
        <form onSubmit={handleSubmit} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                margin="normal"
                required
                fullWidth
                label="First Name"
                name="firstName"
                value={firstName}
                onChange={handleChange}
                error={errors.firstName}
                helperText={errors.firstName ? 'First Name is required' : ''}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                margin="normal"
                required
                fullWidth
                label="Last Name"
                name="lastName"
                value={lastName}
                onChange={handleChange}
                error={errors.lastName}
                helperText={errors.lastName ? 'Last Name is required' : ''}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                margin="normal"
                required
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={email}
                onChange={handleChange}
                error={errors.email}
                helperText={errors.email ? (email ? 'Invalid email address' : 'Email is required') : ''}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                margin="normal"
                required
                fullWidth
                label="County"
                name="county"
                value={county}
                onChange={handleChange}
                error={errors.county}
                helperText={errors.county ? 'County is required' : ''}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                margin="normal"
                required
                fullWidth
                label="Sub-County"
                name="subcounty"
                value={subcounty}
                onChange={handleChange}
                error={errors.subcounty}
                helperText={errors.subcounty ? 'Sub-County is required' : ''}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                margin="normal"
                required
                fullWidth
                label="Username"
                name="username"
                value={username}
                onChange={handleChange}
                error={errors.username}
                helperText={errors.username ? 'Username is required' : ''}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl component="fieldset" margin="normal" fullWidth>
                <FormLabel component="legend">User Type</FormLabel>
                <RadioGroup row name="userType" value={userType} onChange={handleChange}>
                  <FormControlLabel value="student" control={<Radio />} label="Student" />
                  <FormControlLabel value="admin" control={<Radio />} label="Admin" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth margin="normal">
                <FormLabel htmlFor="password">Password</FormLabel>
                <OutlinedInput
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={handleChange}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                  error={errors.password}
                />
                {errors.password && <FormHelperText error>Password is required</FormHelperText>}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth margin="normal">
                <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
                <OutlinedInput
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={handleChange}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowConfirmPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Confirm Password"
                  error={errors.confirmPassword}
                />
                {errors.confirmPassword && (
                  <FormHelperText error>
                    {password !== confirmPassword ? 'Passwords do not match' : 'Confirm Password is required'}
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            Register
          </Button>
        </form>
      </Box>
      <ToastContainer />
    </Container>
  );
};

export default AuthRegister;
