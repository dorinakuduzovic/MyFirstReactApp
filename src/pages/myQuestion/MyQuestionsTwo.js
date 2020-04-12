import React from 'react';
import './MyQuestion.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faThumbsUp,
    faThumbsDown,
    faComments
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const MyQuestionsTwo = (props) => {

    return (
        <div>
            <div className="myQuestions">
                <Link to="/question">
                    <h5>{props.MyQuestions}</h5> </Link>

                <div className="row iconss">
                    <p> <FontAwesomeIcon icon={faThumbsUp} size="1x" > </FontAwesomeIcon>  320</p>
                    <p> <FontAwesomeIcon icon={faThumbsDown} size="1x" > </FontAwesomeIcon>  20</p>
                    <p> <FontAwesomeIcon icon={faComments} size="1x" /> 120</p>
                </div>
            </div>
            <br />
        </div>
    );
}

export default MyQuestionsTwo;




