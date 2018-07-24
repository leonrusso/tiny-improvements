import React from "react";
import { Col, Container, Row, Form, FormGroup, Input, Label, Button, Card, CardBody } from "reactstrap";

const PetCard = props => (
    <Card>
        <CardBody className="mx-auto">
            <h1> {props.pet.name} </h1>
            <p> {props.pet.age} </p>
        </CardBody>
    </Card>
)

export default PetCard;