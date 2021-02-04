import React from 'react'
import {Col, FormFeedback, FormGroup, Input, Label, Row} from "reactstrap";

export default function FirstInput(props) {

    return (
        <FormGroup>
            <Row>
                <Col xs="2" md={{ offset: 3 }}>
                    <Label for="header">Заголовок</Label>
                </Col>
                <Col xs="2" sm="6" md={{ offset: 3 }}>
                    <FormGroup>
                        <Input
                            value={props.value.header}
                            invalid={!props.value.header}
                            name="header"
                            type="textarea"
                            id={"header"}
                            onChange={props.onChange}
                        />
                        <FormFeedback>Заголовок обязателен</FormFeedback>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col xs="2" md={{ offset: 3 }}>
                    <Label for={"description"}>Описание</Label>
                </Col>
                <Col xs="2" sm="6" md={{ offset: 3 }}>
                    <Input
                        value={props.value.description}
                        name="description"
                        type="textarea"
                        id={"description"}
                        onChange={props.onChange}
                    />
                </Col>
            </Row>
            <Row>
                <Col xs="2" md={{ offset: 3 }}>
                    <Label for={"status"}>Статус</Label>
                </Col>
                <Col xs="2" md={{ offset: 3 }}>
                    <Input onChange={props.onChange} type="checkbox" id={"status"}/>
                </Col>
            </Row>
        </FormGroup>
    )
}