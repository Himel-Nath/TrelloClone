import { createRef } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

function AssignUserForm(props) {
    const {id} = useParams();
    const email = createRef();

    const assignUser = (e) => {
        e.preventDefault();

        const userEmail = email.current.value;
        const data = {
            userEmail: userEmail,
            workspaceId: id
        }

        props.onChange(data);
    }

    return (
        <Card>
            <Card.Body>
                <Form onSubmit={assignUser}>
                    <Form.Group as={Row} controlId="formAssignEmail">
                        <Form.Label column sm={2}>Assign new user by email</Form.Label>
                        <Col sm={7}>
                            <Form.Control type="email" placeholder="Enter user email" ref={email} />
                        </Col>
                        <Col sm={2}>
                            <Button variant="primary" type="submit">
                                Assign User
                            </Button>
                        </Col>
                    </Form.Group>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default AssignUserForm;