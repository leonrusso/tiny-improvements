import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const KudosForm = props => (
    <Form>
        <FormGroup>
            <Label>Give Kudos from</Label>
            <Input type="select" onChange={props.updateSender}>
                {props.users.map(element => <option>{element.name}</option>)}
            </Input>
            <Label>Give Kudos to</Label>
            <Input type="select" onChange={props.updateReceiver}>
                {props.users.map(element => <option>{element.name}</option>)}
            </Input>
        </FormGroup>
        <FormGroup>
            <Input type="text" placeholder="Kudos Title" onChange={props.updateTitle} />
        </FormGroup>
        <FormGroup>
            <Input
                type="textarea"
                placeholder="Kudos text"
                onChange={props.updateComment}
            />
        </FormGroup>
        <FormGroup>
            <Button onClick={props.postData}> Submit </Button>
        </FormGroup>
    </Form>
)

export default KudosForm;