import React, { Component } from 'react'
import { Container, Row, Col, Media, Card, ListGroup } from 'react-bootstrap'

export default class Blog extends Component {
    render(){
        return(
            <Container>
                <Row>
                    <Col md="9">
                        <Media className="m-5">
                            <img
                            width={150}
                            height={150}
                            className="mr-3"
                            src="https://cdn.evilmartians.com/front/posts/optimizing-react-virtual-dom-explained/cover-a1d5b40.png"

                            />
                            <Media.Body>
                                <h5> Blog post </h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet at, consequuntur dolorum ducimus et, ex magni odit praesentium quidem quis soluta. Aliquam cumque eaque, enim maxime rerum voluptatem voluptatibus.</p>
                            </Media.Body>
                        </Media>
                        <Media className="m-5">
                            <img
                                width={150}
                                height={150}
                                className="mr-3"
                                src="https://cdn.evilmartians.com/front/posts/optimizing-react-virtual-dom-explained/cover-a1d5b40.png"

                            />
                            <Media.Body>
                                <h5> Blog post </h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet at, consequuntur dolorum ducimus et, ex magni odit praesentium quidem quis soluta. Aliquam cumque eaque, enim maxime rerum voluptatem voluptatibus.</p>
                            </Media.Body>
                        </Media>
                        <Media className="m-5">
                            <img
                                width={150}
                                height={150}
                                className="mr-3"
                                src="https://cdn.evilmartians.com/front/posts/optimizing-react-virtual-dom-explained/cover-a1d5b40.png"

                            />
                            <Media.Body>
                                <h5> Blog post </h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet at, consequuntur dolorum ducimus et, ex magni odit praesentium quidem quis soluta. Aliquam cumque eaque, enim maxime rerum voluptatem voluptatibus.</p>
                            </Media.Body>
                        </Media>
                        <Media className="m-5">
                            <img
                                width={150}
                                height={150}
                                className="mr-3"
                                src="https://cdn.evilmartians.com/front/posts/optimizing-react-virtual-dom-explained/cover-a1d5b40.png"

                            />
                            <Media.Body>
                                <h5> Blog post </h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet at, consequuntur dolorum ducimus et, ex magni odit praesentium quidem quis soluta. Aliquam cumque eaque, enim maxime rerum voluptatem voluptatibus.</p>
                            </Media.Body>
                        </Media>
                    </Col>
                    <Col md="3">
                        <h5 className="text-center mt-5">Categories</h5>
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item>HTML</ListGroup.Item>
                                <ListGroup.Item>CSS</ListGroup.Item>
                                <ListGroup.Item>JS</ListGroup.Item>
                                <ListGroup.Item>PHP</ListGroup.Item>
                                <ListGroup.Item>React</ListGroup.Item>
                                <ListGroup.Item>Laravel</ListGroup.Item>
                            </ListGroup>
                        </Card>

                        <Card className="mt-3" bg="light">
                            <Card.Body>
                                <Card.Title>Some widget</Card.Title>
                                <Card.Text>
                                    <p>Aliquid amet at, consequuntur dolorum ducimus et, ex magni odit praesentium quidem quis soluta. Aliquam cumque eaque, enim maxime rerum voluptatem voluptatibus.</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}