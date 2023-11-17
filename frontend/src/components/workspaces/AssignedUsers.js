import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Container, ListGroup } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import AssignUserForm from "./AssignUserForm";

function AssignedUsers() {
    const {id} = useParams(); // Workspace ID for retrieving assigned users

    const [users, setUsers] = useState([]);

    function getAssignedUsers() {
        axios.get("http://localhost:8080/getAssignedUsers/" + id)
            .then((response) => {
                setUsers(response.data);
            }
        );
    }

    function assignUser(body) {
        axios.put("http://localhost:8080/assignWorkspaceUser/", body)
            .then(() => getAssignedUsers());
    }

    useEffect(() => {
        getAssignedUsers();
    }, []);

    return (
        <Container>
            <Card>
                <Card.Header>Assigned Users</Card.Header>
                <Card.Body>
                <ListGroup>
                    {users.map((user) => {
                        return <ListGroup.Item key={user.id}>{user.firstName} {user.lastName} ({user.username})</ListGroup.Item>;
                    }
                    )}
                </ListGroup>

                <AssignUserForm onChange={assignUser} />
                </Card.Body>
            </Card>
        </Container>
    )
}

export default AssignedUsers;