import { useRef } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";

function NewListForm(props) {
    const {id, boardId} = useParams();

    const title = useRef();
    const description = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const titleValue = title.current.value;
        const descValue = description.current.value;

        const data = {
            title: titleValue,
            description: descValue,
            boardId: +boardId
        }

        props.onChange(data);
    }

    return (
        <Card>
            <Card.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter title" ref={title}/>
                    </Form.Group>

                    <Form.Group controlId="formDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows="3" placeholder="Enter description" ref={description}/>
                    </Form.Group>

                    <Button variant="primary" type="submit" className="w-100 mt-4">
                        Create List
                    </Button>
                </Form>

            </Card.Body>
        </Card>
    );
}

export default NewListForm;