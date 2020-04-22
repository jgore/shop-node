import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Badge,
  Container
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import './Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { ShoppingCardConsumer } from "../providers/ShoppingCardProvider";

class NavBar extends React.Component {
  state = {
    isVisible: false
  }
  render() {
    return (
      <Navbar
        expand="md"
        style={{
          padding: "1.5rem 1.2rem",
          borderBottom: "1px solid lightgray",
        }}
      >
        <Container style={{ maxWidth: 1240 }}>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <div style={{ width: '300px' }} className="d-flex flex-column align-items-start">
                <div className="d-flex flex-row">
                  <LinkContainer to="/">
                    <Nav.Link>Home</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/about">
                    <Nav.Link>About</Nav.Link>
                  </LinkContainer>
                </div>
                <div className="d-flex flex-row">
                  <h6 style={{ fontSize: '14px', padding: '.5rem' }}>Infolinia: 123 456 789</h6>
                </div>
              </div>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Brand className="mx-auto">ShopNode</Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <div style={{ width: '300px' }} className="d-flex flex-column align-items-end">
                <div className="d-flex flex-row">
                  <LinkContainer to="/signIn" style={{ fontSize: '12px' }}>
                    <Nav.Link > Zaloguj się</Nav.Link>
                  </LinkContainer>
                  <ShoppingCardConsumer>
                    {({ state, addProductToShopping, removeProductToShopping }) => (
                      <React.Fragment>
                        <LinkContainer to="/basket" style={{ fontSize: '12px' }} onMouseOver={() => {
                          this.setState({ isVisible: true })
                        }}
                          onMouseLeave={() => {
                            this.setState({
                              isVisible: false
                            })
                          }}>
                          <Nav.Link className="basket-name">Koszyk: {state.price}PLN <span style={{ position: 'relative' }}>
                            <FontAwesomeIcon style={{ cursor: 'pointer' }} color="black" icon={faShoppingCart} />  <Badge className="badge-card" pill variant="danger">
                              {state.items.length}
                            </Badge>
                          </span>
                          </Nav.Link>
                        </LinkContainer>

                        <div className="shopping-card"

                          style={{ display: this.state.isVisible ? 'block' : 'none' }}
                          onMouseOver={() => {
                            this.setState({ isVisible: true })
                          }}
                          onMouseLeave={() => {
                            this.setState({
                              isVisible: false
                            })
                          }}

                        >
                          <div className="shopping-card-inner" >

                            {state.items && state.items.length > 0 ? state.items.map((item, index) => {
                              return (

                                <div className="shopping-card-product"><p style={{ fontSize: '11px' }}>{item.name} - {item.price}zł <FontAwesomeIcon onClick={() => removeProductToShopping(item.name, item.price)} style={{ cursor: 'pointer' }} color="red" icon={faTimes} /></p></div>

                              )
                            })
                              : "Twój koszyk jest pusty"}
                          </div>
                        </div>
                      </React.Fragment>
                    )}

                  </ShoppingCardConsumer>
                </div>
                <div className="d-flex flex-row">
                  <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                  </Form>
                </div>
              </div>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavBar;
