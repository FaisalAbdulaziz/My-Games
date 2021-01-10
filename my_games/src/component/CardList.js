//import React from 'react';
import React, { Component } from 'react';
//import { Container, Card, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import Cards from './Cards'



class CardList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allCards: []
        };
        console.log('77777')
    }

    // componentDidMount = ()=>{
    //     console.log('rrrrr',this.props.games)
    //     const allCards = this.props.games.map((game) => {
    //         {console.log('0000')}
    //             <Cards
    //             game={game}
    //             key={game.id}
    //             ></Cards>
    //     })
    //     this.setState({
    //         allCards:allCards
    //     })
    // }

    render() {
        const allCards = this.props.games.map((game) => {
            { console.log('555', game) }
            return (
                <Cards
                    game={game}
                    key={game.id}
                ></Cards>)
        })
        { console.log('555', this.props.games) }
        { console.log('6666', allCards) }
        return (
            <div>
                    {allCards}
            </div>




            // <Card style={{ width: '18rem' }}>
            //     <Card.Body>
            //         <Card.Title>{this.state.name}</Card.Title>
            //         <Card.Img variant="top" src={this.state.img} />
            //         <Button variant="primary">Go somewhere</Button>
            //     </Card.Body>
            // </Card>
        );
    }
}

export default CardList;