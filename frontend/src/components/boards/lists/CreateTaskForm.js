import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { Card, Container, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

function CreateTaskForm() {
    const { id, boardId, listId } = useParams();
    const navigate = useNavigate();

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [assignee, setAssignee] = useState('')
    const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
    const [users, setUsers] = useState([]);
    const [usersLoading, setUsersLoading] = useState(true);

    const fetchUsers = () => {
        axios.get(`http://localhost:8080/getAssignedUsers/${id}`)
            .then(response => {
                setUsers(response.data);
                setUsersLoading(false);
            });
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const task = {
            title,
            description,
            listId,
            date: new Date(date).toISOString().slice(0, 10),
        };

        if (assignee) {
            task.assigneeId = assignee;
        }

        axios.post(`http://localhost:8080/saveTasks`, task)
            .then(response => {
                navigate(`/workspaces/${id}/${boardId}/`);
            });
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    // If users are not loaded, show loading
    if (usersLoading) {
        return <div>Loading...</div>;
    }

    return (
        <Container className="my-4">
            <Card>
                <Card.Header>Create Task</Card.Header>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <h1>New Task</h1>

                        <Form.Group controlId="formBasicTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                        </Form.Group>

                        <Form.Group controlId="formBasicDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows="3" placeholder="Enter description" value={description} onChange={(e) => setDescription(e.target.value)}/>
                        </Form.Group>

                        <Form.Group controlId="formBasicDate">
                            <Form.Label>Due Date</Form.Label>
                            <Form.Control type="date" onChange={(event) => setDate(event.target.value)} value={date}/>
                        </Form.Group>

                        <Form.Group controlId="formBasicAssignedTo">
                            <Form.Label>Assigned To</Form.Label>
                            <Form.Control as="select" value={assignee} onChange={(e) => setAssignee(e.target.value)}>
                                <option value="">Select assignee</option>
                                {users.map(list => (
                                    <option key={list.id} value={list.id}>
                                        {list.firstName} {list.lastName} ({list.username})
                                    </option>
                                ))}
                            </Form.Control>
                        </Form.Group>

                        <Button type='submit' variant='contained' color='primary' sx={{ marginTop: 2 }}>
                            Create
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default CreateTaskForm;