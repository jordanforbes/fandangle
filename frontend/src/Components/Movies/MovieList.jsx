import { useState, useEffect } from "react";
import { Stack, Container } from "react-bootstrap";
import MovieCard from "./MovieCard";

const MovieList = (props) => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    setMovieList([
      {
        id: 1,
        title: "The Silent Hills",
        genre: "Horror",
        duration: 120,
        description:
          "A group of friends find themselves in a town where time has stood still, and they must uncover its dark secrets to escape.",
        created_at: "2024-08-16T12:00:00Z",
        updated_at: "2024-08-16T12:00:00Z",
      },
      {
        id: 2,
        title: "Space Odyssey",
        genre: "Sci-Fi",
        duration: 145,
        description:
          "A journey through space and time to discover the origins of mankind.",
        created_at: "2024-08-17T12:00:00Z",
        updated_at: "2024-08-17T12:00:00Z",
      },
      {
        id: 3,
        title: "Romantic Getaway",
        genre: "Romance",
        duration: 110,
        description:
          "Two strangers meet on a tropical island and discover a love that changes their lives forever.",
        created_at: "2024-08-18T12:00:00Z",
        updated_at: "2024-08-18T12:00:00Z",
      },
    ]);
    // console.log(movieList[0].description);
  }, []);

  return (
    <Container>
      <Stack direction="horizontal" gap={3}>
        {movieList.map((movie) => (
          <MovieCard
            title={movie.title}
            description={movie.description}
            id={movie.id}
          />
        ))}
      </Stack>
    </Container>
  );
};

export default MovieList;
