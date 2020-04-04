import React, { Component } from 'react'
import CarouselBox from '../Components/CarouselBox'
import { Container, CardDeck, Card, Button } from 'react-bootstrap'
import gImg from '../assets/4.jpg'
import ggImg from '../assets/5.jpg'
import gggImg from '../assets/6.jpg'

export default class Home extends Component {
    render(){
        return(
            <>
            <CarouselBox/>
            <Container>
                <h2 className="text-center m-4"> Give me a chance please </h2>
                <CardDeck>
                    <Card border="primary">
                        <Card.Img
                        variant="top"
                        src={ gImg }
                        />
                        <Card.Body>
                            <Card.Title>I am really hard working person</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A praesentium temporibus voluptates.
                            </Card.Text>
                            <Button variant="primary">Button</Button>
                        </Card.Body>
                    </Card>
                    <Card text="primary">
                        <Card.Img
                            variant="top"
                            src={ ggImg }
                        />
                        <Card.Body>
                            <Card.Title>I am able to self learn fast</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A praesentium temporibus voluptates.
                            </Card.Text>
                            <Button variant="primary">Button</Button>
                        </Card.Body>
                    </Card>
                    <Card border="primary">
                        <Card.Img
                            variant="top"
                            src={ gggImg }
                        />
                        <Card.Body>
                            <Card.Title>I will apreciate opportunities that u will give me</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A praesentium temporibus voluptates.
                            </Card.Text>
                            <Button variant="primary">One else</Button>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </Container>
            </>
        )
    }
}