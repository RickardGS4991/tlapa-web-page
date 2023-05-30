import React from "react";
import { Card, Button } from "react-bootstrap"

function CardInformation({ title, text }) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title><h3>{title}</h3></Card.Title>
                <Card.Text>
                <p>{text}</p>
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}

export default CardInformation;