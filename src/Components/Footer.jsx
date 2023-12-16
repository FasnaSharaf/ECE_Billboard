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
        <a href='h1' className='me-4 text-reset'>
            <MDBIcon color='grey' fab icon='facebook-f' />
          </a>
        </div>
      </MDBCol>
      <MDBCol size="auto">
        <div>
          <a href='h1' className='me-4 text-reset'>
            <MDBIcon color='grey' fab icon='facebook-f' />
          </a>
          <a href='h2' className='me-4 text-reset'>
            <MDBIcon color='grey' fab icon='twitter' />
          </a>
          <a href='h3' className='me-4 text-reset'>
            <MDBIcon color='grey' fab icon='google' />
          </a>
          <a href='h4' className='me-4 text-reset'>
            <MDBIcon color='grey' fab icon='instagram' />
          </a>
          <a href='h5' className='me-4 text-reset'>
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