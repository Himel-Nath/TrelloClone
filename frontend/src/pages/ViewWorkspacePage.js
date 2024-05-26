import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Workspace from "../components/Workspace";

function ViewWorkspacePage() {
    const {id} = useParams();
    const [workspaceData, setWorkspaceData] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const getWorkspace = useCallback(() => {
        axios.get(`http://localhost:8080/getWorkspace/${id}`)
            .then(response => {
                // Sort workspace boards by id
                response.data.boards.sort((a, b) => a.id - b.id);
                setWorkspaceData(response.data);
                setLoading(false);
            });
    },[id])

    useEffect(() => {
        getWorkspace();
    }, [getWorkspace]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <Container>
            <Workspace workspace={workspaceData}/>
            <Button href={`/workspaces/${id}/createBoard`} className="w-50 my-3 p-3">Create Board</Button>
        </Container>
    );
}

export default ViewWorkspacePage;