import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import { Image } from 'react-bootstrap';
import '../Styles/Navbars.css';
import { Link } from 'react-scroll';
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
            <div className='spacer'></div>
          <Nav className="mx-auto">
            <Nav.Link><Link to="top" smooth= {true} duration={500}>Home</Link></Nav.Link>
            <Nav.Link><Link to="gallery" smooth= {true} duration={500}>Gallery</Link></Nav.Link>
            <Nav.Link><Link to="billboard" smooth= {true} duration={500}>Notifications</Link></Nav.Link>
          </Nav>
          <Nav className='mr-auto'>
          <Nav.Link><Link to="contacts" smooth= {true} duration={500}>Contact us</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavCustom;