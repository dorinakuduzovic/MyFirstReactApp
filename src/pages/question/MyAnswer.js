import React, { Component } from 'react';
import { MDBIcon } from "mdbreact";
import Avatar from '@material-ui/core/Avatar';
import Image from '../components/images/myAvatar.jpg';
import './myAnswer.css';

const MyAnswer = () => {
    return (
        <div>
            <div className="myAnswer col-lg-8 col-md-10 col-12 mx-auto p-4">
                <div>
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-8 row">
                            <Avatar src={Image} />
                            <h4 className="ml-2">My Answer: </h4>
                        </div>
                        <div className="col-lg-3 col-md-3 col-4 text-right">
                            <MDBIcon icon="trash" className="mx-1" />
                            <MDBIcon icon="edit" className="ml-2" />
                        </div>
                    </div>
                    <br />
                    <h5>When building a responsive website, or making responsive an existing site, the first thing to look at is the layout.
                    When I build responsive websites, I always start by creating a non-responsive layout, fixed at the default size.</h5>
                </div>
            </div>
        </div>
    );
}
export default MyAnswer;
