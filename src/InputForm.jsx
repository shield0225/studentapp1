import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import "./index.css";

export default function InputForm() {
    return (
    <Form className="form-container">
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="2">
          Full Name
        </Form.Label>
        <Col sm="10">
          <Form.Control className="input-field" plaintext placeholder="Aileen Salcedo" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="2">
          Email
        </Form.Label>
        <Col sm="10">
          <Form.Control className="input-field" type="email" placeholder="email@test.com" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="2">
          Phone Number
        </Form.Label>
        <Col sm="10">
          <Form.Control className="input-field" type="number" placeholder="111-333-4444" />
        </Col>
      </Form.Group>

      <Button className="submit-button" variant="primary" type="submit">Submit</Button>
    </Form>
    )
};
