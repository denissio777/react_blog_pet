import React, { Component } from 'react'
import {Button, Navbar, Nav, FormControl, Container, Form} from 'react-bootstrap'
import logo from './logo192.png'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "../Pages/About"
import Blog from "../Pages/Blog"
import Contacts from "../Pages/Contacts"
import Home from "../Pages/Home"
// import Switch from "react-router/modules/Switch";
// import Route from "react-router/modules/Route";

export default class Header extends Component {
    render(){
        return(
            <>
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand style={{display: 'flex'}} href="#">
                        <img
                            src={logo}
                            height="30"
                            width="30"
                            className="logo"
                            alt="Logo"
                        /> React
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="some">
                                <Nav.Link href="/"> Home </Nav.Link>
                                <Nav.Link href="/about"> About us </Nav.Link>
                                <Nav.Link href="/contacts"> Contacts </Nav.Link>
                                <Nav.Link href="/blog"> Blog </Nav.Link>
                            </Nav>
                            <Form inline >
                                <FormControl
                                    type="text"
                                    placeholder="search"
                                    className="mr-sm-2"
                                />
                                <Button variant="outline-info">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Navbar.Brand>
                </Container>
            </Navbar>

            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contacts" component={Contacts} />
                    <Route exact path="/blog" component={Blog} />
                </Switch>
            </Router>
            </>
        )
    }
}