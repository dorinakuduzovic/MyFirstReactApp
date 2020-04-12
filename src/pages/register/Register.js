import React, { Component } from 'react';
import './Register.css';
import Button from 'react-bootstrap/Button';
import Image from '../components/images/form.jpg'
import { Link } from 'react-router-dom';

const myStyle = {
    backgroundImage: `url(${Image})`,
    backgroundPosition: "top"
};

const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

const formValid = ({ formErrors, ...rest }) => {
    let valid = true;

    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false)
    });

    Object.values(rest).forEach(val => {
        val == null && (valid = false)
    });

    return valid;
}

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: null,
            lastName: null,
            email: null,
            password: null,
            formErrors: {
                firstName: "",
                lastName: "",
                email: "",
                password: ""
            }
        };
    }

    handleSubmit = e => {
        e.preventDefault();
        if (formValid(this.state)) {
            console.log(`
             First Name: ${this.state.firstName}
             Last Name: ${this.state.lastName}
             Email: ${this.state.email}
             Password: ${this.state.password}
             `)
        } else {
            console.error("Form is invalid")
        }
    };

    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = this.state.formErrors;

        switch (name) {
            case 'firstName':
                formErrors.firstName = value.length < 3 ? "Minimum 3 characters required" : "";
                break;

            case 'lastName':
                formErrors.lastName = value.length < 3 ? "Minimum 3 characters required" : "";
                break;

            case 'email':
                formErrors.email = emailRegex.test(value) &&
                    value.length > 0 ? "" : "Your email address is invalid";
                break;

            case 'password':
                formErrors.password = value.length < 5 &&
                    value.length > 0 ? "Minimum 5 characters required" : "";
                break;

            default:
                break;
        }

        this.setState({ formErrors, [name]: value },
            () => console.log(this.state));
    };

    render() {
        const { formErrors } = this.state;

        return (
            <div>
                <div className="container col-lg-12 col-md-12 col-12 py-4" style={myStyle}>
                    <div className="col-lg-6 col-md-6 col-12 py-4 bg-register my-4 justify-content-center mx-auto">
                        <div className="text-center my-4">
                            <h1>Create Account</h1>
                        </div>

                        <form onSubmit={this.handleSubmit} noValidate>
                            <div className="row">
                                <div className="col-md-6">
                                    <label htmlFor="firstName">First Name</label>
                                    <input
                                        className={formErrors.firstName.length > 0 ? "error form-control" : "form-control"}
                                        type="text"
                                        placeholder="First Name"
                                        name="firstName"
                                        noValidate
                                        onChange={this.handleChange}>
                                    </input>
                                    {formErrors.firstName.length > 0 && (
                                        <span className="errorMessage">{formErrors.firstName}</span>
                                    )}
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input
                                        className={formErrors.lastName.length > 0 ? "error form-control" : "form-control"}
                                        type="text"
                                        placeholder="Last Name"
                                        name="lastName"
                                        noValidate
                                        onChange={this.handleChange}>
                                    </input>
                                    {formErrors.lastName.length > 0 && (
                                        <span className="errorMessage">{formErrors.lastName}</span>
                                    )}
                                </div>

                                <div className="col-md-12">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        className={formErrors.email.length > 0 ? "error form-control" : "form-control"}
                                        type="email"
                                        placeholder="Email"
                                        name="email"
                                        noValidate
                                        onChange={this.handleChange}>
                                    </input>
                                    {formErrors.email.length > 0 && (
                                        <span className="errorMessage">{formErrors.email}</span>
                                    )}
                                </div>

                                <div className="col-md-12">
                                    <label htmlFor="password">Password</label>
                                    <input
                                        className={formErrors.password.length > 0 ? "error form-control" : "form-control"}
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        noValidate
                                        onChange={this.handleChange}>
                                    </input>
                                    {formErrors.password.length > 0 && (
                                        <span className="errorMessage">{formErrors.password}</span>
                                    )}
                                </div>
                            </div>

                            <div className="createAccount my-4">
                                <Button variant="light" type="submit">Create an Account</Button>
                                <Link to="/login">Already have an account?</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default Register; 