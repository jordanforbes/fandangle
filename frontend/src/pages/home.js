import "../App.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../Components/Header/Header";
// import MovieCard from "./Components/Movies/MovieCard";
import TheaterList from "../Components/Theaters/TheaterList";
import MovieList from "../Components/Movies/MovieList";
import { Link } from "react-router-dom";

function Home() {
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
      <MovieList />
      <br />
      <p>Theaters</p>
      <TheaterList />
    </div>
  );
}

export default Home;
