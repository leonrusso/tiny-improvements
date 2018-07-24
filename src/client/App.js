import React, { Component } from "react";
import { Col, Container, Row, Form, FormGroup, Input, Label, Card, CardBody, Button } from "reactstrap";
import AwardCard from "./components/AwardCard";
import KudosForm from "./components/KudosForm";
import PetCard from "./components/PetCard";
import axios from 'axios';


class App extends Component {

    constructor() {
        super();
        this.state = {
            users: [
                // {
                //     userId: 45089,
                //     name: "Owen",
                //     position: "Captian of the Breakroom"
                // },
                // {
                //     userId: 223,
                //     name: "Brooke",
                //     position: "Winner of All Dance-Offs"
                // },
                // {
                //     userId: 6582,
                //     name: "Gobi",
                //     position: "King of Mid-Day Naps"
                // }
            ],
            awards: [
                {
                    id: 1,
                    title: "Best Boss Award!",
                    comment: "Thanks for always looking out for us.",
                    sender: "Fabian",
                    receiver: "Leon"
                }, {
                    id: 2,
                    title: "Longest Commute Award!",
                    comment: "I can't believe Laura makes it to work as often as she does.",
                    sender: "Archit",
                    receiver: "Laura"
                }, {
                    id: 3,
                    title: "Most likely to nap at work!",
                    comment: "Maybe you need more coffee.",
                    sender: "Gobi",
                    receiver: "Owen"
                }
            ]
        }
    }

    componentDidMount = () => {
        axios.get("/api/users").then(response =>
            this.setState({
                users: response.data
            })
        );
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
                        {this.state.awards.map(elem => <AwardCard user={elem} />)}
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                        <KudosForm users={this.state.users} />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default App;