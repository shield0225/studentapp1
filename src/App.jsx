import React from "react";
import ReactDOM from "react-dom";
import { Container, Form, Button } from "react-bootstrap";
import "./index.css";
import Header from "./Header";
import InputForm from "./InputForm";

const App = () => (
  <Container>
    <Header />
    <InputForm />
  </Container>
);
ReactDOM.render(<App />, document.getElementById("app"));
