import { useState } from "react";
import { Button } from "@mui/material";
import { Container, Form } from "react-bootstrap";

function NewWorkspaceForm(props) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    }

    const createWorkspace = (e) => {
        e.preventDefault();

        const data = {
            title,
            description,
        }

        props.onChange(data);
    }


    return (
        <Container>
            <h1>Create New Workspace</h1>

            <Form onSubmit={createWorkspace}>
                <Form.Group controlId="formWorkspaceTitle" className="mb-3">
                    <Form.Control type="text" placeholder="Workspace Title" value={title} onChange={handleTitleChange}/>
                </Form.Group>

                <Form.Group controlId="formWorkspaceDescription" className="mb-3">
                    <Form.Control as="textarea" rows={3} placeholder="Workspace Description" value={description} onChange={handleDescriptionChange}/>
                </Form.Group>

                <Button type='submit' variant='contained' color='primary' sx={{ marginTop: 2 }}>
                    Create Workspace
                </Button>
            </Form>
        </Container>
    )
}

export default NewWorkspaceForm;