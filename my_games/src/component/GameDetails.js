import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Progress, Rate, ButtonToolbar, Drawer,Carousel } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import { Container, Card, Col, Row } from 'react-bootstrap'
import ReactPlayer from 'react-player'
import { MdFavorite } from "react-icons/md";
class GameDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            isFave: false,
            active: false,
        };
        this.close = this.close.bind(this);
        this.toggleDrawer = this.toggleDrawer.bind(this);
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(e) {
        e.stopPropagation()
        console.log('Handling Fave click!')
        this.setState({
            isFave: !this.state.isFave
        })
        
        this.props.onFaveToggle()
    }


    handleActiveClick = () => {
        this.setState({ active: !this.state.active })
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
        const textStyle = {
            verticalAlign: 'top',
            lineHeight: '42px',
            display: 'inline-block'
        };

        // const temp = this.props.game.short_screenshots.array.forEach(element, i => {
        //     console.log(element, i)
        // })
        return (
            <div>
                <ButtonToolbar>
                <Col className='cardBody' onClick={this.toggleDrawer} lg={3}>
                <Card className='card' style={{ width: '18rem' }}>
                        <Card.Body className='cardBody' onClick={this.handleActiveClick}>
                            <Card.Title>{this.props.game.name}</Card.Title>
                            <Card.Img className='imgCard' variant="top" src={this.props.game.background_image} />
                            
                            {/* <button className='btnCard'><MdFavorite color='white'/></button> */}
                            {/* <div><MdFavorite color='white'/></div> */}
                            <div className='pointer' onClick={this.handleClick}>{(this.state.isFave) ? <MdFavorite color='red' /> : <MdFavorite />}</div>
                            {/* <Button className='btnCard' variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card>
                    </Col>
                    {/* <Button onClick={this.toggleDrawer}>Details</Button> */}
                </ButtonToolbar>
                <Drawer
                    show={this.state.show}
                    onHide={this.close}
                >
                    <Drawer.Header>
                        <Card.Img className='imgCardIn' variant="top" src={this.props.game.background_image} />
                        <Drawer.Title>{this.props.game.name}</Drawer.Title>
                        
                    </Drawer.Header>
                    <Drawer.Body>
                        {/* <Card.Img className='imgCardIn' variant="top" src={this.props.game.background_image} /> */}
                        <Carousel autoplay className="custom-slider">
                            {/* {console.log(this.props.game.short_screenshots)} */}
                                <img
                                    src={this.props.game.short_screenshots[0].image}
                                    height="250"
                                />
                                <img
                                    src={this.props.game.short_screenshots[1].image}
                                    height="250"
                                />
                                <img
                                    src={this.props.game.short_screenshots[2].image}
                                    height="250"
                                />
                                <img
                                    src={this.props.game.short_screenshots[3].image}
                                    height="250"
                                />
                                <img
                                    src={this.props.game.short_screenshots[4].image}
                                    height="250"
                                />
                                <img
                                    src={this.props.game.short_screenshots[5].image}
                                    height="250"
                                />
                                <img
                                    src={this.props.game.short_screenshots[6].image}
                                    height="250"
                                />
                                
                            </Carousel>
                        {/* <Card.Text className='Rating'>Rating:
                        </Card.Text> */}
                        <div className='detailsbtn'>
                            {/* <div style={style}>
                                <Circle className='RatingPer' percent={parseInt((this.props.game.rating / 5) * 100)} strokeColor={parseInt((this.props.game.rating / 5) * 100) >= 90 ? "green" : "yellow"} />
                            </div> */}
                            <div>
                                <Rate defaultValue={this.props.game.rating} allowHalf readOnly size="md" />
                                <span style={textStyle}>{this.props.game.rating} / 5 </span>
                                <span className='ratings_count' style={textStyle}>({this.props.game.ratings_count})</span>
                            </div>
                        </div>
                        <div>
                        <ReactPlayer volume={0.1} width={560} controls url={this.props.game.clip.clips['full']} />
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