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
    const [error, setError] = useState("")

    function submitLoginForm(event){
        event.preventDefault();
        const user = {email, password}
        props.login(user, setError);
    }

    function handleInputChanged(event){
        const {name, value} = event.target
        setError("")
        if (name === "email") {
            setEmail(value)
        }
        else if (name === "password") {
            setPassword(value)
        }
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
                                error={error !== ""}
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={handleInputChanged}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                error={error !== ""}                                
                                required
                                fullWidth
                                type="password"
                                id="password"
                                label="Password"
                                name="password"
                                autoComplete="password"
                                placeholder="Enter password"
                                value={password}
                                onChange={handleInputChanged}
                                />
                            </Grid>

                            {error && (
                                <Grid item xs={12}>
                                    <Typography variant="body1" color="error">
                                        {error}
                                    </Typography>
                                </Grid>
                            )}
                            
                            <Grid item xs={12}>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    type="submit"
                                >
                                    Login
                                </Button>
                            </Grid>

                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <Link to="/forgotPassword" variant="body2">
                                        <Button sx={{ mt: 2, fontSize: 'small'}}>Forgot password</Button>
                                    </Link>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default LoginForm;