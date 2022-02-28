import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert} from 'react-bootstrap';
import { useAuth } from './AuthContext';
import './CheckoutLogin.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useHistory } from "react-router-dom";

function CheckoutLogin() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/checkoutpage")
            //history.push("/userview")
        } catch {
            setError('Failed to log in')
        }

        setLoading(false)
    }


    return (
        <div className='all_div'>
            <Card>
                <Card.Body className='cardBody'>
                    <h2 className='cardBody_title'>Log In</h2>
                    {error && <Alert variant = "danger">{error}</Alert>}
                    <Form onSubmit = {handleSubmit}>
                        <Form.Group id = "email">

                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required/>

                        </Form.Group>

                        <Form.Group id = "password">

                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required/>

                        </Form.Group>

                        <Button disabled = {loading} className = "signup__button" type = "submit" >Log In</Button>
                    </Form>

                    <div className="forgotPassword">
                        <Link to = "forgotpassword">Forgot Password?</Link>

                    </div>

                </Card.Body>
            </Card>
            <div className="signUp">
                Need an account? 
                <br/>
                <Link to = "/signup">Sign Up</Link>
            </div>
        </div>
    )
}

export default CheckoutLogin
