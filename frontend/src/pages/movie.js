// src/pages/Movies.js
// import React from "react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Movie = () => {
  const { id } = useParams(); // Get the ID from the URL parameters
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/v1/movies/${id}`)
      .then((res) => setMovie(res.data))
      .catch((e) => console.error("Failed to fetch movie details:", e));
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>Movies Page</h1>
    </div>
  );
};

export default Movie;
