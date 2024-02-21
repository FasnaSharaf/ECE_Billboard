import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import { Image } from 'react-bootstrap';
import '../Styles/Navbars.css';
import { Link } from 'react-scroll';
import NavDropdown from 'react-bootstrap/NavDropdown';
function NavCustom() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary sticky-top" id="navbar">
      <Container fluid>
        <div className='props'>
          <Image src='./eclogoblack.png' width={60} height={60}></Image>
          <div className='titlebox'>
            <div className='title'>ECE Forum</div>
            <div className='smalltitle'>College of Engineering Trivandrum</div>
          </div>
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link><Link to="top" smooth={true} duration={500}>Home</Link></Nav.Link>
            <Nav.Link><Link to="gallery" smooth={true} duration={500}>Gallery</Link></Nav.Link>
            <Nav.Link><Link to="billboard" smooth={true} duration={500}>Notifications</Link></Nav.Link>
            <NavDropdown title="Oppam" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="https://drive.google.com/drive/u/3/folders/1rZcZlv3srV52xAJ6YFxEmq6zhEXxOdVa" target='_blank'>Sem 3</NavDropdown.Item>
              <NavDropdown.Item href="https://drive.google.com/drive/u/3/folders/1FV3kcLhyuIScpJJ33cxGN38cs6xvrt8o"  target='_blank'>Sem 4</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className='mr-auto'>
            <Nav.Link><Link to="contacts" smooth={true} duration={500}>Contact us</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavCustom;
