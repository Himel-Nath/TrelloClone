import { Grid, Typography, } from '@mui/material';
import BoardCard from './BoardCard';

function ViewBoards(props) {
    return (
        <section style={{ marginTop: '32px' }}>
            <Typography variant='h2' component='h2'>Boards</Typography>
            <Grid container spacing={2}>
                {props.boards.map((board) => {
                    return (
                        <Grid item xs={12} sm={12} md={4} lg={3} key={board.id}>
                            <BoardCard board={board} key={board.id}/>
                        </Grid>
                    );
                })}
            </Grid>
        </section>
    );
};

export default ViewBoards;
