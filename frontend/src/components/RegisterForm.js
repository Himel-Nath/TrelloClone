import {useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { InputAdornment, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Tooltip from '@mui/material/Tooltip';
import { withStyles } from '@material-ui/core';

const theme = createTheme()

const StyledButton = withStyles({
    root: {
      backgroundColor: '#1976d2',
      color: '#fff',
      '&:hover': {
        backgroundColor: '#1864c4',
        color: '#fff',
    },
  }})(Button);

function RegisterForm(props){

    const [fName, setFName] = useState("")
    const [lName, setLName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [answer, setAnswer] = useState("")
    const [formErrors, setFormErrors] = useState([]);
    const [showPassword, setShowPassword] = useState(false)


    function validatePassword(password) {
        const errors = [];
    
        if (password.length < 8) {
            errors.push("Password must be at least 8 characters long");
        }
    
        if (!/[a-z]/.test(password)) {
            errors.push("Password must contain at least one lowercase letter");
        }
    
        if (!/[A-Z]/.test(password)) {
            errors.push("Password must contain at least one uppercase letter");
        }
    
        if (!/\d/.test(password)) {
            errors.push("Password must contain at least one number");
        }
    
        if (!/[^a-zA-Z0-9]/.test(password)) {
            errors.push("Password must contain at least one special character");
        }
    
        return errors;
    }

    const handleClickShowPassword = () => setShowPassword(!showPassword)
    const handleMouseDownPassword = () => setShowPassword(!showPassword)

    function submitRegisterForm(event){
        event.preventDefault();

        const passwordErrors = validatePassword(password)
        const errors = [...passwordErrors]

        if (password !== confirmPassword) {
            errors.push("Passwords do not match")
        }
        if (errors.length > 0) {
            setFormErrors(errors);            
            return;
        }

        setFormErrors([]);
        
        const user = {firstName: fName,lastName: lName,username,email,password,securityAnswer:answer}
        console.log(user);
        props.registerUser(user);

    }

    return(
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
                        Register 
                    </Typography>
                    <Box component="form" onSubmit={submitRegisterForm} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                required
                                fullWidth
                                id="formFirstName"
                                label="First Name"
                                name="fName"
                                autoComplete="name"
                                placeholder="Enter first name"
                                value={fName}
                                onChange={(e)=> setFName(e.target.value)}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                required
                                fullWidth
                                id="formLastName"
                                label="Last Name"
                                name="lName"
                                autoComplete="family-name"
                                placeholder="Enter last name"
                                value={lName}
                                onChange={(e)=> setLName(e.target.value)}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                required
                                fullWidth
                                id="formUsername"
                                label="Username"
                                name="username"
                                autoComplete="username"
                                placeholder="Enter username"
                                value={username}
                                onChange={(e)=> setUsername(e.target.value)}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                required
                                fullWidth
                                id="formEmail"
                                label="Email"
                                name="email"
                                autoComplete="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e)=> setEmail(e.target.value)}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Tooltip 
                                    title={
                                        formErrors.length>0 ? (
                                            <ul style={{margin: 0}}>
                                                {formErrors.map((error, index) => (
                                                    <li key={index}>{error}</li>
                                                ))}
                                            </ul>
                                        ):('')
                                    }
                                        arrow placement="right"
                                >
                                    <TextField
                                        required
                                        fullWidth
                                        id="formPassword"
                                        label="Password"
                                        name="password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Enter password"
                                        value={password}
                                        onChange={(e)=>{
                                            setFormErrors(validatePassword(e.target.value))
                                            setPassword(e.target.value)
                                        }}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton
                                                    aria-label={showPassword ? "Hide password" : "Show Password"}
                                                    onClick = {handleClickShowPassword}
                                                    onMouseDown = {handleMouseDownPassword}
                                                    >
                                                        {showPassword ? <Visibility/> : <VisibilityOff/>}
                                                    </IconButton>
                                                </InputAdornment>
                                            )
                                        }}
                                        error={formErrors.length > 0}
                                    />
                                </Tooltip>
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                 required
                                 fullWidth
                                 id="formConfirmPassword"
                                 label="Confirm Password"
                                 name="confirmPassword"
                                 type="password"
                                 placeholder="Retype password"
                                 value={confirmPassword}
                                 onChange={(e)=>setConfirmPassword(e.target.value)}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                required
                                fullWidth
                                id="formAnswer"
                                label="Security Question"
                                name="answer"
                                placeholder="Enter the name of your first pet"
                                value={answer}
                                onChange={(e)=> setAnswer(e.target.value)}
                                />
                            </Grid>
                        

                            <Grid item xs={12}>
                                <StyledButton
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Register
                                </StyledButton>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default RegisterForm;