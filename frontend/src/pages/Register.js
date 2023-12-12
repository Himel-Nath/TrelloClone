import RegisterForm from "../components/RegisterForm";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";


function RegisterPage(){

    const navigate = useNavigate();
    
    function RegisterUserHandler(user){
        fetch("http://localhost:8080/saveUser",{
            method : "POST",
            body: JSON.stringify(user),
            headers: {'Content-Type': 'application/json'}

        }).then(()=>navigate('/Login',{replace:true}))
    }

    return(
        <div>
            <Container>
                <RegisterForm registerUser={RegisterUserHandler}/>
            </Container>
        </div>
    );
}
export default RegisterPage;