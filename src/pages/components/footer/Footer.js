import React, { Component } from 'react';
import './Footer.css';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faYoutube,
    faFacebook,
    faInstagram,
    faTwitter
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <div >
                <MDBFooter className="footer font-small pt-4 mt-4" >
                    <MDBContainer fluid className="text-center ">
                        <MDBRow>
                            <MDBCol>
                                <Link to='/' className="logo h3">Help Center</Link>
                                <p>
                                    Hi, how can we help? Register for free and get instant answers to the most common questions.
                                    View, ask, answer, like or dislike questions about anything.</p>
                                <div className="social">
                                    <a href="https://www.youtube.com/"
                                        target="_blank" className="youtube"><FontAwesomeIcon icon={faYoutube} size="2x" /></a>
                                    <a href="https://www.facebook.com/"
                                        target="_blank" className="facebook"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
                                    <a href="https://www.instagram.com/"
                                        target="_blank" className="instagram"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
                                    <a href="https://twitter.com/"
                                        target="_blank" className="twitter"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
                                </div>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>

                    <div className="footer-copyright text-center py-3">
                        <MDBContainer fluid>
                            &copy; Copyright: All Rights Reserved by Dorina
                        </MDBContainer>
                    </div>
                </MDBFooter>
            </div>
        );
    }
}

export default Footer;