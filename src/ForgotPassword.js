import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert} from 'react-bootstrap';
import { useAuth } from './AuthContext';
import './SignUp.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function ForgotPassword() {
    const emailRef = useRef()
    const { resetPassword } = useAuth()
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)


    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setMessage("")
            setError("")
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage('Check your inbox for further instructions')
        } catch {
            setError('Failed to reset password')
        }

        setLoading(false)
    }


    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className='cardBody'>Password Reset</h2>
                    {error && <Alert variant = "danger">{error}</Alert>}
                    {message && <Alert variant = "success">{message}</Alert>}
                    <Form onSubmit = {handleSubmit}>
                        <Form.Group id = "email">

                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required/>

                        </Form.Group>

                        
                        <Button disabled = {loading} className = "signup__button" type = "submit" >Reset Password</Button>
                    </Form>

                    <div className="signUp mt-3">
                        <Link to = "/login_1">Back to Log In</Link>

                    </div>

                </Card.Body>
            </Card>
            <div className="signUp">
                Need an account? <Link to = "/signup">Sign Up</Link>
                
            </div>
        </>
    )
}

export default ForgotPassword
