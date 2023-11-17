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
                    <p>Remember when exploring the site:</p>
                    <ul>
                        <li>Ensure the backend Spring Boot project is running on port 8080</li>
                        <li>Ensure you are connected to the Dal VPN</li>
                        <li>Enjoy!</li>
                    </ul>
                </div>
            </div>
        </Container>
        
    );
}

export default HomePage;