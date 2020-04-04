import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import firstImg from '../assets/1.jpg'
import secondImg from '../assets/2.jpg'
import thirdImg from '../assets/3.jpg'

export default class CarouselBox extends Component {
    render(){
        return(
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ firstImg }
                        alt="GG"
                    />
                    <Carousel.Caption>
                        <h3>Hello!</h3>
                        <p>My name is Den,nice to meet you</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ secondImg }
                        alt="GG"
                    />
                    <Carousel.Caption>
                        <h3>Hello again</h3>
                        <p>I like programming and learn English</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ thirdImg }
                        alt="GG"
                    />
                    <Carousel.Caption>
                        <h3>What's up?</h3>
                        <p>Keep calm and drink cofee :)</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}