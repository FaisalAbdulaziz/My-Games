import React from 'react';
import { Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import { InputGroup, Input, Icon } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';

const Navbar = (props) => {
    const styles = {
        width: 300,
        marginTop: 10,
        marginBottom: 5
    };
    return (
        <Nav id='fixed-top' fill>
            <Nav.Item id='navtabs'>
                <Nav.Link onClick={() => props.handleFilterClick('all')} >All games</Nav.Link>
            </Nav.Item>
            <InputGroup inside style={styles}>
                <Input placeholder="Game name" onChange={(event) => props.handleSearchClick(event)} />
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