import logo from "./logo.svg";
import "./App.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";
// import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Header from "./Components/Header/Header";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get("./dummydata/dummydata.json")
      .then((res) => setData(res.data))
      .catch((e) => console.error("api request failed: ", e));
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
