import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

function CreateTaskForm() {
    const { id, boardId, listId } = useParams();

    const navigate = useNavigate();

    const titleRef = useRef();
    const descriptionRef = useRef();
    const assigneeRef = useRef();

    const [date, setDate] = useState(new Date().toISOString().slice(0, 10));

    const [users, setUsers] = useState('');
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

        const title = titleRef.current.value;
        const description = descriptionRef.current.value;

        const task = {
            title: title,
            description: description,
            listId: listId,
            date: new Date(date).toISOString().slice(0, 10),
        };

        if (assigneeRef.current.value) {
            task.assigneeId = assigneeRef.current.value;
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
                            <Form.Control type="text" placeholder="Enter title" ref={titleRef}/>
                        </Form.Group>

                        <Form.Group controlId="formBasicDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows="3" placeholder="Enter description" ref={descriptionRef}/>
                        </Form.Group>

                        <Form.Group controlId="formBasicDate">
                            <Form.Label>Due Date</Form.Label>
                            <Form.Control type="date" onChange={(event) => setDate(event.target.value)} value={date}/>
                        </Form.Group>

                        <Form.Group controlId="formBasicAssignedTo">
                            <Form.Label>Assigned To</Form.Label>
                            <Form.Control as="select" ref={assigneeRef}>
                                <option value="">Select assignee</option>
                                {users.map(list => (
                                    <option key={list.id} value={list.id}>
                                        {list.firstName} {list.lastName} ({list.username})
                                    </option>
                                ))}
                            </Form.Control>
                        </Form.Group>

                        <Button variant="primary" type="submit" className="my-4 w-50">
                            Create
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default CreateTaskForm;