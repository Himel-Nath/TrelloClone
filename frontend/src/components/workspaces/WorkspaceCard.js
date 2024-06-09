import { Button, Card } from "react-bootstrap";

function WorkspaceCard(props) {
    return (
        <Card>
            <Button variant="outline-primary" href={`/workspaces/${props.workspace.id}`}>
                <Card.Body>
                    <h2>{props.workspace.title}</h2>
                    <p>{props.workspace.description}</p>
                </Card.Body>
            </Button>
        </Card>
    );
}
export default WorkspaceCard;