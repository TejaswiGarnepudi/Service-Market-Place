import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { Link } from 'react-router-dom';

function NavScrollExample() {
  return ( 
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to="/" style={{ marginRight: "15px" }}>Home</Link>
            <Link to="/login" style={{ marginRight: "15px" }}>Login</Link>
            <Link to="/register" style={{ marginRight: "15px" }}>Register</Link>
            {/* <Link to='/UserProfilePage'>UserProfilePage</Link>
            <Link to='/ServiceDetails'>ServiceDetails</Link>
            <Link to='/Notifications'>Notifications</Link>
            <Link to='/register'>Register</Link> */}
            
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;