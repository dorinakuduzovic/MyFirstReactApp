import React, { Component } from 'react';
import PopularPeople from '../popularPeople/PopularPeople';
import ImageOne from '../images/man.jpg';
import ImageTwo from '../images/woman.jpg';
import ImageThree from '../images/womanTwo.jpg';
import ImageFour from '../images/manTwo.jpg';

class People extends Component {

    render() {
        return (
            <div className>
                <div>
                    <br />
                    <h1 className="text-center">Most Active Users</h1>
                    <br />
                </div>
                <div className="container-fluid d-flex justify-content-center">
                    <div className="row">

                        <div className="col-md-3">
                            <PopularPeople imgsrc={ImageOne} title="John Smith" text="Total Answered Questions: 187" />
                        </div>

                        <div className="col-md-3">
                            <PopularPeople imgsrc={ImageTwo} title="Nina Davis" text="Total Answered Questions: 156" />
                        </div>

                        <div className="col-md-3">
                            <PopularPeople imgsrc={ImageThree} title="Alice Jones" text="Total Answered Questions: 140" />
                        </div>

                        <div className="col-md-3">
                            <PopularPeople imgsrc={ImageFour} title="Aaron Wilson" text="Total Answered Questions: 122" />
                        </div>
                    </div>
                </div>
                <br />
            </div>
        );
    }
}
export default People;