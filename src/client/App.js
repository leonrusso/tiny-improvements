import React, { Component } from "react";
import { Col, Container, Row, Form, FormGroup, Input, Label, Card, CardBody, Button } from "reactstrap";
import AwardCard from "./components/AwardCard";

class App extends Component {

    constructor() {
        super();
        this.state = {
            users: [
                {
                    userId: 45089,
                    name: "Owen",
                    position: "Captian of the Breakroom"
                },
                {
                    userId: 223,
                    name: "Brooke",
                    position: "Winner of All Dance-Offs"
                },
                {
                    userId: 6582,
                    name: "Gobi",
                    position: "King of Mid-Day Naps"
                }
            ],
            awards: [
                {
                    id: 1,
                    title: "Best Boss Award!",
                    comment: "Thanks for always looking out for us."
                },
                {
                    id: 2,
                    title: "Longest Commute Award!",
                    comment: "I can't believe Leslie makes it to work as often as she does."
                },
                {
                    id: 3,
                    title: "Most likely to nap at work!",
                    comment: "Maybe you need more coffee."
                }

            ]
        }
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col md="12">
                        <h1>Tiny Progress</h1>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col md="12" lg="3">
                        <Card>
                            <CardBody className="mx-auto">
                                <Button color="success">Give Kudos</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="12" lg="9">
                        {this.state.awards.map(element => <AwardCard title={element.title} comment={element.comment} />)}
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                        <Form>
                            <FormGroup>
                                <Label>Give Kudos to</Label>
                                <Input type="select">
                                    {this.state.users.map(element => <option>{element.name}</option>)}
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Input type="text" placeholder="Kudos Title" />
                            </FormGroup>
                            <FormGroup>
                                <Input type="textarea" placeholder="Kudos text" />
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default App;