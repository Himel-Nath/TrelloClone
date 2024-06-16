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
                            This website was created to improve my skills in the tech stack and also as a portfolio project.
                        </Typography>
                        <Typography variant="body1" component="div" gutterBottom>
                            <ul>
                                <li>Tech stack involves Spring Boot and ReactJS</li>
                                <li>Developed by Himel</li>
                                <li>Started on 11/2023</li>
                                <li>Completed 06/2024</li>
                            </ul>
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default HomePage;
