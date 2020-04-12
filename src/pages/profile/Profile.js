import React, { Component } from 'react';
import './Profile.css';
import image from '../components/images/profile.jpg';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

class Profile extends Component {
    render() {
        return (
            <div>
                <div className="header col-lg-7 col-md-7 col-12 mx-auto my-4" >
                    <div className="row py-4">
                        <div className="col-lg-3 col-md-3 col-12 text-center">
                            <img src={image}
                                className="img-fluid z-depth-1 rounded-circle align-self-center ml-2" />
                        </div>

                        <div className="col-lg-6 col-md-6 col-12 text-left align-self-center">
                            <h1 className="text-center text-lg-left">Barbara Taylor</h1>
                            <h4 className="text-center text-lg-left">Web Developer, 26</h4>
                        </div>

                        <div className="button col-lg-3 col-md-3 col-12 align-self-top pr-lg-2 text-center">
                            <Button variant="light" size="sm"><Link to='/editProfile' className="text-dark">Edit Profile</Link></Button>
                        </div>
                    </div>
                </div>

                <div className="myActivity">
                    <div className="col-lg-12 col-md-12 col-12">
                        <div className="activity col-lg-5 col-md-5 col-12 row p-3 mx-auto">
                            <div className="col-lg-6 col-md-6 col-12 ">
                                <p className="text-center">Total Asked Questions</p>
                                <h5 className="text-center"> 45 </h5>
                            </div>
                            <div className="col-lg-6 col-md-6 col-12">
                                <p className="text-center">Total Answered Questions</p>
                                <h5 className="text-center">83</h5>
                            </div>
                        </div>
                        <br />
                    </div>
                </div>

                <div className="aboutMe" >
                    <h1 className="text-center">About Me</h1>
                    <p className="col-lg-7 col-md-7 col-12 mx-auto my-4 text-center">I do this for a living and love what I do as every day there is something new and exciting to learn.
                    I graduated from university Hull School of Art and Design where I studied web design and got a first class degree with honours.
                    I spend a lot of time learning new techniques and actively help other people learn web development through
                    a variety of help groups and writing web development tutorials for my website and blog about advancements
                          in web design and development.</p>
                </div>
            </div >
        );
    }
}
export default Profile;