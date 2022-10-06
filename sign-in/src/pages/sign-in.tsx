import * as React from 'react';
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { apiSignIn } from '../app/endpoints';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { useQuery } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="">
        Tolom
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SignInSide() {
  const navigate = useNavigate()
  const [openN, setOpenN] = React.useState(false)
  const [openS, setOpenS] = React.useState(false);
  const [openE, setOpenE] = React.useState(false);
  const form = useForm({resolver: yupResolver(formShema)})
  const {register, handleSubmit, formState: { errors }} = form

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenS(false);
    setOpenE(false);
    setOpenN(false);
  };

  const onSubmit = async (formData: any) => {
    const {email, password} = formData
    const data = new FormData();

    data.append("username", email)
    data.append("password", password)
    setOpenN(true)

    try {
      await axios.post(apiSignIn, data);
       navigate('/')
       localStorage.setItem('username', email)
       localStorage.setItem('password', password)
       localStorage.setItem('auth', 'true')

       setOpenS(true)

      //  setTimeout(() => {
      //   localStorage.setItem('auth', 'false')
      //   navigate('/sign-in')
      // }, 10000);
    }
    catch (e: any) {
        console.log(e.message)
        setOpenE(true)
    }
  };

    // const {isFetching, data, refetch, error} = useQuery(['values'], async () => {
    //     const fetchListDocs = await fetch(`${apiSignIn}`, {
    //             method: 'POST',
    //             headers: {'Content-Type': 'application/json'},
    //             body: JSON.stringify(
    //                 {
    //                     pin: value && value,
    //                 }
    //             )
    //         }
    //     )
    //     return await fetchListDocs.json()
    // })
  
  return (
    <ThemeProvider theme={theme}>
      <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar open={openS} autoHideDuration={3000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            Успешно
          </Alert>
        </Snackbar>
        <Snackbar open={openE} autoHideDuration={3000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
            Неправильный логин или пароль!
          </Alert>
        </Snackbar>
        <Snackbar open={openN} autoHideDuration={1000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
            Идет загрузка подождите!
          </Alert>
        </Snackbar>
      </Stack>

      <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Grid sx={{ marginBottom: '20px', width: '500px' }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: 'url(https://source.unsplash.com/random)',
              backgroundRepeat: 'no-repeat',
              backgroundColor: (t) =>
                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '50px 0'
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <form onSubmit={handleSubmit(onSubmit)} >
                <TextField
                  margin="normal"
                  fullWidth
                  id="email"
                  label="Email Address"
                  autoComplete="email"
                  autoFocus
                  {...register('email')}
                  //@ts-ignore
                  helperText={errors.email?.message}
                  //@ts-ignore
                  error={errors?.email}
                />
                <TextField
                  margin="normal"
                  fullWidth
                  label="Password"
                  type="password"
                  {...register('password')}
                  id="password"
                  autoComplete="current-password"
                  //@ts-ignore
                  helperText={errors.password?.message}
                  //@ts-ignore
                  error={errors?.password}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  // onClick={handleClick}
                >
                  Sign In
                </Button>
                <Copyright sx={{ mt: 5 }} />
              </form>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export const formShema = yup.object({
    email: yup.string().required('Поле не должно быть пустым!'),
    password: yup.string().required('Поле не должно быть пустым!'),
}).defined()