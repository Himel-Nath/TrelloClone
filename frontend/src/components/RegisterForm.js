import { useRef } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

function RegisterForm(props){
    const fNameRef = useRef();
    const lNameRef = useRef();
    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const answerRef = useRef();

    function submitRegisterForm(event){
        event.preventDefault();
        
        const form = event.currentTarget;
        const password = passwordRef.current.value;
        console.log(password);

        if(password.length < 8){
            alert("Password must be at least 8 characters long");
            return;
        }

        if (password.search(/[a-z]/i) < 0) {
            alert("Password must contain at least one lowercase letter");
            return;
        }

        if (password.search(/[A-Z]/i) < 0) {
            alert("Password must contain at least one uppercase letter");
            return;
        }

        if (password.search(/[0-9]/i) < 0) {
            alert("Password must contain at least one number");
            return;
        }

        if (password.search(/[^a-zA-Z0-9]/i) < 0) {
            alert("Password must contain at least one special character");
            return;
        }

        if (form.checkValidity() === false) {
            alert("Please fill out all fields and ensure password is at least 8 characters long and contains at least one upper case letter, one lower case letter, one number, and one special character");
            return;
        }
        const firstName =fNameRef.current.value;
        const lastName =lNameRef.current.value;
        const username =usernameRef.current.value;
        const email =emailRef.current.value;
        const securityAnswer = answerRef.current.value;
        const user = {firstName,lastName,username,email,password,securityAnswer}
        console.log(user);
        props.registerUser(user);

    }

    return(
        <Card>
            <Card.Body>
                <p>Register your account here. Please ensure all fields are filled, your password is at least 8 characters long and contains at least 1 uppercase, 1 lowercase, 1 number and 1 special character.</p>

                <Form onSubmit={submitRegisterForm}>
                    <Form.Group controlId="formFirstName" as={Row}>
                        <Form.Label column sm={3}>First Name</Form.Label>
                        <Col sm={9}>
                            <Form.Control type="text" placeholder="Enter first name" ref={fNameRef} required/>
                        </Col>
                    </Form.Group>

                    <Form.Group controlId="formLastName" as={Row}>
                        <Form.Label column sm={3}>Last Name</Form.Label>
                        <Col sm={9}>
                            <Form.Control type="text" placeholder="Enter last name" ref={lNameRef} required/>
                        </Col>
                    </Form.Group>

                    <Form.Group controlId="formUsername" as={Row}>
                        <Form.Label column sm={3}>Username</Form.Label>
                        <Col sm={9}>
                            <Form.Control type="text" placeholder="Enter username" ref={usernameRef} required/>
                        </Col>
                    </Form.Group>

                    <Form.Group controlId="formEmail" as={Row}>
                        <Form.Label column sm={3}>Email</Form.Label>
                        <Col sm={9}>
                            <Form.Control type="email" placeholder="Enter email" ref={emailRef} required/>
                        </Col>
                    </Form.Group>

                    <Form.Group controlId="formPassword" as={Row}>
                        <Form.Label column sm={3}>Password</Form.Label>
                        <Col sm={9}>
                            <Form.Control type="password" placeholder="Enter password" ref={passwordRef} required min={8}/>
                        </Col>
                    </Form.Group>
                    
                    <Form.Group controlId="formAnswer" className="mt-3" as={Row}>
                        <Form.Label column sm={5}>Security Question: What was the name of your first pet?</Form.Label>
                        <Col sm={7}>
                            <Form.Control type="text" placeholder="Name of first pet" ref={answerRef} required/>
                        </Col>
                    </Form.Group>

                    <Button type="submit" className="w-50 mt-3">Register</Button>
                </Form>
            </Card.Body>
        </Card>

    );
}

export default RegisterForm;