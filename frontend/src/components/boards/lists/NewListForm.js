import { useState } from "react";
import { Button } from "@mui/material";
import { Card, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";

function NewListForm(props) {
    const { boardId} = useParams();
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const data = {
            title,
            description,
            boardId: +boardId
        }

        props.onChange(data);
    }

    return (
        <Card>
            <Card.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formTitle" className='mb-3'>
                        <Form.Control type="text" placeholder="List title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                    </Form.Group>

                    <Form.Group controlId="formDescription" className='mb-3'>
                        <Form.Control as="textarea" rows="3" placeholder="List description" value={description} onChange={(e) => setDescription(e.target.value)}/>
                    </Form.Group>

                    <Button type='submit' variant='contained' color='primary' sx={{ marginTop: 2 }}>
                        Create List
                    </Button>
                </Form>

            </Card.Body>
        </Card>
    );
}

export default NewListForm;