import React from 'react'
import {Col, FormGroup, Row} from "reactstrap";

export default function FourthInput(props) {

    return (
        <FormGroup>
            <Row>
                <Col xs="1" md={{ offset: 4 }}><input
                    name="service1"
                    onChange={props.onChange}
                    type={"checkbox"}/></Col>
                <Col xs="2" >Платная услуга №1</Col>
            </Row>
            <Row>
                <Col xs="1" md={{ offset: 4 }}><input
                    name="service2"
                    onChange={props.onChange}
                    type={"checkbox"}/></Col>
                <Col xs="2">Платная услуга №2</Col>
            </Row>
            <Row>
                <Col xs="1" md={{ offset: 4 }}><input
                    name="service3"
                    onChange={props.onChange}
                    type={"checkbox"}/></Col>
                <Col xs="2">Платная услуга №3</Col>
            </Row>
            <Row>
                <Col xs="1" md={{ offset: 4 }}><input
                    name="service4"
                    onChange={props.onChange}
                    type={"checkbox"}/></Col>
                <Col xs="2">Платная услуга №4</Col>
            </Row>
            <Row>
                <Col xs="1" md={{ offset: 4 }}><input
                    name="service5"
                    onChange={props.onChange}
                    type={"checkbox"}/></Col>
                <Col xs="2">Платная услуга №5</Col>
            </Row>
        </FormGroup>
    )
}