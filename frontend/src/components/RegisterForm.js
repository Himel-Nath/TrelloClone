import React, {useState} from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

function RegisterForm(props){

    const [fName, setFName] = useState("")
    const [lName, setLName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [answer, setAnswer] = useState("")
    const [formErrors, setFormErrors] = useState([]);


    function validatePassword(password) {
        const errors = [];
    
        if (password.length < 8) {
            errors.push("Password must be at least 8 characters long");
        }
    
        if (!/[a-z]/.test(password)) {
            errors.push("Password must contain at least one lowercase letter");
        }
    
        if (!/[A-Z]/.test(password)) {
            errors.push("Password must contain at least one uppercase letter");
        }
    
        if (!/\d/.test(password)) {
            errors.push("Password must contain at least one number");
        }
    
        if (!/[^a-zA-Z0-9]/.test(password)) {
            errors.push("Password must contain at least one special character");
        }
    
        return errors;
    }
    

    function submitRegisterForm(event){
        event.preventDefault();

        const passwordErrors = validatePassword(password)
        console.log(passwordErrors)
        const errors = [...passwordErrors]

        if (password !== confirmPassword) {
            errors.push("Passwords do not match")
        }
        if (errors.length > 0) {
            setFormErrors(errors);            
            return;
        }

        setFormErrors([]);
        
        const user = {firstName: fName,lastName: lName,username,email,password,securityAnswer:answer}
        console.log(user);
        props.registerUser(user);

    }

    return(
        
        <Card>
            <Card.Body>
                <p>Register your account here. Please ensure all fields are completed, your password is at least 8 characters long and contains at least 1 uppercase, 1 lowercase, 1 number and 1 special character.</p>

                <Form onSubmit={submitRegisterForm}>
                    <Form.Group controlId="formFirstName" as={Row}>
                        <Form.Label column sm={3}>First Name</Form.Label>
                        <Col sm={9}>
                            <Form.Control type="text" placeholder="Enter first name" value={fName} onChange={(e)=>setFName(e.target.value)} required/>
                        </Col>
                    </Form.Group>

                    <Form.Group controlId="formLastName" as={Row}>
                        <Form.Label column sm={3}>Last Name</Form.Label>
                        <Col sm={9}>
                            <Form.Control type="text" placeholder="Enter last name" value={lName} onChange={(e)=>setLName(e.target.value)} required/>
                        </Col>
                    </Form.Group>

                    <Form.Group controlId="formUsername" as={Row}>
                        <Form.Label column sm={3}>Username</Form.Label>
                        <Col sm={9}>
                            <Form.Control type="text" placeholder="Enter username" value={username} onChange={(e)=>setUsername(e.target.value)} required/>
                        </Col>
                    </Form.Group>

                    <Form.Group controlId="formEmail" as={Row}>
                        <Form.Label column sm={3}>Email</Form.Label>
                        <Col sm={9}>
                            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                        </Col>
                    </Form.Group>

                    <Form.Group controlId="formPassword" as={Row}>
                        <Form.Label column sm={3}>Password</Form.Label>
                        <Col sm={9}>
                            <Form.Control type="password" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)} required min={8}/>
                        </Col>
                    </Form.Group>

                    <Form.Group controlId="formConfirmPassword" as={Row}>
                        <Form.Label column sm={3}>Confirm Password</Form.Label>
                        <Col sm={9}>
                            <Form.Control type="password" placeholder="Retype your password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} required min={8}/>
                        </Col>
                    </Form.Group>
                    
                    
                    <Form.Group controlId="formAnswer" className="mt-3" as={Row}>
                        <Form.Label column sm={5}>Security Question: What was the name of your first pet?</Form.Label>
                        <Col sm={7}>
                            <Form.Control type="text" placeholder="Name of your first pet" value={answer} onChange={(e)=>setAnswer(e.target.value)} required/>
                        </Col>
                    </Form.Group>

                    {formErrors.length > 0 && (
                        <div className="alert alert-danger mt-3">
                            <ul>
                                {formErrors.map((error, index) => (
                                    <li key={index}>{error}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    <Button type="submit" className="w-50 mt-3">Register</Button>
                </Form>
            </Card.Body>
        </Card>

    );
}

export default RegisterForm;