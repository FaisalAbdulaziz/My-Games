import React, { useState, useEffect } from 'react';
import './App.css';
import { Container, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import CardList from './component/CardList';
import axios from "axios"
import Navbar from "./component/Navbar.js"
require('dotenv').config()


const App = () => {

    const [gameData, setGameData] = useState(() => [])
    const [faves, setFaves] = useState(() => [])
    const [filter, setFilter] = useState(() => 'all')
    const [page, setPage] = useState(() => 1)
    const [pageS, setPageS] = useState(() => 1)
    const [load, setLoad] = useState(() => 'More Games')
    const [search, setSearch] = useState(() => [])
    const [name, setName] = useState(() => "")

    const handleFilterClick = (filter) => {
        setFilter(prevFilter => prevFilter = filter)
    }

    const handleSearchClick = (name) => {
        const url = `https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}&search=${name}`
        axios({
            method: 'GET',
            url: url
        }).then(response => {
            setSearch(prevSearch => prevSearch = (response.data.results))
            setName(prevName => prevName = name)
            response.data.results.forEach(element => {
                axios({
                    method: 'GET',
                    url: `https://api.rawg.io/api/games/${element.id}/movies?key=${process.env.REACT_APP_API_KEY}`
                }).then(response => {
                    response.data.results[0] == undefined? console.log("no clip") : element.trailer = response.data.results[0].data.max
                })
            });
        })
        handleFilterClick('search')
    }
    const handleSearchClickMore = () => {
        const url = `https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}&page=${pageS}&search=${name}`
        axios({
            method: 'GET',
            url: url
        }).then(response => {
            setSearch(prevSearch => prevSearch.concat(response.data.results))
            setLoad(prevLoad => prevLoad = 'More Games')
            response.data.results.forEach(element => {
                axios({
                    method: 'GET',
                    url: `https://api.rawg.io/api/games/${element.id}/movies?key=${process.env.REACT_APP_API_KEY}`
                }).then(response => {
                    response.data.results[0] == undefined? console.log("no clip") : element.trailer = response.data.results[0].data.max
                })
            });
        })
        handleFilterClick('search')

    }
    const call = () => {
        // const url = `https://api.rawg.io/api/games?page=1`
        const url = `https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}&page=1`

        axios({
            method: 'GET',
            url: url
        }).then(response => {
            setGameData(prevGameData => prevGameData = response.data.results)
            response.data.results.forEach(element => {
                axios({
                    method: 'GET',
                    url: `https://api.rawg.io/api/games/${element.id}/movies?key=${process.env.REACT_APP_API_KEY}`
                }).then(response => {
                    response.data.results[0] == undefined? console.log("no clip") : element.trailer = response.data.results[0].data.max
                })
            });
        })
    }
    
    const call2 = (num) => {
        const url = `https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}&page=${num}`
        
        axios({
            method: 'GET',
            url: url
        }).then(response => {
            setGameData(prevGameData => prevGameData.concat(response.data.results))
            setLoad(prevLoad => prevLoad = 'More Games')
            response.data.results.forEach(element => {
                axios({
                    method: 'GET',
                    url: `https://api.rawg.io/api/games/${element.id}/movies?key=${process.env.REACT_APP_API_KEY}`
                }).then(response => {
                    response.data.results[0] == undefined? console.log("no clip") : element.trailer = response.data.results[0].data.max
                })
            });
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
        if (pageS > 1 && filter === 'search') {
            handleSearchClickMore()
        } else if (page > 1 && filter === 'all') {
            call2(page)
        }
    }, [page, pageS])

    const loading = (e) => {
        e.preventDefault();
        setLoad(prevLoad => prevLoad = 'Loading...')
        if (filter === 'all') {
            setPage(prevPage => prevPage + 1)
        } else if (filter === 'search') {
            setPageS(prevPage => prevPage + 1)
        }
        
    }
    const cardlist1 = ((filter === 'all' || filter === 'fav') && search.length > 0 ? setSearch(prevSearch => prevSearch = []) : null)
    const cardlist = (gameData ? <div>
        <CardList className='card-container' setFave={() => setFave} filter={filter} search={search} games={gameData} faves={faves} onFaveToggle={handleFaveToggle}></CardList>
    </div> : null)

    return (
        <div className="App">
            <Navbar search={search} handleSearchClick={handleSearchClick} handleFilterClick={handleFilterClick}></Navbar>
            <header className="App-header">
                {filter === 'all' || filter === 'search' ? <h1 className='h1Header'>My Games</h1> : <h1 className='h1Header'>Favourite Games</h1>}
                <Container>

                    {cardlist}

                </Container>
                {filter === 'all' || filter === 'search' ? <Button id='moreBtn' variant="light" onClick={loading}>{load}</Button> : null}

            </header>
        </div>
    );
}

export default App;