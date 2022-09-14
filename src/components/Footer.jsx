import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
function Footer(){
    return(
        <Navbar bg="dark" variant="dark" fixed="bottom">
            <Container>
            <Navbar.Brand href="#home">
                The Doglist Team 🐕- 2022 Copyright
            </Navbar.Brand>
            </Container>
        </Navbar>
    )
}
export default Footer;