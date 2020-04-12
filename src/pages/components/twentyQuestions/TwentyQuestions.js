import React, { Component } from 'react';
import './TwentyQuestions.css';
import Questions from '../twentyQuestions/Questions';

class TwentyQuestions extends Component {
    render() {
        return (

            <div className="twentyQuestions">
                <div >
                    <br />
                    <h1 className="text-center">Frequently Asked Questions</h1>
                    <br />
                </div>
                <div>
                    <div className="container-fluid d-flex justify-content-center">
                        <div className="row">
                            <div className="col-md-6">
                                <Questions questions="How to make a responsive website?" />
                                <Questions questions="How to make a responsive website?" />
                                <Questions questions="How to make a responsive website?" />
                                <Questions questions="How to make a responsive website?" />
                                <Questions questions="How to make a responsive website?" />
                                <Questions questions="How to make a responsive website?" />
                                <Questions questions="How to make a responsive website?" />
                                <Questions questions="How to make a responsive website?" />
                                <Questions questions="How to make a responsive website?" />
                                <Questions questions="How to make a responsive website?" />
                            </div>

                            <div className="col-md-6">
                                <Questions questions="How to make a responsive website?" />
                                <Questions questions="How to make a responsive website?" />
                                <Questions questions="How to make a responsive website?" />
                                <Questions questions="How to make a responsive website?" />
                                <Questions questions="How to make a responsive website?" />
                                <Questions questions="How to make a responsive website?" />
                                <Questions questions="How to make a responsive website?" />
                                <Questions questions="How to make a responsive website?" />
                                <Questions questions="How to make a responsive website?" />
                                <Questions questions="How to make a responsive website?" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TwentyQuestions;




