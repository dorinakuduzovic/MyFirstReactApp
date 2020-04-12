import React, { Component } from 'react';
import Hero from '../components/hero/Hero';
import AskQuestion from '../components/askQuestion/AskQuestion';
import TwentyQuestions from '../components/twentyQuestions/TwentyQuestions';
import HotQuestions from '../components/hotQuestions/HotQuestions';
import People from '../components/popularPeople/People';

class Home extends Component {

    render() {
        return (
            <div>
                <Hero />
                <AskQuestion />
                <TwentyQuestions />
                <People />
                <HotQuestions />
            </div>
        );
    }
}
export default Home;
