import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Progress, Radio, ButtonToolbar, Drawer } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import { Container, Card, Col, Row } from 'react-bootstrap'


class GameDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
        this.close = this.close.bind(this);
        this.toggleDrawer = this.toggleDrawer.bind(this);
    }
    close() {
        this.setState({
            show: false
        });
    }
    toggleDrawer() {
        this.setState({ show: true });
    }
    render() {
        const { Circle } = Progress;
        const style = {
            width: 120,
            display: 'inline-block',
            marginRight: 10
        };

        const temp=((this.props.active) ? this.toggleDrawer : null)
        return (
            <div>
                {temp}
                <ButtonToolbar>
                    <Button onClick={this.toggleDrawer}>Details</Button>
                </ButtonToolbar>
                <Drawer
                    show={this.state.show}
                    onHide={this.close}
                >
                    <Drawer.Header>
                        <Drawer.Title>{this.props.game.name}</Drawer.Title>
                    </Drawer.Header>
                    <Drawer.Body>
                        <Card.Img className='imgCardIn' variant="top" src={this.props.game.background_image} />
                        <Card.Text className='Rating'>Rating:
                        </Card.Text>
                        <div>
                            <div style={style}>
                                <Circle  className='RatingPer' percent={parseInt((this.props.game.rating/5)*100)} strokeColor={parseInt((this.props.game.rating/5)*100)>=90?"green":"yellow"} />
                            </div>
                        </div>
                    </Drawer.Body>
                    <Drawer.Footer>
                        <Button onClick={this.close} appearance="primary">Confirm</Button>
                        <Button onClick={this.close} appearance="subtle">Cancel</Button>
                    </Drawer.Footer>
                </Drawer>
            </div>
        );
    }

}

export default GameDetails;
// ReactDOM.render(<Demo />);