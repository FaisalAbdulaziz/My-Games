//import React from 'react';
import React, { Component } from 'react';
import { Container, Card, Col, Row, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import { MdFavorite } from "react-icons/md";
import GameDetails from './GameDetails';

class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFave: false,
            active: false,
        };
        this.handleClick = this.handleClick.bind(this)
    }
    // componentDidMount = () => {
    //     this.props.handleCards
    // }

    handleClick(e) {
        e.stopPropagation()
        console.log('Handling Fave click!')
        this.setState({
            isFave: !this.state.isFave
        })
        
        this.props.onFaveToggle()
    }


    handleActiveClick = () => {
        this.setState({ active: !this.state.active })
    }


    render() {

        
        // { console.log('141414414141', this.props.game) }
        return (
            <Col lg={3}>
                <Card className='card' style={{ width: '18rem' }}>
                        <Card.Body className='cardBody' onClick={this.handleActiveClick}>
                            <Card.Title>{this.props.game.name}</Card.Title>
                            <Card.Img className='imgCard' variant="top" src={this.props.game.background_image} />
                            
                            {/* <button className='btnCard'><MdFavorite color='white'/></button> */}
                            {/* <div><MdFavorite color='white'/></div> */}
                            <div className='pointer' onClick={this.handleClick}>{(this.state.isFave) ? <MdFavorite color='red' /> : <MdFavorite />}</div>
                            {/* <Button className='btnCard' variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                        {/* <GameDetails active={this.state.active} game={this.props.game} ></GameDetails> */}
                    </Card>
                    </Col>
        );
    }
}

export default Cards;