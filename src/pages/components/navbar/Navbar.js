import React, { Component } from 'react';
import './Navbar.css';
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBIcon
} from "mdbreact";
import { Link } from 'react-router-dom';

class Navbar extends Component {
    state = {
        isOpen: false
    };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }
    render() {
        return (
            <div>
                <MDBNavbar color="teal lighten-4" expand="md">
                    <MDBNavbarBrand > <Link to="/">
                        <strong className="logo" >Help Center</strong></Link>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler className="pink lighten-3" onClick={this.toggleCollapse} >
                        <span className="white-text">
                            <MDBIcon icon="bars" />
                        </span>
                    </MDBNavbarToggler>
                    <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                        <MDBNavbarNav right >
                            <MDBNavItem >
                                <MDBNavLink className="black-text" to="/">Home</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink className="black-text" to="/myQuestion">My Questions</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink className="black-text" to="/">Notifications</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink className="black-text" to="/profile">My Profile</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink className="black-text" to="/login">Have an Account?</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink className="black-text" to="register">Sign Up</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink className="black-text" to="/">Log Out</MDBNavLink>
                            </MDBNavItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBNavbar>
            </div>
        );
    }
}

export default Navbar;