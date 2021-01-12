import React from 'react';
import { Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

function Navbar(props) {
    return (
        <Nav className='fixed-top' fill variant="tabs" /*defaultActiveKey="/home"*/>
            <Nav.Item>
                {/* <Nav.Link href="/home">All games</Nav.Link> */}
                <Nav.Link onClick={() => props.handleFilterClick('all')} >All games</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                {/* <Nav.Link href="/home">All games</Nav.Link> */}
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