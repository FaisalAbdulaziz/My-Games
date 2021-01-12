import React, { useState, useEffect } from 'react';
import './App.css';
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import CardList from './component/CardList';
import axios from "axios"
import Navbar from "./component/Navbar.js"



function App() {

    const [gameData, setGameData] = useState(() => null)
    const [faves, setFaves] = useState(() => [])
    const [filter, setFilter] = useState(() => 'all')

    function handleFilterClick(filter) {
        setFilter(prevFilter => prevFilter = filter)
    }

    function call() {
        const url = `https://api.rawg.io/api/games`

        axios({
            method: 'GET',
            url: url
        }).then(response => {
            setGameData(prevGameData => prevGameData = response.data.results)
        })
    }

    function handleFaveToggle(film) {
        const fave = faves.slice(0)
        const filmIndex = fave.indexOf(film)
        filmIndex === -1 ? fave.push(film) : fave.splice(filmIndex, 1)
        setFaves(prevFave => prevFave = fave)
    }

    function setFave() {
        setFaves(prevFave => prevFave = [])
    }

    useEffect(() => {
        call()
    }, [])

    const cardlist = (gameData ? <div>
        <CardList className='card-container' setFave={() => setFave} filter={filter} games={gameData} faves={faves} onFaveToggle={handleFaveToggle}></CardList>
    </div> : null)

    return (
        <div className="App">
            <Navbar handleFilterClick={handleFilterClick}></Navbar>
            <header className="App-header">
                <Container>

                    {cardlist}
                </Container>
            </header>
        </div>
    );
}

export default App;

























// import React, { Component } from 'react';
// import './App.css';
// import {Container} from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.css'
// import CardList from './component/CardList';
// import axios from "axios"
// import Navbar from "./component/Navbar.js"
// // import GameDetails from './component/GameDetails';
// // import Demo from './component/Demo.js';


// class App extends Component {
//     constructor(props) {

//         super(props);

//         this.state = {
//             gameData: null,
//             faves: [],
//             filter: 'all',
//         };

//         //this.handleCards=this.handleCards.bind(this)
//     }

//     handleFilterClick = (filter) => {
//         this.setState({ filter })
//     }

//     call = () => {
//         const url = `https://api.rawg.io/api/games`

//         axios({
//             method: 'GET',
//             url: url
//         }).then(response => {
//             console.log('uyuyuy', response.data.results)
//             this.setState({ gameData: response.data.results })
//         })
//     }


//     handleFaveToggle = (film) => {
//         const faves = this.state.faves.slice(0)
//         const filmIndex = this.state.faves.indexOf(film)
//         filmIndex === -1 ? faves.push(film) : faves.splice(filmIndex, 1)
//         this.setState({ faves })
//     }

//     setFave = () => {
//         this.setState({ faves: [] })
//     }

//     componentDidMount() {
//         this.call()
//     }



//     render() {
//         console.log('hhhhh', this.state.gameData)
//         const cardlist = (this.state.gameData ? <div>
//             <CardList className='card-container' setFave={()=>this.setFave} filter={this.state.filter} games={this.state.gameData} faves={this.state.faves} onFaveToggle={this.handleFaveToggle}></CardList>
//         </div> : null)

//         return (
//             <div className="App">
//                 <Navbar handleFilterClick={this.handleFilterClick}></Navbar>
//                 <header className="App-header">
//                     <Container>

//                         {cardlist}
//                     </Container>
//                 </header>
//             </div>
//         );
//     }
// }

// export default App;
