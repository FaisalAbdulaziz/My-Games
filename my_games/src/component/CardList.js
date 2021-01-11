//import React from 'react';
import React, { Component } from 'react';
import { Container,Row,CardGroup,Col, Card, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import GameDetails from './GameDetails'



class CardList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allCards: [],
            filter: 'all',
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
        { console.log('555', this.props.games) }
        const allCards = this.props.games.map((game) => {
            return ( 
                <GameDetails
                    game={game}
                    key={game.id}
                    onFaveToggle={() => this.props.onFaveToggle(game)}
                    games={this.props.games}
                    isFave={this.props.games.includes(game)}
                ></GameDetails>)
        })

        const fav = this.props.faves.map((game) => {
            return (
                <GameDetails
                    game={game}
                    key={game.id}
                    onFaveToggle={() => this.props.onFaveToggle(game)}
                    games={this.props.games}
                    isFave={this.props.games.includes(game)}
                ></GameDetails>
            )
        })
        
        // { console.log('555', this.props.games) }
        // { console.log('6666', allCards) }
        return (
            <div>
                
                <Row>
                    {this.props.filter === 'all' ? allCards : fav }
                    {/* {allCards} */}
                </Row>
                {this.props.filter === 'fav' && this.props.faves.length > 0 ? <Button onClick={this.props.setFave()} variant="outline-danger">Remove all</Button> :"" }
                
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