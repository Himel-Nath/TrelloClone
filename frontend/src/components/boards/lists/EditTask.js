import { useState, useEffect, useRef } from 'react';
import { Button as DefaultButton, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import FormLabel from '@mui/material/FormLabel';
import { Button } from '@mui/material';

export default function EditTask() {
    // URL parameters
    const { id, boardId, listId, taskID } = useParams();

    // Navigate for redirect
    const navigate = useNavigate();

    // State for task
    const [newDate, setNewDate] = useState(new Date().toISOString().slice(0, 10));
    const [lists, setLists] = useState([]);
    const [listsLoading, setListsLoading] = useState(true);
    const [users, setUsers] = useState('');
    const [usersLoading, setUsersLoading] = useState(true);

    const newListId = useRef();
    const assigneeId = useRef();

    //get the boardID and find all lists name in this board
    const fetchLists = () => {
        axios.get(`http://localhost:8080/getLists/${boardId}`)
            .then(response => {
                setLists(response.data);
                setListsLoading(false);
            });
    }

    const fetchUsers = () => {
        axios.get(`http://localhost:8080/getAssignedUsers/${id}`)
            .then(response => {
                setUsers(response.data);
                setUsersLoading(false);
            });
    }

    // Get lists on page load
    useEffect(() => {
        fetchUsers();
        fetchLists();
    }, []);

    // Function for handling submit
    function editTaskDetails(event){
        event.preventDefault();

        let date = newDate;
        let listId = +(newListId.current.value);

        const taskDateBody = {id: taskID, date};
        const taskListIdBody = {id: taskID, listId};

        //post method here
        axios.post('http://localhost:8080/updateDueDate', taskDateBody)
        .then(response => {
            // Nested axios call for updating listId
            axios.post('http://localhost:8080/changeStatus', taskListIdBody)
            .then(response => {
                // Nested axios call for updating assignee
                if (assigneeId.current && assigneeId.current.value) {
                    axios.post(`http://localhost:8080/assignTaskUser/${taskID}/${assigneeId.current.value}`)
                    .then(response => {
                        navigate(`/workspaces/${id}/${boardId}`);
                    });
                }
                else {
                    navigate(`/workspaces/${id}/${boardId}`);
                }
            });
        });
    }

    // When the page isn't loaded, show a loading message
    if (listsLoading || usersLoading) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        );
    }

    // When page is loaded, show the form page
    return (
        <Container>
            <DefaultButton variant="primary" onClick={() => navigate(`/workspaces/${id}/${boardId}`)} className="m-4">
                Back to Board
            </DefaultButton>

            <Card>
                <Card.Header>
                    <h1>Edit Task</h1>
                </Card.Header>
                <Card.Body>
                    <Form onSubmit={editTaskDetails}>
                        {/* Assign User dropdown */}
                        <Form.Group as={Row} controlId="formAssignee">
                            <Form.Label column sm="2">
                                Assignee
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control as="select" ref={assigneeId}>
                                    <option value="">No assignee</option>
                                    {users.map(list => (
                                        <option key={list.id} value={list.id}>
                                            {list.firstName} {list.lastName} ({list.username})
                                        </option>
                                    ))}
                                </Form.Control>
                            </Col>
                        </Form.Group>

                        {/* List status and Due Date */}
                        <Row>
                            <Col xs={8}>
                                <Form.Group controlId="formListSelect">
                                    <Row>
                                        <Col xs={3}>
                                            <FormLabel>Status</FormLabel>
                                        </Col>
                                        <Col>
                                            <Form.Select ref={newListId}>
                                                {lists.map(list => (
                                                    <option key={list.id} value={list.id}>
                                                        {list.title}
                                                    </option>
                                                ))}
                                            </Form.Select>
                                        </Col>
                                    </Row>
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group controlId="formDateFilter">
                                    <Form.Label className="m-2">Due Date</Form.Label>
                                    <input type ="date" onChange={date => setNewDate(date.target.value)}></input>
                                </Form.Group>
                            </Col>
                        </Row>
                            

                        <Button type='submit' variant='contained' color='primary' sx={{ marginTop: 2 }}>Edit Task</Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}