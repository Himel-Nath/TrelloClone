import axios from "axios";
import {useState, useEffect, useCallback} from "react";
import ViewWorkspaces from "../components/workspaces/ViewWorkspaces";

function Workspaces() {

    const [workspaceData, setWorkspaceData] = useState([]);

    const userString = localStorage.getItem("user");
    const user = userString ? JSON.parse(userString) : null;

    const getAllWorkspaces = useCallback(() => {
        if (user === null) {
            setWorkspaceData([]);
            return;
        }

        axios.get(`http://localhost:8080/getWorkspaces/${user.id}`)
            .then(response => {
                const workspaces = response.data;

                // Sort workspaces by id
                workspaces.sort((a, b) => a.id - b.id);

                setWorkspaceData(workspaces);
            })
            .catch(error => {
                console.error("Error fetching workspaces ", error);
                setWorkspaceData([]);
            });
    }, [user]);

    useEffect(() => {
        if (user !== null) {
            getAllWorkspaces();
        }
    }, [user, getAllWorkspaces]);

    if (workspaceData === null || workspaceData.length === 0)
        return <p>No workspaces to show. You can create a new workspace using the create workspace button in the nav bar.</p>;

    return (
        <div>
            <h1>Workspaces</h1>
            <ViewWorkspaces workspaces={workspaceData}/>
        </div>
    );
}

export default Workspaces;