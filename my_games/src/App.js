import React, { useState, useEffect } from 'react';
import './App.css';
import { Container, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import CardList from './component/CardList';
import axios from "axios"
import Navbar from "./component/Navbar.js"



const App = () => {

    const [gameData, setGameData] = useState(() => null)
    const [faves, setFaves] = useState(() => [])
    const [filter, setFilter] = useState(() => 'all')
    const [page, setPage] = useState(() => 1)
    const [load, setLoad] = useState(() => 'More Games')

    const handleFilterClick = (filter) => {
        setFilter(prevFilter => prevFilter = filter)
    }

    const call = () => {
        const url = `https://api.rawg.io/api/games?page=1`

        axios({
            method: 'GET',
            url: url
        }).then(response => {
            setGameData(prevGameData => prevGameData = response.data.results)
        })
    }

    const call2 = (num) => {
        const url = `https://api.rawg.io/api/games?page=${num}`

        axios({
            method: 'GET',
            url: url
        }).then(response => {
            setGameData(prevGameData => prevGameData.concat(response.data.results))
            setLoad(prevLoad => prevLoad = 'More Games')
        })


    }

    const handleFaveToggle = (film) => {
        const fave = faves.slice(0)
        const filmIndex = fave.indexOf(film)
        filmIndex === -1 ? fave.push(film) : fave.splice(filmIndex, 1)
        setFaves(prevFave => prevFave = fave)
    }

    const setFave = () => {
        setFaves(prevFave => prevFave = [])
    }

    useEffect(() => {
        call()
    }, [])
    useEffect(() => {
        page === 1 ? console.log('') :
            call2(page)
    }, [page])

    const test = (e) => {
        e.preventDefault();
        setLoad(prevLoad => prevLoad = 'Loading...')
        setPage(prevPage => prevPage + 1)
    }
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
                {/* <button  onClick={test}>More Games</button> */}
                {filter === 'all' ? <Button className='moreBtn' variant="light" onClick={test}>{load}</Button> : null}

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
