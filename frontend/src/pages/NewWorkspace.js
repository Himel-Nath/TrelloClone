import NewWorkspaceForm from "../components/workspaces/NewWorkspaceForm";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function NewWorkspace() {
    // navigate object for modifying browser history/redirect
    const navigate = useNavigate();
    
    async function newWorkspaceHandler(workspace) {
        const userData = localStorage.getItem("user");
        if (!userData) {
            alert("You must be logged in to create a workspace");
            return;
        }

        const user = JSON.parse(userData)

        // User is logged in
        try {
            const response = await axios.post("http://localhost:8080/addWorkspace", workspace)
            console.log(response)

            const data = {
                userEmail: user.email,
                workspaceId: response.data.id.toString()
            };
            console.log(data)

            const assignResponse = await axios.put("http://localhost:8080/assignWorkspaceUser", data)
            console.log(assignResponse)
            navigate("/workspaces", { replace: true });
        } catch (error) {
            console.error("Error creating or assigning workspace:", error);
            alert("An error occurred while creating or assigning the workspace. Please try again.");
        }   
    }

    return (
        <NewWorkspaceForm onChange={newWorkspaceHandler} />
    );
}

export default NewWorkspace;