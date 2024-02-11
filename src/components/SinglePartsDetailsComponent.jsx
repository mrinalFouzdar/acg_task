import React from "react";
import Card from "react-bootstrap/Card";

const SinglePartsDetailsComponent = ({ data }) => {
  // console.log(data);
  const { label, value } = data;
  return (
    <Card style={{ width: "12rem", minHeight: "16rem" }}>
      <Card.Body className="d-flex flex-column  justify-content-around align-items-center text-center ">
          <Card.Title>{label}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle>
          <Card.Text>{value}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SinglePartsDetailsComponent;
