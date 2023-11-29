import React, {useState} from "react";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from "react-router-dom";

const theme = createTheme()

function LoginForm(props) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function submitLoginForm(event){

        event.preventDefault();
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
                                value={email}
                                onChange={(e)=> setEmail(e.target.value)}
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
                                value={password}
                                onChange={(e)=>setPassword(e.target.value)}
                                />
                            </Grid>
                            
                            
                            <Button
                            variant="primary"
                            sx={{ mt: 3, mb: 2 }}
                            type="submit" onClick={submitLoginForm}>
                                Login
                            </Button>

                            <Link to="/forgotPassword">
                                <Button variant="secondary" sx={{ mt: 3, mb: 2 }}>Forgot password</Button>
                            </Link>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default LoginForm;