import axios from "axios";
import {useState, useEffect} from "react";
import ViewWorkspaces from "../components/workspaces/ViewWorkspaces";

function Workspaces() {

    const [workspaceData, setWorkspaceData] = useState([]);

    const userString = localStorage.getItem("user");
    const user = (userString===null)? null : JSON.parse(userString);

    function getAllWorkspaces() {
        axios.get("http://localhost:8080/getWorkspaces/" + user.id)
            .then(response => {
                console.log("Getting something");


                if (user === null || user === undefined || user === "") {
                    setWorkspaceData([]);
                    return;
                }

                const workspaces = response.data;

                // Sort workspaces by id
                workspaces.sort((a, b) => {
                    return a.id - b.id;
                });

                setWorkspaceData(workspaces);
            });
    }

    useEffect(() => {
        if (user !== null)
            getAllWorkspaces();
    }, []);

    if (workspaceData === null || workspaceData.length === 0)
        return <p>No workspaces to show. If you are logged in, you can create a new workspace using the create workspace page found in the top bar.</p>;

    return (
        <div>
            <h1>Workspaces</h1>
            <ViewWorkspaces workspaces={workspaceData}/>
        </div>
    );
}

export default Workspaces;