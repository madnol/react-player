import React, { Component } from "react";
import { Card, Col } from "react-bootstrap";

const CardAlbum = ({ album }) => {
  return (
   
      <Card>
        <Card.Img variant="top" src={album.cover} />
        <Card.Body>
          <Card.Title>{album.title}</Card.Title>
        </Card.Body>
      </Card>
  );
};

export default CardAlbum;
