import React from 'react';
import Card from 'react-bootstrap/Card';

const PopularPeople = props => {
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={props.imgsrc} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.text}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default PopularPeople;