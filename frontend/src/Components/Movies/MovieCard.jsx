import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Button } from "react-bootstrap";
import "./Movies.css";
import { Link } from "react-router-dom";

const MovieCard = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setTitle(props.title);
    setDescription(props.description);
    // console.log(description);
  }, [props]);

  return (
    <Card bg={"secondary"} text={"white"} style={{ width: "18rem" }}>
      <Card.Header>{title}</Card.Header>
      <Card.Body>
        <Card.Text>{description}</Card.Text>
        <br />
        <Link to={`movie/${props.id}`}>
          <Button variant="outline-light">Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
