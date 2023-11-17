import { Alert } from "react-bootstrap";

function Workspace(props) {
    if (!props.workspace) {
        return (
            <Alert>
                <Alert.Heading>No workspace found</Alert.Heading>
            </Alert>
        );
    }

    return (
        <h1>{props.workspace.title}</h1>
    );
}

export default Workspace;