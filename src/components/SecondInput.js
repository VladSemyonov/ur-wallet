import React from "react";
import {Col, FormFeedback, FormGroup, Input, Label, Row} from "reactstrap";

export default function SecondInput(props) {

    return (
        <FormGroup>
            <Row>
                <Col xs="2" md={{ offset: 3 }}>
                    <Label for={"number"}>Номер телефона</Label>
                </Col>
                <Col xs="2" sm="4">
                    <FormGroup>
                        <Input
                            invalid={!props.value.number}
                            value={props.value.number}
                            type={"text"}
                            name={"number"}
                            onChange={props.onChange}
                            id={"number"}/>
                        <FormFeedback>Номер телефона обезателен</FormFeedback>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col xs="2" md={{ offset: 3 }}>
                    <Label for={"email"}>Email</Label>
                </Col>
                <Col xs="2" sm="4">
                    <Input name="email"
                           onChange={props.onChange}
                           type={"text"}/>
                </Col>
            </Row>
        </FormGroup>
    )
}