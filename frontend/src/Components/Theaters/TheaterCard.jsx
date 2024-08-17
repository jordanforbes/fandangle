import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Button } from "react-bootstrap";
// import "./theaters.css";

const TheaterCard = (props) => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    setTitle("Regal Cinema");
    setLocation("123 Main St, Anytown");
  }, [title]);

  return (
    <Card bg={"secondary"} text={"white"} style={{ width: "18rem" }}>
      <Card.Header>{title}</Card.Header>
      <Card.Body>
        <Card.Text>{location}</Card.Text>
        <br />
        <Button variant="outline-light">Details</Button>
      </Card.Body>
    </Card>
  );
};

export default TheaterCard;
