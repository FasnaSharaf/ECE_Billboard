import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import { Image } from 'react-bootstrap';
import '../Styles/Navbars.css';
import { Link } from 'react-scroll';
import NavDropdown from 'react-bootstrap/NavDropdown';
function NavCustom() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary sticky-top" id="navbar" >
      <Container fluid>
        <div className='props'>
          <Image src='./eclogowhite.png' width={60} height={60}></Image>
          <div className='title'>ECE Billboard</div>
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ color: '#0f0f0f' , backgroundColor : 'white'}} />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            
            {/* <NavDropdown title="Oppam" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="https://drive.google.com/drive/u/3/folders/1rZcZlv3srV52xAJ6YFxEmq6zhEXxOdVa" target='_blank'>Sem 3</NavDropdown.Item>
              <NavDropdown.Item href="https://drive.google.com/drive/u/3/folders/1FV3kcLhyuIScpJJ33cxGN38cs6xvrt8o"  target='_blank'>Sem 4</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav className='mr-auto' style={{ marginRight: '10px' }}>
          <Nav.Link style={{ marginRight: '40px' }}><Link to="top" smooth={true} duration={500}>Home</Link></Nav.Link>
            <Nav.Link style={{ marginRight: '40px' }}><Link to="gallery" smooth={true} duration={500}>Gallery</Link></Nav.Link>
            <Nav.Link style={{ marginRight: '40px' }}><Link to="billboard" smooth={true} duration={500}>Notifications</Link></Nav.Link>
            <Nav.Link style={{ marginRight: '40px' }}><Link to="contacts" smooth={true} duration={500}>Contact us</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavCustom;
