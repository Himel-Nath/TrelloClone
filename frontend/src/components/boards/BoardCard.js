import { Card, CardContent, Typography, Button, CardActions, Box } from '@mui/material';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function BoardCard(props) {
    const {id} = useParams();

    function deleteBoardHandler(props){
        console.log(props.board);
        // Prompt user to confirm deletion
        const confirm = window.confirm(`Are you sure you want to delete board "${props.board.title}"? This will remove all tasks associated with this board, and cannot be undone.`);

        if (!confirm)
            return;

        axios.post('http://localhost:8080/deleteBoard', props.board)
        .then(() => { props.onDelete(props.board.id) })
    };

    return (
        <Card>
            <CardContent>
                <Typography component='h4' variant='h4'>
                    {props.board.title}
                </Typography>
                <Typography component='p' variant='body1'>
                    {props.board.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant='contained' disableElevation href={`/workspaces/${id}/${props.board.id}`} style={{marginLeft: 10}}>
                    View All Tasks
                </Button>

                <Box sx={{ flexGrow: 1 }}></Box>

                <Button variant="outlined" onClick={() => {deleteBoardHandler(props)}} style={{marginRight: 10}}>
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
}

export default BoardCard;