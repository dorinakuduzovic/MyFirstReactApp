import React, { Component } from 'react';
import './EditProfile.css';
import Button from 'react-bootstrap/Button';
import Image from '../components/images/form.jpg'
import { Link } from 'react-router-dom';

const myStyle = {
    backgroundImage: `url(${Image})`,
    backgroundPosition: "top"
};

class EditProfile extends Component {
    render() {
        return (
            <div>
                <div className="container col-lg-12 col-md-12 col-12 py-4" style={myStyle}>
                    <div className="col-lg-6 col-md-6 col-12 py-4 bg-register my-4 justify-content-center mx-auto">
                        <div className="text-center my-4">
                            <h1>Edit Profile</h1>
                        </div>

                        <form >
                            <div className="row">
                                <div className="col-md-6">
                                    <label htmlFor="firstName">First Name</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="First Name"
                                        name="firstName">
                                    </input>
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Last Name"
                                        name="lastName">
                                    </input>
                                </div>

                                <div className="col-md-12">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        className="form-control"
                                        type="email"
                                        placeholder="Email"
                                        name="email">
                                    </input>
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="bio">Bio</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Bio"
                                        name="bio" >
                                    </input>
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="age">Age</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Age"
                                        name="age" >
                                    </input>
                                </div>

                                <div className="col-md-12">
                                    <label htmlFor="about">About me</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="About me"
                                        name="about" >
                                    </input>
                                </div>
                            </div>

                            <div className="createAccount my-4">
                                <Button variant="light" type="submit">Save Changes</Button>
                                <Link to="/changePassword">Do you want change password?</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default EditProfile;