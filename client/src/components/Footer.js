import React from 'react';
import Card from 'react-bootstrap/Card';

export default function Footer() {
    return (
        <Card>
            <Card.Footer style={{"background-color": "#51247A", "color": "white", "text-align": 'center'}}>
                <br/>Created by Gambrel 2021<br/></Card.Footer>
        </Card>
    );
}
