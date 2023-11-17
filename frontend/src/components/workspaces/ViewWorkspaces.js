import { Container } from "react-bootstrap";
import WorkspaceCard from "./WorkspaceCard";

function ViewWorkspaces(props) {
    return (
        <Container>
            {
                props.workspaces.map((workspace) => {
                    return (
                        <WorkspaceCard workspace={workspace} key={workspace.id}/>
                    );
                })
            }
        </Container>
    );
}

export default ViewWorkspaces;