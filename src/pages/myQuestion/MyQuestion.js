import React, { Component } from 'react';
import './MyQuestion.css';
import MyQuestionsTwo from '../myQuestion/MyQuestionsTwo';

class MyQuestions extends Component {
    render() {
        return (

            <div className="myQuestionBackground">
                <div>
                    <br />
                    <h1 className="text-center">My Questions</h1>
                    <br />
                </div>
                <div>
                    <div className="container-fluid d-flex justify-content-center">
                        <div className="row">
                            <div className="col-md-6">
                                <MyQuestionsTwo MyQuestions="How to make a responsive website?" />
                                <MyQuestionsTwo MyQuestions="How to make a responsive website?" />
                                <MyQuestionsTwo MyQuestions="How to make a responsive website?" />
                                <MyQuestionsTwo MyQuestions="How to make a responsive website?" />
                                <MyQuestionsTwo MyQuestions="How to make a responsive website?" />
                                <MyQuestionsTwo MyQuestions="How to make a responsive website?" />
                                <MyQuestionsTwo MyQuestions="How to make a responsive website?" />
                                <MyQuestionsTwo MyQuestions="How to make a responsive website?" />
                                <MyQuestionsTwo MyQuestions="How to make a responsive website?" />
                                <MyQuestionsTwo MyQuestions="How to make a responsive website?" />
                            </div>

                            <div className="col-md-6">
                                <MyQuestionsTwo MyQuestions="How to make a responsive website?" />
                                <MyQuestionsTwo MyQuestions="How to make a responsive website?" />
                                <MyQuestionsTwo MyQuestions="How to make a responsive website?" />
                                <MyQuestionsTwo MyQuestions="How to make a responsive website?" />
                                <MyQuestionsTwo MyQuestions="How to make a responsive website?" />
                                <MyQuestionsTwo MyQuestions="How to make a responsive website?" />
                                <MyQuestionsTwo MyQuestions="How to make a responsive website?" />
                                <MyQuestionsTwo MyQuestions="How to make a responsive website?" />
                                <MyQuestionsTwo MyQuestions="How to make a responsive website?" />
                                <MyQuestionsTwo MyQuestions="How to make a responsive website?" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MyQuestions;