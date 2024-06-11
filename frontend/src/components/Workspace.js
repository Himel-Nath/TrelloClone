import { Container } from "react-bootstrap";
import ViewBoards from "./boards/ViewBoards";
import AssignedUsers from "./workspaces/AssignedUsers";
import { Typography } from "@mui/material";

function Workspace(props) {
    return (
        <Container>
                <Typography variant="h2" component="h2">{props.workspace.title}</Typography>
                <p>{props.workspace.description}</p>

                {/* Assiged users */}
                <AssignedUsers/>

                {/* Board view */}
                <ViewBoards boards={props.workspace.boards}/>
        </Container>
    );
}
export default Workspace;