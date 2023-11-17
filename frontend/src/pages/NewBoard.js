import axios from "axios";
import { Button, Container } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import CreateBoardForm from "../components/boards/CreateBoardForm";

function NewBoard() {
    // Workspace id from url
    const {id} = useParams();
    const navigate = useNavigate();

    function newBoardHandler(board) {
        axios.post("http://localhost:8080/addBoard/", board)
            .then(() => navigate("/workspaces/"+id, { replace: true }));
    }

    return (
        <Container>
            <Button href={"/workspaces/"+id}>Back to Workspace</Button>
            <h1>New Board</h1>
            <CreateBoardForm onChange={newBoardHandler} />
        </Container>
    );
}

export default NewBoard;