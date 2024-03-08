import axios from "axios";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";

function Login() {

    const navigate = useNavigate();

    function loginUserHandler(user, setError) {
        axios.post("http://localhost:8080/login", user)
        .then((response) => {
            if (response.status === 200) {
                console.log(response);

                const u = response.data;

                if (!u || u === "") {
                    setError("Invalid email or password")
                    return;
                }

                // Valid user, save user in local storage and redirect to workspaces
                localStorage.setItem("user", JSON.stringify(u));
                navigate("/workspaces");
                window.location.reload();
            }

        });

}


    return (
        <Container>
            <LoginForm login = {loginUserHandler} />
        </Container>
    );
}

export default Login;