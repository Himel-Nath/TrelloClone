import {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// learned from https://github.com/mui/material-ui/tree/v5.8.3/docs/data/material/getting-started/templates/sign-up

const theme = createTheme();

function ForgotPassword() {

  const [succeed, setSucceed] = useState(false);
  var temp1 = false;
  const [firstTime, setFirstTime] = useState(false);

  const [mailStatus, setMailStatus] = useState(false);
  const [secAnsStatus, setSecAnsStatus] = useState(false);



  const handleSubmit = (event) => {
    event.preventDefault();
    //collect everything in data
    const inputData = new FormData(event.currentTarget);
    // setDataSecAns( data.get("SecurityAnswer") );

    fetch('http://localhost:8080/showUserByPassword/'+inputData.get("email"))
    .then(response => {
      setFirstTime(true);
        return response.json()
    })
    .then(data => {
        //this email address is correct
        console.log(data);
        console.log(inputData.get("email")+"  "+ inputData.get("password"));

        console.log(data.securityAnswer);
        console.log("//////");


        if(data != null) {
          setMailStatus(true);
            console.log(data.securityAnswer);
            console.log(inputData.get("SecurityAnswer"));

            temp1 = data.securityAnswer==inputData.get("SecurityAnswer")
            console.log("temp1 is : "+temp1);
            setSecAnsStatus(temp1);

            //when input the correct email address and the sectury answer is yes
            if(temp1){
                console.log("position3");

                //change password in database
                fetch('http://localhost:8080/updateUserPasswordByEmail?email='+inputData.get("email")+'&newPassword='+inputData.get("password"), {
                    method: 'POST',

                })
                setSucceed(true);
                // return response.json();
            }
            // return response.json();
            else {
                //Security Answer Status is no
                if(!temp1){
                    console.log("Security Answer is wrong ");
                }
            }
        }
        console.log("mailStatus: "+mailStatus);


    })

    .catch(error => {
        console.log('Wrong mail address: ');
        setMailStatus(false);
        console.log("mailStatus error: "+mailStatus);

        console.log({
            emailId: inputData.get("email"),
        });

    });

  };

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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Forgot Password 
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"

                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="SecurityAnswer"
                  label="Security Answer"
                  type="SecurityAnswer"
                  id="securityanswer"
                  autoComplete="SecurityAnswer"

                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="New password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>

            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color={succeed?"success":"primary"}
              sx={{ mt: 3, mb: 2 }}
            >
              {succeed? "Reset success": "Reset password"}
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/Login" variant="body2">
                  Remember your password again?
                </Link>                
              </Grid>
            </Grid>
            <Grid container justifyContent="flex-end">
              {firstTime?
                <p>{mailStatus? "correct mail address": "wrong mail address"}</p>
                :""
              }
            </Grid>
            <Grid container justifyContent="flex-end">
            {firstTime?
              <p>{secAnsStatus? "correct security answer": "wrong security answer"}</p>
              :""
            }
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default ForgotPassword;