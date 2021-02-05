import React, { Component } from "react";
import { Card, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const CardAlbum = ({ album }) => {
  return (
    <Card>
      <Card.Img variant="top" src={album.cover} />
      <Card.Body>
        <Card.Title>{album.title}</Card.Title>
        <FontAwesomeIcon icon={faHeart} className="far" id="Heart" />
      </Card.Body>
    </Card>
  );
};

export default CardAlbum;
