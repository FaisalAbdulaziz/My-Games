import React from 'react';
import { Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import { InputGroup, Input,Icon} from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';

const Navbar = (props) => {
    const styles = {
        width: 300,
        marginTop: 10,
        marginBottom: 5
    };
    return (
        <Nav id='fixed-top' fill /*defaultActiveKey="/home"*/>
            <Nav.Item id='navtabs'>
                <Nav.Link onClick={() => props.handleFilterClick('all')} >All games</Nav.Link>
            </Nav.Item>
            {/* <Nav.Item id='navtabs'>
                <Nav.Link onClick={() => props.handleFilterClick('search')} >Search for game</Nav.Link>
            </Nav.Item> */}
            <InputGroup inside style={styles}>
                <Input placeholder="Game name" onChange={(event) => props.handleSearchClick(event)}/>
                <InputGroup.Button>
                    <Icon icon="search" />
                </InputGroup.Button>
            </InputGroup>
            <Nav.Item id='navtabs'>
                <Nav.Link onClick={() => props.handleFilterClick('fav')}>Fav games</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}
export default Navbar;



// import React, { Component } from 'react';
// import { Nav } from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.css'

// class Navbar extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {};
//     }
//     render() {
//         return (
//             <Nav className='fixed-top' fill variant="tabs" /*defaultActiveKey="/home"*/>
//                 <Nav.Item>
//                     {/* <Nav.Link href="/home">All games</Nav.Link> */}
//                     <Nav.Link onClick={() => this.props.handleFilterClick('all')} >All games</Nav.Link>
//                 </Nav.Item>
//                 <Nav.Item>
//                     {/* <Nav.Link href="/home">All games</Nav.Link> */}
//                     <Nav.Link onClick={() => this.props.handleFilterClick('fav')}>Fav games</Nav.Link>
//                 </Nav.Item>
//             </Nav>
//         );
//     }
// }

// export default Navbar;