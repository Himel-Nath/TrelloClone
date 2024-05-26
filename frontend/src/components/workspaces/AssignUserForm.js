import { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

function AssignUserForm(props) {
    const {id} = useParams();
    const [email, setEmail] = useState('');

    const assignUser = (e) => {
        e.preventDefault();

        const data = {
            userEmail: email,
            workspaceId: id
        }

        props.onChange(data);
    }

    return (
        <Card>
            <Card.Body>
                <Form onSubmit={assignUser}>
                    <Form.Group as={Row} controlId="formAssignEmail">
                        <Form.Label column sm={2}>Assign new user</Form.Label>
                        <Col sm={7}>
                            <Form.Control type="email" placeholder="Enter user email" value={email} onChange={(e) => setEmail(e.target.value)} />
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