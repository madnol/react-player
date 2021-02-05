import React, { Component } from "react";
import { Card } from "react-bootstrap";

export default class Card extends Component {
  render() {
    return (
      <div>
        <Card>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
