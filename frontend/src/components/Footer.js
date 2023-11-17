import { Container } from "react-bootstrap";

function Footer() {
    return (
        <footer className="mt-5 bg-light">
            <Container className="py-4">
                <div className="row">
                    <div className="col-md-6">
                        <p>&copy; 2022 Trello Clone</p>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer;