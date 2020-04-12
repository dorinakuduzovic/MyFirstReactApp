import React, { Component } from 'react';
import './AskQuestion.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class AskQuestion extends Component {
    render() {
        return (
            <div className="askQuestion">
                <div>
                    <h1 className="text-center">Ask a Question</h1>
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                    />
                </div>
            </div>
        );
    }
}

export default AskQuestion;