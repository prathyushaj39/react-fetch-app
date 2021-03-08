import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Form, Button, Container, Row, Col, Dropdown, Table, Card, Accordion, Navbar, Nav, FormControl, NavDropdown, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PRODUCTS, TRANSACTIONS } from './data';
import ToDoList from './ToDoList';
import Post from './Post';
class App extends React.Component {

  state = {
    isLoading: true,
    posts: [],
    error: null,
  };
  fetchPosts() {
    fetch(`https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/posts.json`)
      .then(response => response.json())
      .then(
        data =>
          setTimeout(() => {
            this.setState({
              posts: data,
              isLoading: false,
            })
          }, 2000)

      )
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.fetchPosts();
  }
  render() {
    const { isLoading, posts, error } = this.state;
    return (
      <div className="App">
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
          <Navbar.Brand href="#home"><h2><i>React-App</i></h2></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More details</Nav.Link>
              <Nav.Link eventKey={2} href="#logout">
                Logout
      </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
       
        {!isLoading ? Object.keys(posts).map((key: any) => <Post key={key} body={posts[key]} />) : <h3>
          <Spinner animation="border" role="status">
            <span className="sr-only"><i>Fetching data from API...</i></span>
          </Spinner>{' '}
<span><i>Fetching data from API...</i></span>
</h3>}
      </div>
    );
  }
}

export default App;
