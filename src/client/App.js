import React, { Component } from "react";
import { Col, Container, Row, Form, FormGroup, Input, Label, Button, Card, CardBody } from "reactstrap";
import AwardCard from './components/AwardCard';
import axios from "axios";
import KudosForm from './components/KudosForm';

class App extends Component {
    state = {
        users: [],
        awards: [],
        sender: "",
        receiver: "",
        comment: "",
        title: ""
    }

    updateSender = event => {
        this.setState({ sender: event.target.value });
    };

    updateTitle = event => {
        this.setState({ title: event.target.value });
    };

    updateReceiver = event => {
        this.setState({ receiver: event.target.value });
    };

    updateComment = event => {
        this.setState({ comment: event.target.value });
    };

    findReceiverId = () => {
        const receiver = this.state.users.find(user => user.name === this.state.receiver);
        return receiver.id;
    }

    findSenderId = () => {
        const sender = this.state.users.find(user => user.name === this.state.sender);
        return sender.id;
    }

    postData = () => {
        axios.post("/api/kudos", {
            Name: this.state.title,
            Comment__c: this.state.comment,
            Receiver__c: findReceiverId(),
            Sender__c: findSenderId()
        }).then(response => {
            // this.setState({
            //   awards: response.data
            // })
        })
    }

    componentDidMount = () => {
        axios.get("/api/kudos")
            .then(response => {
                this.setState({
                    awards: response.data
                })
            })

        axios.get("/api/users")
            .then(response => {
                this.setState({
                    users: response.data,
                    receiver: response.data[0],
                    sender: response.data[0]
                })
            })
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
                        {this.state.awards.map(elem => (
                            <AwardCard title={elem.name}
                                sender={elem.sender__r.Name}
                                receiver={elem.receiver__r.Name}
                                key={elem.id}
                                text={elem.comment__c} />
                        ))}
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                        <KudosForm
                            users={this.state.users}
                            updateSender={this.updateSender}
                            updateReceiver={this.updateReceiver}
                            updateTitle={this.updateTitle}
                            updateComment={this.updateComment}
                            postData={this.postData}
                        />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default App;