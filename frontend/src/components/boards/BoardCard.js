import { Card, CardContent, Typography, Button, CardActions } from '@mui/material';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function BoardCard(props) {
    const {id} = useParams();

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
                <Button variant='contained' disableElevation href={"/workspaces"+"/"+id+"/"+props.board.id}>
                    View All Tasks
                </Button>

                <Button variant="outlined" onClick={() => {deleteBoardHandler(props.board)}}>
                    Delete
                </Button>
            </CardActions>
        </Card>
    );

    function deleteBoardHandler(board){
        console.log(board);
        // Prompt user to confirm deletion
        const confirm = window.confirm(`Are you sure you want to delete board "${board.title}"? This will remove all tasks associated with this board, and cannot be undone.`);

        if (!confirm)
            return;

        axios.post('http://localhost:8080/deleteBoard', board)
        .then(() => { window.location.reload() })
    };

}

export default BoardCard;