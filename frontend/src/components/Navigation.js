import { Container, Nav, Navbar } from 'react-bootstrap';
import {Link} from 'react-router-dom';
// Logo from https://openmoji.org
import logo from '../img/graph.svg';
import { Image } from 'react-bootstrap';

function Navigation() {
  let userNavSection;

  if (localStorage.getItem("user")) {
    userNavSection = (
    <>
      <Nav.Link as={Link} to={"/workspaces"}>
          Workspaces
      </Nav.Link>

      <Nav.Link as={Link} to={"/newWorkspace"}>
          New Workspace
      </Nav.Link>
      <Nav.Link as={Link} to={"/logout"}>
          Logout
      </Nav.Link>
    </>
    );
  } else {
    userNavSection = (
    <>
      <Nav.Link as={Link} to={"/login"}>
          Login
      </Nav.Link>
      
      <Nav.Link as={Link} to={"/forgotPassword"}>
        Forgot Password
      </Nav.Link>

      <Nav.Link as={Link} to={"/Register"}>
        Register
      </Nav.Link>
    </>
    );
  }

  return (
    <Navbar bg="primary" variant='dark'>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <div>
            <Image src={logo} alt="logo" className="position-static" />
            Trello Clone
          </div>
        </Navbar.Brand>

        <Nav>

            {userNavSection}

        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;