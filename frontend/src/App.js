import logo from "./logo.svg";
import "./App.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

function App() {
  const [movies, setMovies] = useState([]);

  const MovieList = (props) => {
    return (
      <>
        <p>movie list</p>
      </>
    );
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/movies")
      .then((res) => setMovies(res.data))
      .then(console.log(movies))
      .catch((e) => console.error("api request failed: ", e));
  }, []);

  return (
    <div className="App">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Danfangle</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default App;
