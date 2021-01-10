//import React from 'react';
import React, { Component } from 'react';
import { Container, Card, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'



class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    // componentDidMount = () => {
    //     this.props.handleCards
    // }
    render() {

        { console.log('141414414141', this.props.game) }
        return (
            <Container>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{this.props.game.name}</Card.Title>
                        <Card.Img variant="top" src={this.props.game.background_image} />
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Container>
        );
    }
}

export default Cards;