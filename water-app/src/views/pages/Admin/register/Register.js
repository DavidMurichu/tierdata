import { Link } from 'react-router-dom';

// material-ui
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// project import



import AuthWrapper from '../AuthComponents/AuthWrapper';
import { useState } from 'react';
import AuthRegister from '../Auth-Forms/AuthRegister';

// import { useAuth } from '../../contexts/AuthContext';


// ================================|| LOGIN ||================================ //
function Register() {
  // const { setIsLoggedIn, setUserName } = useAuth();
  const [login, setIsLoggedIn]=useState(false);
  const [userName, setUserName]=useState('')

  return (
      <AuthWrapper>
        <Grid container spacing={3}>
          {/* <ToastContainer/> */}
          <Grid item xs={12}>
            <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
              <Typography variant="h4">Register</Typography>
              <Typography component={Link} to="/login" variant="body1" sx={{ textDecoration: 'none' }} color="primary">
                 Have an account?
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <AuthRegister />
          
          </Grid>
        </Grid>
      </AuthWrapper>
  );
}
export default Register