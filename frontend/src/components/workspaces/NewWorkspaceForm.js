import { createRef } from "react";
import { Button, Container, Form } from "react-bootstrap";

function NewWorkspaceForm(props) {
    const title = createRef();
    const description = createRef();

    const createWorkspace = (e) => {
        e.preventDefault();

        const workspaceName = title.current.value;
        const workspaceDescription = description.current.value;

        const data = {
            title: workspaceName,
            description: workspaceDescription
        }

        props.onChange(data);
    }


    return (
        <Container>
            <h1>Create New Workspace</h1>

            <Form onSubmit={createWorkspace}>
                <Form.Group controlId="formWorkspaceTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter title" ref={title}/>
                </Form.Group>

                <Form.Group controlId="formWorkspaceDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Enter description" ref={description}/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Create Workspace
                </Button>
            </Form>
        </Container>
    )
}

export default NewWorkspaceForm;