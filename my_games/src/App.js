import React, { Component } from 'react';
import './App.css';
import { Container, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import CardList from './component/CardList';
import axios from "axios"
import Navbar from "./component/Navbar.js"


class App extends Component {
    constructor(props) {

        super(props);

        this.state = {
            gameData: null,
            faves: [],
            filter: 'all',
        };

        //this.handleCards=this.handleCards.bind(this)
    }

    handleFilterClick = (filter) => {
        this.setState({ filter })
    }

    call = () => {
        const url = `https://api.rawg.io/api/games`

        axios({
            method: 'GET',
            url: url
        }).then(response => {
            console.log('uyuyuy', response.data.results)
            this.setState({ gameData: response.data.results })
        })
    }


    handleFaveToggle = (film) => {
        const faves = this.state.faves.slice(0)
        const filmIndex = this.state.faves.indexOf(film)
        filmIndex === -1 ? faves.push(film) : faves.splice(filmIndex, 1)
        this.setState({ faves })
    }

    componentDidMount() {
        this.call()
    }



    render() {
        console.log('hhhhh', this.state.gameData)
        const cardlist = (this.state.gameData ? <div>
            <CardList className='card-container' filter={this.state.filter} games={this.state.gameData} faves={this.state.faves} onFaveToggle={this.handleFaveToggle}></CardList>
        </div> : null)

        return (
            <div className="App">
                <Navbar handleFilterClick={this.handleFilterClick}></Navbar>
                <header className="App-header">
                    <Container>
                        {cardlist}
                    </Container>
                </header>
            </div>
        );
    }
}

export default App;
