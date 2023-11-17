import { Container } from "react-bootstrap";

function HomePage() {
    return (
        // Centered vertically and horizontally
        <Container className="d-flex align-items-center justify-content-center" style={{height:"80vh"}}>
            <div>
                <h1>Welcome</h1>
                <p>
                    This is a simple Trello clone. Please use the nav at the top to navigate.
                </p>
                <div className="text-start">
                    <p>This project was created as a collaborative effort for the Software Engineering Course</p>
                    <ul>
                        <li>Tech stack involves Spring Boot and ReactJS</li>
                        <li>Developed by Trent, Songbo, Joyce, Mingxuan, Himel</li>
                        <li>Completed on 07/2022</li>
                        <li>Revived 09/2023</li>
                    </ul>
                </div>
            </div>
        </Container>
        
    );
}

export default HomePage;