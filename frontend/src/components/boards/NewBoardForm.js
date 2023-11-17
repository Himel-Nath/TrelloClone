import { createRef } from "react";
import { Button, Container, Form } from "react-bootstrap";

function NewBoardForm(props) {

    const title = createRef();
    const description = createRef();

    const createBoard = (e) => {
        e.preventDefault();

        const boardName = title.current.value;
        const boardDescription = description.current.value;

        const data = {
            title: boardName,
            description: boardDescription
        }

        props.onChange(data);
    }



    return (
        <Container>
            <Form onSubmit={createBoard}>
                <Form.Group controlId="formBoardTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter title" ref={title} required />
                </Form.Group>

                <Form.Group controlId="formBoardDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Enter description" ref={description}/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Create Board
                </Button>
            </Form>
        </Container>
    );
}

export default NewBoardForm;