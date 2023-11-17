import {useRef} from "react";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme()

function LoginForm(props) {

    const emailRef = useRef();
    const passwordRef = useRef();

    function submitLoginForm(event){

        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const user = {email, password}
        //console.log(user);
        props.login(user);
    }


    return (
        <ThemeProvider theme={theme}>
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
                    <Typography component="h1" variant="h5">
                        Login 
                    </Typography>
                    <Box component="form" onSubmit={submitLoginForm} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                placeholder="Enter email"
                                ref={emailRef}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                required
                                fullWidth
                                id="password"
                                label="Password"
                                name="password"
                                autoComplete="password"
                                placeholder="Enter password"
                                ref={passwordRef}
                                />
                            </Grid>
                            
                            
                            <Button
                            variant="primary"
                            sx={{ mt: 3, mb: 2 }}
                            type="submit" onClick={submitLoginForm}>
                                Login
                            </Button>

                            <Button variant="secondary" sx={{ mt: 3, mb: 2 }} href="/forgotPassword">Forgot password</Button>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default LoginForm;