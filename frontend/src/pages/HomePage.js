import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const theme = createTheme();

function HomePage() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container component="main" maxWidth="xs">
                <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant="h2" gutterBottom>
                        Welcome
                    </Typography>
                    <Box sx={{ textAlign: 'left' }}>
                        <Typography variant="body1" gutterBottom>
                            This is a simple Trello clone. Please use the navigation at the top to get started.
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            This project was created as a collaborative effort for the Software Engineering Course.
                        </Typography>
                        <Typography variant="body1" component="div" gutterBottom>
                            <ul>
                                <li>Tech stack involves Spring Boot and ReactJS</li>
                                <li>Developed by Trent, Songbo, Joyce, Mingxuan, Himel</li>
                                <li>Completed on 07/2022</li>
                                <li>Revived 09/2023</li>
                            </ul>
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default HomePage;
