import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Button } from "react-bootstrap";
import "./Movies.css";

const MovieCard = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setTitle("Evil Dead");
    setDescription(
      "Some quick example text to build on the card title and make up the bulk of the card's content."
    );
  }, [title, description]);

  return (
    <Card bg={"secondary"} text={"white"} style={{ width: "18rem" }}>
      <Card.Header>{title}</Card.Header>
      <Card.Body>
        <Card.Text>{description}</Card.Text>
        <br />
        <Button variant="outline-light">Details</Button>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
