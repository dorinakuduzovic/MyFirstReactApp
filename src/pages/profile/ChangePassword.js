import React, { Component } from 'react';
import './ChangePassword.css';
import Button from 'react-bootstrap/Button';
import Image from '../components/images/form.jpg'

const myStyle = {
    backgroundImage: `url(${Image})`,
    backgroundPosition: "top"
};

class ChangePassword extends Component {
    render() {
        return (
            <div>
                <div className="container col-lg-12 col-md-12 col-12 py-4" style={myStyle}>
                    <div className="col-lg-4 col-md-6 col-12 py-4 bg-register my-4 justify-content-center mx-auto">
                        <div className="text-center my-4">
                            <h1>Change Password</h1>
                        </div>

                        <form>
                            <div className="row">
                                <div className="col-md-12">
                                    <label htmlFor="password">Old Password</label>
                                    <input
                                        className="form-control"
                                        type="password"
                                        placeholder="Old Password"
                                        name="password"
                                    />
                                </div>

                                <div className="col-md-12">
                                    <label htmlFor="password">New Password</label>
                                    <input
                                        className="form-control"
                                        type="password"
                                        placeholder="New Password"
                                        name="password"
                                    />
                                </div>

                                <div className="col-md-12">
                                    <label htmlFor="password">Confirm New Password</label>
                                    <input
                                        className="form-control"
                                        type="password"
                                        placeholder="Confirm New Password"
                                        name="password"
                                    />
                                </div>

                                <div className="createAccount my-4">
                                    <Button variant="light" type="submit">Save Changes</Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default ChangePassword;