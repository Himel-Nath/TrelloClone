import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

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
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter title" value={title} onChange={handleTitleChange}/>
                </Form.Group>

                <Form.Group controlId="formWorkspaceDescription" className="mb-3">
                    <Form.Label >Description</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Enter description" value={description} onChange={handleDescriptionChange}/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Create Workspace
                </Button>
            </Form>
        </Container>
    )
}

export default NewWorkspaceForm;