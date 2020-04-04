import React, { Component } from 'react'
import { Container, Tab, Nav, Col, Row } from 'react-bootstrap'
import firstImg from '../assets/1.jpg'
import secondImg from '../assets/2.jpg'
import thirdImg from '../assets/3.jpg'

export default class About extends Component {
    render(){
        return(
            <Container>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first"> Design </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second"> Code </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third"> Team </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className="mt-3">
                                <Tab.Pane eventKey="first">
                                    <img src={firstImg} />
                                    <p>U can contact me +380977711778</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <img src={secondImg} />
                                    <p>or denissio_developer@ukr.net</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <img src={thirdImg} />
                                    <p>Feel free to text me in messengers</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        )
    }
}