import React, { Component } from 'react';
import Image from '../images/hero.jpg';

const myStyle = {
    backgroundImage: `url(${Image})`,
    color: "black",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    borderRadius: "0 0 3em 3em"
};

class Hero extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron jumbotron-fluid" style={myStyle} >
                    <div className="container ">
                        <h2 className="display-4">Welcome to Help Center</h2>
                        <h3>We're here to help you</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default Hero;