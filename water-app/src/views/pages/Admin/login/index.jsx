import { Link } from 'react-router-dom';

// material-ui
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// project import



import AuthWrapper from '../AuthComponents/AuthWrapper';
import AuthLogin from '../Auth-Forms/AuthLogin';
import { useState } from 'react';
import axios from 'axios';
import BaseLink from '../../../../Api/BaseLink';
// import { useAuth } from '../../contexts/AuthContext';


 

  const handleSubmit=(email, password)=>{
    alert('hey');
  }

// ================================|| LOGIN ||================================ //
function Login() {

const [loggedIn, setLoggedIn] = useState(false);
  // const { setIsLoggedIn, setUserName } = useAuth();
  const [login, setIsLoggedIn]=useState(false);
  const [userName, setUserName]=useState('')

  return (
      <AuthWrapper>
        <Grid container spacing={3}>
         
          <Grid item xs={12}>
            <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
              <Typography variant="h3">Login</Typography>
              <Typography component={Link} to="/register" variant="body1" sx={{ textDecoration: 'none' }} color="primary">
                Don&apos;t have an account?
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <AuthLogin />
          </Grid>
        </Grid>
      </AuthWrapper>
  );
}
export default Login;