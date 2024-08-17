import "./App.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Components/Header/Header";
import MovieCard from "./Components/Movies/MovieCard";
import TheaterCard from "./Components/Theaters/TheaterCard";

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
      <p>Movies</p>
      <MovieCard />
      <br />
      <p>Theaters</p>
      <TheaterCard />
    </div>
  );
}

export default App;
