import React, { Component } from 'react';
import './HotQuestions.css';
import HotQuestionsTwo from '../hotQuestions/HotQuestionsTwo';

class HotQuestions extends Component {
    render() {
        return (

            <div className="popularQuestions">
                <div>
                    <br />
                    <h1 className="text-center">Popular Questions</h1>
                    <br />
                </div>

                <div>
                    <div className="container-fluid d-flex justify-content-center">
                        <div className="row">
                            <div className="col-md-4">
                                <HotQuestionsTwo hotQuestions="How to make a responsive website?" />
                                <HotQuestionsTwo hotQuestions="How to make a responsive website?" />
                                <HotQuestionsTwo hotQuestions="How to make a responsive website?" />
                            </div>

                            <div className="col-md-4">
                                <HotQuestionsTwo hotQuestions="How to make a responsive website?" />
                                <HotQuestionsTwo hotQuestions="How to make a responsive website?" />
                                <HotQuestionsTwo hotQuestions="How to make a responsive website?" />
                            </div>

                            <div className="col-md-4">
                                <HotQuestionsTwo hotQuestions="How to make a responsive website?" />
                                <HotQuestionsTwo hotQuestions="How to make a responsive website?" />
                                <HotQuestionsTwo hotQuestions="How to make a responsive website?" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HotQuestions;