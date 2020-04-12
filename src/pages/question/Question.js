import React, { Component } from 'react';
import './Question.css';
import InputComment from '../question/InputComment';
import MyAnswer from './MyAnswer';
import Answer from './Answer';
import Avatar from '@material-ui/core/Avatar';
import Image from '../components/images/avatar.jpg';
import { MDBIcon } from "mdbreact";
import Button from 'react-bootstrap/Button';

class Question extends Component {
    render() {
        return (
            <div>
                <div className="questionPage col-lg-8 col-md-10 col-12 mx-auto p-4">
                    <div className="question">
                        <div className="row">
                            <div className="col-lg-9 col-md-9 col-8 row">
                                <Avatar src={Image} />
                                <h3 className="ml-2">Question #1:</h3>
                            </div>
                            <div className="col-lg-3 col-md-3 col-4 text-right">
                                <MDBIcon icon="thumbs-up" className="mx-1" />
                                <MDBIcon icon="thumbs-down" className="ml-2" />
                            </div>
                        </div>
                        <br />
                        <h4>How to make responsive website using HTML and CSS?</h4>
                    </div>
                    <br />
                    <div className="buttonAnswer">
                        <Button variant="light" >Answer</Button>
                    </div>
                    <br />
                </div>
                <InputComment />
                <MyAnswer />
                <Answer />
            </div >
        );
    }
}
export default Question;