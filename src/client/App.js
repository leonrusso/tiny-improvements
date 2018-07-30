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
            kudosText: "",
            kudosTitle: "",
            receiver: "",
            sender: "",
            friends: [],
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
            awards: []
        }
    }

    componentDidMount = () => {
        axios.get("/api/friends").then(response =>
            this.setState({
                friends: response.data
            })
        );
        axios.get("/api/users").then(response =>
            this.setState({
                users: response.data
            })
        );
        // axios.post("/api/kudos", {
        //     id: 4,
        //     title: "Loudest Easter Award",
        //     comment: "Who chews carrots like that at work??"
        // }).then(response => {
        //     this.setState({
        //         awards: response.data
        //     })
        // })
    }
    postKudo = () => {
        axios.post("/api/kudos",
            {
                id: 5,
                title: this.state.kudosTitle,
                comment: this.state.kudosText,
                receiver: this.state.receiver,
                sender: this.state.sender,
            })
            .then(response => {
                this.setState({
                    awards: response.data
                })
            })
    };

    updateKudosText = event => {
        this.setState({ kudosText: event.target.value })
    };

    updateKudosTitle = event => {
        this.setState({ kudosTitle: event.target.value })
    };

    updateReceiver = event => {
        this.setState({ receiver: event.target.value })
    }

    updateSender = event => {
        this.setState({ sender: event.target.value })
    }

    render() {
        return (
            <Container>
                <hr />
                <h1> 🙋🏽 Friend Space </h1>
                <br />
                <h4> My Friend List: </h4>
                <br />
                {this.state.friends.map((e, index) => (
                    <Card key={index}>
                        <CardBody >
                            <h2> {e.name}</h2>
                            <p> {e.location} </p>
                        </CardBody>
                    </Card>
                ))}
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
                        {this.state.awards.map(award => <AwardCard title={award.title} comment={award.comment} receiver={award.receiver} sender={award.sender} />)}
                    </Col>
                </Row>
                <Row>
                    <KudosForm
                        postKudo={this.postKudo}
                        updateKudosText={this.updateKudosText}
                        updateKudosTitle={this.updateKudosTitle}
                        updateReceiver={this.updateReceiver}
                        updateSender={this.updateSender}
                        receiver={this.state.users.map(user => <option> {user.name} </option>)}
                        sender={this.state.users.map(user => <option> {user.name} </option>)}
                    />
                </Row>
            </Container>
        )
    }
}

export default App;