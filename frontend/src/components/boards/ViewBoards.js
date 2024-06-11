import { Grid, Typography, } from '@mui/material';
import BoardCard from './BoardCard';
import { useState } from 'react';

function ViewBoards(props) {
    const [boards, setBoards] = useState(props.boards)

    const handleDelete = (boardId) => {
        const updatedBoards = boards.filter(board => board.id !== boardId)
        setBoards(updatedBoards)
    }

    return (
        <section style={{ marginTop: '32px' }}>
            <Typography variant='h2' component='h2'>Boards</Typography>
            <Grid container spacing={2} style={{marginTop: 2}}>
                {boards.map((board) => {
                    return (
                        <Grid item xs={12} sm={12} md={4} lg={3} key={board.id}>
                            <BoardCard board={board} onDelete={handleDelete}/>
                        </Grid>
                    );
                })}
            </Grid>
        </section>
    );
};

export default ViewBoards;
