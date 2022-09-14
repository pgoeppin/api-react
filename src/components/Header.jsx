import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar bg="dark" variant="dark" className='header'>
    <Container>
      <Navbar.Brand href="#home">The Doglist🐶</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">About Us</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  );
}

export default Header;