import React, { Component } from 'react';
import {Container, Col, Row, Form, FormGroup, Input, Label, Button} from 'reactstrap';

class Register extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md={{ size: 6, offset: 3 }}>
                        <Form>
                            <FormGroup>
                                <Label for="name">Name</Label>
                                <Input
                                    type="name"
                                    name="name"
                                    id="name"
                                    placeholder="Enter Your Name"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="name">Surname</Label>
                                <Input
                                    type="surname"
                                    name="surname"
                                    id="surname"
                                    placeholder="Enter Your Surname"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    id="exampleEmail"
                                    placeholder="Enter Your Email"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input
                                    type="password"
                                    name="password"
                                    id="examplePassword"
                                    placeholder="Create New Password"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Button color="primary" type="submit">
                                    Register
                                </Button>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Register;