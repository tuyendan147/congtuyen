import React from 'react'  
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";  

const FooterPage = () => {
    return (
      <MDBFooter  className="font-small pt-1  mt-1">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="6">
              <h5 className="title">BEST CHOICE FOR YOU</h5>
              <p>
                  WORLD PHONE
              </p>
            </MDBCol>
            <MDBCol md="6">
              <h5 className="title">Information</h5>
              <ul>
                <li className="list-unstyled">
                  <a href="https://www.facebook.com/Dvidcongtuyen">TRAN TUYEN</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">congtuyen.tran.it@gmail.com</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">0903552623</a>
                </li>
                <li className="list-unstyled">
                  <p>PHONG NHAT, DIEN AN , DIEN BAN , QUANG NAM</p>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        </MDBFooter>
        );
    }
    export default FooterPage;
    