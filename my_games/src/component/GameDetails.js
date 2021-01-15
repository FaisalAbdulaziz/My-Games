import React, { useState } from 'react';
import { Button, Rate, ButtonToolbar, Drawer } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import ReactPlayer from 'react-player'
import Cards from './Cards.js'
import { Carousel } from 'react-bootstrap'

const GameDetails = (props) => {
    const [show, setShow] = useState(() => false)

    const close = () => {
        setShow(prevShow => prevShow = false)
    }

    const toggleDrawer = () => {
        setShow(prevShow => prevShow = true)
    }

    const textStyle = {
        verticalAlign: 'top',
        lineHeight: '42px',
        display: 'inline-block'
    };
    return (
        <div>
            <ButtonToolbar>
                <Cards
                    filter={props.filter}
                    game={props.game}
                    key={props.game.id}
                    onFaveToggle={() => props.onFaveToggle(props.game)}
                    faves={props.faves}
                    games={props.games}
                    toggleDrawer={() => toggleDrawer}
                // isFave={props.games.includes(props.game)}
                ></Cards>
            </ButtonToolbar>

            <Drawer
                id='drawer'
                show={show}
                onHide={close}
            >
                <div id='drawer'>
                    <Drawer.Header >
                        <div className='imgAndName'>
                            <img alt="" className='imgCardTop' src={props.game.background_image} />
                        </div>
                        <div className='detailsbtn'>
                            <p>{props.game.name}</p>
                            <div>
                                <Rate defaultValue={props.game.rating} allowHalf readOnly size="md" />
                                <span style={textStyle}>{props.game.rating} / 5 </span>
                                <span className='ratings_count' style={textStyle}>({props.game.ratings_count})</span>
                            </div>
                        </div>
                    </Drawer.Header>
                    <Drawer.Body id='drawerBody'>








                        <Carousel >
                            {props.game.short_screenshots[0] === undefined ? console.log('No img') :
                            <Carousel.Item id='slideImg' interval={1000}>
                                    <img id='slideImg'
                                        src={props.game.short_screenshots[0].image}
                                        height="250"
                                        alt=""
                                    />
                            </Carousel.Item>
                            }
                            {props.game.short_screenshots[1] === undefined ? console.log('No img') :
                            <Carousel.Item id='slideImg' interval={1000}>
                                    <img id='slideImg'
                                        src={props.game.short_screenshots[1].image}
                                        height="250"
                                        alt=""
                                    />
                            </Carousel.Item>
                            }
                            {props.game.short_screenshots[2] === undefined ? console.log('No img') :
                            <Carousel.Item id='slideImg' interval={1000}>
                                    <img id='slideImg'
                                        src={props.game.short_screenshots[2].image}
                                        height="250"
                                        alt=""
                                    />
                            </Carousel.Item>
                            }
                            {props.game.short_screenshots[3] === undefined ? console.log('No img') :
                            <Carousel.Item id='slideImg' interval={1000}>
                                    <img id='slideImg'
                                        src={props.game.short_screenshots[3].image}
                                        height="250"
                                        alt=""
                                    />
                            </Carousel.Item>
                            }
                            {props.game.short_screenshots[4] === undefined ? console.log('No img') :
                            <Carousel.Item id='slideImg' interval={1000}>
                                    <img id='slideImg'
                                        src={props.game.short_screenshots[4].image}
                                        height="250"
                                        alt=""
                                    />
                            </Carousel.Item>
                            }
                            {props.game.short_screenshots[5] === undefined ? console.log('No img') :
                                <Carousel.Item id='slideImg' interval={1000}>
                                    <img id='slideImg'
                                        src={props.game.short_screenshots[5].image}
                                        height="250"
                                        alt=""
                                    />
                                </Carousel.Item>
                            }
                            {props.game.short_screenshots[6] === undefined ? console.log('No img') :
                                <Carousel.Item id='slideImg' interval={1000}>
                                    <img id='slideImg'
                                        src={props.game.short_screenshots[6].image}
                                        height="250"
                                        alt=""
                                    />
                                </Carousel.Item>
                            }
                        </Carousel>
















                        {/* {1 === undefined?console.log('undefined'):console.log(props.game.short_screenshots[0].image)} */}
                        {/* <Carousel shape={'bar'} autoplay className="custom-slider">
                            {props.game.short_screenshots[0] === undefined ? console.log('No img') : <img
                                src={props.game.short_screenshots[0].image}
                                height="250"
                                alt=""
                            />}

                            {props.game.short_screenshots[1] === undefined ? console.log('No img') : <img
                                src={props.game.short_screenshots[1].image}
                                height="250"
                                alt=""
                            />}
                            {props.game.short_screenshots[2] === undefined ? console.log('No img') : <img
                                src={props.game.short_screenshots[2].image}
                                height="250"
                                alt=""
                            />}
                            {props.game.short_screenshots[3] === undefined ? console.log('No img') : <img
                                src={props.game.short_screenshots[3].image}
                                height="250"
                                alt=""
                            />}
                            {props.game.short_screenshots[4] === undefined ? console.log('No img') : <img
                                src={props.game.short_screenshots[4].image}
                                height="250"
                                alt=""
                            />}
                            {props.game.short_screenshots[5] === undefined ? console.log('No img') : <img
                                src={props.game.short_screenshots[5].image}
                                height="250"
                                alt=""
                            />}
                            {props.game.short_screenshots[6] === undefined ? console.log('No img') : <img
                                src={props.game.short_screenshots[6].image}
                                height="250"
                                alt=""
                            />}
                        </Carousel> */}
                        <div>
                            {props.game.clip === null || props.game.clip === undefined ? console.log('No Video') : <ReactPlayer volume={0.1} width={540} controls url={props.game.clip.clips['full']} />}
                            {/* {props.game.clip.clips['full']===null || props.game.clip.clips['full']=== undefined ? console.log('No Video') : <ReactPlayer volume={0.1} width={535} controls url={props.game.clip.clips['full']} /> } */}

                        </div>
                    </Drawer.Body></div>
                {/* <Drawer.Footer> */}
                {/* <Button onClick={close} appearance="primary">Confirm</Button>
                    <Button onClick={close} appearance="subtle">Cancel</Button> */}
                {/* </Drawer.Footer> */}
            </Drawer>

        </div>
    );
}

export default GameDetails;






















// import React from 'react';
// // import ReactDOM from 'react-dom';
// import { Button, Progress, Rate, ButtonToolbar, Drawer, Carousel } from 'rsuite';
// import 'rsuite/dist/styles/rsuite-default.css';
// import ReactPlayer from 'react-player'
// import Cards from './Cards.js'

// class GameDetails extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             show: false,
//         };
//         this.close = this.close.bind(this);
//         this.toggleDrawer = this.toggleDrawer.bind(this);
//     }

//     close() {
//         this.setState({
//             show: false
//         });
//     }
//     toggleDrawer() {
//         this.setState({ show: true });
//     }
//     render() {
//         // const { Circle } = Progress;
//         // const style = {
//         //     width: 120,
//         //     display: 'inline-block',
//         //     marginRight: 10
//         // };
//         const textStyle = {
//             verticalAlign: 'top',
//             lineHeight: '42px',
//             display: 'inline-block'
//         };

//         // const temp = this.props.game.short_screenshots.array.forEach(element, i => {
//         //     console.log(element, i)
//         // })
//         return (
//             <div>
//                 <ButtonToolbar>
//                     <Cards
//                         game={this.props.game}
//                         key={this.props.game.id}
//                         onFaveToggle={() => this.props.onFaveToggle(this.props.game)}
//                         games={this.props.games}
//                         toggleDrawer={() => this.toggleDrawer}
//                         isFave={this.props.games.includes(this.props.game)}
//                     ></Cards>
//                     {/* <Button onClick={this.toggleDrawer}>Details</Button> */}
//                 </ButtonToolbar>
//                 <Drawer
//                     show={this.state.show}
//                     onHide={this.close}
//                 >
//                     <Drawer.Header>
//                         <div className='imgAndName'>
//                             <img className='imgCardTop' src={this.props.game.background_image} />

//                         </div>

//                         <div className='detailsbtn'>
//                             <p>{this.props.game.name}</p>
//                             <div>
//                                 <Rate defaultValue={this.props.game.rating} allowHalf readOnly size="md" />
//                                 <span style={textStyle}>{this.props.game.rating} / 5 </span>
//                                 <span className='ratings_count' style={textStyle}>({this.props.game.ratings_count})</span>
//                             </div>
//                         </div>
//                     </Drawer.Header>
//                     <Drawer.Body>
//                         {/* <Card.Img className='imgCardIn' variant="top" src={this.props.game.background_image} /> */}
//                         <Carousel autoplay className="custom-slider">
//                             {/* {console.log(this.props.game.short_screenshots)} */}
//                             <img
//                                 src={this.props.game.short_screenshots[0].image}
//                                 height="250"
//                             />
//                             <img
//                                 src={this.props.game.short_screenshots[1].image}
//                                 height="250"
//                             />
//                             <img
//                                 src={this.props.game.short_screenshots[2].image}
//                                 height="250"
//                             />
//                             <img
//                                 src={this.props.game.short_screenshots[3].image}
//                                 height="250"
//                             />
//                             <img
//                                 src={this.props.game.short_screenshots[4].image}
//                                 height="250"
//                             />
//                             <img
//                                 src={this.props.game.short_screenshots[5].image}
//                                 height="250"
//                             />
//                             <img
//                                 src={this.props.game.short_screenshots[6].image}
//                                 height="250"
//                             />

//                         </Carousel>
//                         {/* <Card.Text className='Rating'>Rating:
//                         </Card.Text> */}
//                         {/*<div className='detailsbtn'>
//                             <div style={style}>
//                                 <Circle className='RatingPer' percent={parseInt((this.props.game.rating / 5) * 100)} strokeColor={parseInt((this.props.game.rating / 5) * 100) >= 90 ? "green" : "yellow"} />
//                             </div> 
//                             <div>
//                                 <Rate defaultValue={this.props.game.rating} allowHalf readOnly size="md" />
//                                 <span style={textStyle}>{this.props.game.rating} / 5 </span>
//                                 <span className='ratings_count' style={textStyle}>({this.props.game.ratings_count})</span>
//                             </div>
//                         </div>*/}
//                         <div>
//                             <ReactPlayer volume={0.1} width={535} controls url={this.props.game.clip.clips['full']} />
//                         </div>
//                     </Drawer.Body>
//                     <Drawer.Footer>
//                         <Button onClick={this.close} appearance="primary">Confirm</Button>
//                         <Button onClick={this.close} appearance="subtle">Cancel</Button>
//                     </Drawer.Footer>
//                 </Drawer>
//             </div>
//         );
//     }

// }

// export default GameDetails;
// // ReactDOM.render(<Demo />);