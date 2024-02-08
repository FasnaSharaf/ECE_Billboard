import React from 'react';
import { MDBFooter, MDBContainer, MDBCol, MDBRow, MDBIcon } from 'mdb-react-ui-kit';
import '../Styles/Footer.css';
function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <MDBContainer className='p-4'>
      <MDBRow className='mt-3'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
      <MDBCol size="auto">
      <div className='webteam'>
        <span>The web team:</span>
        <a href='users' className='me-4 text-reset'>
            <MDBIcon color='grey' fas icon='users' />
          </a>
        </div>
      </MDBCol>
      <MDBCol size="auto">
        <div  id="contacts">
          <a href='facebook' className='me-4 text-reset'>
            <MDBIcon color='grey' fab icon='facebook-f' />
          </a>
          <a href='twitter' className='me-4 text-reset'>
            <MDBIcon color='grey' fab icon='twitter' />
          </a>
          <a href='google' className='me-4 text-reset'>
            <MDBIcon color='grey' fab icon='google' />
          </a>
          <a href='instagram' className='me-4 text-reset'>
            <MDBIcon color='grey' fab icon='instagram' />
          </a>
          <a href='linkedin' className='me-4 text-reset'>
            <MDBIcon color='grey' fab icon='linkedin' />
          </a>
          <a href='h6' className='me-4 text-reset'>
            <MDBIcon color='grey' fab icon='github' />
          </a>
        </div>
        </MDBCol>
      </section>
      </MDBRow>
      </MDBContainer>
      
    </MDBFooter>
  );
}
export default Footer;