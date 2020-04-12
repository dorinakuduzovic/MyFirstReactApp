import React, { Component } from 'react';
import './Login.css';
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

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: null,
            password: null,
            formErrors: {
                email: "",
                password: ""
            }
        };
    }

    handleSubmit = e => {
        e.preventDefault();
        if (formValid(this.state)) {
            console.log(`
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
            <div className="container col-lg-12 col-md-12 col-12 py-3" style={myStyle}>
                <div className="col-lg-4 col-md-4 col-12 py-4 bg-register my-4 justify-content-center mx-auto">
                    <div className="text-center my-3">
                        <h1>Login</h1>
                    </div>

                    <form onSubmit={this.handleSubmit} noValidate>
                        <div className="row ">
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
                            <Button variant="light" type="submit">Login</Button>
                            <Link to="/register">Don't have an account?</Link>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
export default Login;