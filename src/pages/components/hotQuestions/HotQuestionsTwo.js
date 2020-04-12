import React from 'react';
import './HotQuestions.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faThumbsUp,
    faThumbsDown,
    faComments
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const HotQuestionsTwo = (props) => {

    return (
        <div>
            <div className="hotQuestions">
                <Link to="/question">
                    <h5>{props.hotQuestions}</h5> </Link>

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

export default HotQuestionsTwo;




