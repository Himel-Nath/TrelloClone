import {useRef} from "react";
import { Button, Form } from "react-bootstrap";

function LoginForm(props) {

    const emailRef = useRef();
    const passwordRef = useRef();

    function submitLoginForm(event){

        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const user = {email, password}
        //console.log(user);
        props.login(user);
    }


    return (
        <Form onSubmit={submitLoginForm}>
            <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" ref={emailRef}/>
            </Form.Group>

            <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password" ref={passwordRef} />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={submitLoginForm}>
                Login
            </Button>

            <Button variant="secondary" href="/forgotPassword">Forgot password</Button>
        </Form>
        
    );
}

export default LoginForm;