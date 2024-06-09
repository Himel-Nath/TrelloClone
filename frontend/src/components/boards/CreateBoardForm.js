import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import { Container, Form } from 'react-bootstrap';

function CreateBoardForm(props) {
    const {id} = useParams();
    const [boardName, setBoardName] = useState('')
    const [boardDesc, setBoardDesc] = useState('')

    function createBoard(e) {
        e.preventDefault();
        
        const board = {
            title: boardName,
            description: boardDesc,
            workspaceId: id,
            dateCreated: new Date(),
        };

        props.onChange(board);  // sends to parent component

        setBoardName('')
        setBoardDesc('')
    };

    return (
        <Container className='mt-3'>
            <h1>Create New Board</h1>

            <Form onSubmit={createBoard}>
                <Form.Group controlId='boardName' className='mb-3'>
                    <Form.Control
                        type='text'
                        placeholder='Board Name'
                        value={boardName}
                        onChange={(e) => setBoardName(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId='boardDesc' className='mb-3'>
                    <Form.Control
                        type='text'
                        placeholder='Board Description'
                        value={boardDesc}
                        as="textarea"
                        rows="3"
                        onChange={(e) => setBoardDesc(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="button">
                    <Button type='submit' variant='contained' color='primary' sx={{ marginTop: 2 }}>
                        Create Board
                    </Button>
                </Form.Group>
            </Form>
        </Container>

        // <section style={{ marginTop: '32px' }}>
        //     <Typography variant='h2' component='h2'>Create New Board</Typography>
        //     <form onSubmit={createBoard}>
        //         <TextField
        //             id='boardName'
        //             placeholder='Board Name'
        //             required
        //             fullWidth
        //             variant="outlined"
        //             sx={{marginTop: 2}}
        //             value={boardName}
        //             onChange={(e) => setBoardName(e.target.value)}
        //         />
        //         <TextField
        //             id='boardDesc'
        //             placeholder='Board Description'
        //             multiline
        //             rows={4}
        //             required
        //             fullWidth
        //             variant="outlined"
        //             sx={{marginTop: 2}}                    
        //             value={boardDesc}
        //             onChange={(e) => setBoardDesc(e.target.value)}
        //         />
        //         <Button type='submit' variant='contained' color='primary' sx={{ marginTop: 2 }}>
        //             Create Board
        //         </Button>
        //     </form>
        // </section>
    );
};

export default CreateBoardForm;