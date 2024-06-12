import axios from "axios";
import { Button, Container } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import NewListForm from "../components/boards/lists/NewListForm";

function NewListPage() {
    const { id, boardId } = useParams();
    const navigate = useNavigate();

    const newListHandler = (list) => {
        axios.post("http://localhost:8080/addList/", list)
            .then(() => navigate(`/workspaces/${id}/${boardId}`, { replace: true }));
    }

    return (
        <Container>
            <Button href={`/workspaces/${id}/${boardId}`} className="my-2">
                Return to Board
            </Button>
            <h1>New List</h1>
            <NewListForm onChange={newListHandler} />
        </Container>
    );
}

export default NewListPage;