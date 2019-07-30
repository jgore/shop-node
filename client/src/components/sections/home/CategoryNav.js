import React from "react";
import {
    Navbar,
    Nav,
    Form,
    FormControl,
    Button,
    Container
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

class NavBar extends React.Component {
    render() {
        return (
            <Navbar
                expand="md"
                style={{
                    padding: "1.5rem 1.2rem",
                    borderBottom: "none"
                }}
            >
                <Container style={{ maxWidth: 1000 }}>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto ml-auto">
                            <LinkContainer to="/">
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/about">
                                <Nav.Link>About</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default NavBar;
