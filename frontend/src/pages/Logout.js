import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
    const navigation = useNavigate();

    useEffect(() => {
        localStorage.removeItem("user");
        navigation("/login");
        window.location.reload();
    }, []);

    return (
        <div>
            <p>Logging out...</p>
        </div>
    );
}

export default Logout;