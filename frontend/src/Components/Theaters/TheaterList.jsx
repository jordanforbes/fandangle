import { useState, useEffect } from "react";
import { Stack, Container } from "react-bootstrap";
import TheaterCard from "./TheaterCard";

const TheaterList = (props) => {
  const [theaterList, setTheaterList] = useState([]);

  useEffect(() => {
    setTheaterList([
      {
        id: 1,
        name: "Grand Cinema",
        location: "123 Main St, Anytown",
        capacity: 200,
        created_at: "2024-08-16T12:00:00Z",
        updated_at: "2024-08-16T12:00:00Z",
      },
      {
        id: 2,
        name: "Star Theater",
        location: "456 Broadway, Bigcity",
        capacity: 150,
        created_at: "2024-08-17T12:00:00Z",
        updated_at: "2024-08-17T12:00:00Z",
      },
      {
        id: 3,
        name: "Regal Cinema",
        location: "789 Center Rd, Metropolis",
        capacity: 250,
        created_at: "2024-08-18T12:00:00Z",
        updated_at: "2024-08-18T12:00:00Z",
      },
    ]);
  }, []);

  return (
    <Container>
      <Stack direction="horizontal" gap={3}>
        {theaterList.map((theater) => (
          <TheaterCard title={theater.name} location={theater.location} />
        ))}
      </Stack>
    </Container>
  );
};

export default TheaterList;
