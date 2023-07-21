import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const containerProps = {
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '100vh'
}

const boxProps = {
    borderRadius: '16px',
    border: 1
}

function Copyright(props: any) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://i.imgflip.com/6hetjm.jpg">
          WeBet
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
}
  
  // TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

function LoginComponent() {
    const navigate = useNavigate();
    const navToHomePage = () => navigate('/home');
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
        navToHomePage();
    }

    return (
        <>
        <Grid container sx={containerProps}>
            <Grid item sx={boxProps}>
                <Grid item >
                    <ThemeProvider theme={defaultTheme}>
                        <Container component="main" maxWidth="xs">
                                <CssBaseline />
                                <Box
                                    sx={{
                                    marginTop: 8,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    }}
                                >
                                    <Avatar sx={{ m: 1, bgcolor: 'black' }}>
                                        
                                    </Avatar>
                                    <Typography component="h1" variant="h5">
                                        Sign in
                                    </Typography>
                                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="email"
                                            label="Username"
                                            name="email"
                                            autoComplete="email"
                                            autoFocus
                                        />
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            name="password"
                                            label="Password"
                                            type="password"
                                            id="password"
                                            autoComplete="current-password"
                                        />
                                        <Button
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            sx={{ mt: 3, mb: 2 }}
                                        >
                                            Sign In
                                        </Button>
                                    </Box>
                                </Box>
                            <Copyright sx={{ mt: 8, mb: 4 }} />
                        </Container>
                    </ThemeProvider>
                </Grid>
            </Grid>
        </Grid>
        </>
    );
}

export default LoginComponent;