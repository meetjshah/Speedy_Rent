import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert} from 'react-bootstrap';
import { useAuth } from './AuthContext';
import './SignUp.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useHistory } from "react-router-dom";


function UpdateProfile() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { currentUser, updatePassword, updateEmail } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }

        const promises = []
        setLoading(true)
        setError("")

        if (emailRef.current.value !== currentUser.email) {
            promises.push(updateEmail(emailRef.current.value))
          }

        if (passwordRef.current.value) {
            promises.push(updatePassword(passwordRef.current.value))
          } 
        
        Promise.all(promises)
        .then(() => {
        history.push("/userview")
        })

        .catch(() => {
        setError("Failed to update account")
        })

        .finally(() => {
        setLoading(false)
        })  
    }


    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className='cardBody'>Update Profile</h2>
                    {error && <Alert variant = "danger">{error}</Alert>}
                    <Form onSubmit = {handleSubmit}>
                        <Form.Group id = "email">

                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required
                            defaultValue = {currentUser.email}/>

                        </Form.Group>

                        <Form.Group id = "password">

                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} 
                            placeholder = "Leave blank to keep the same"/>

                        </Form.Group>

                        <Form.Group id = "password-confirm">

                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} 
                            placeholder = "Leave blank to keep the same"/>

                        </Form.Group>

                        <Button disabled = {loading} className = "signup__button" type = "submit" >Update</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="signUp">
                 <Link to = "/userview"> Cancel </Link>
                
            </div>
        </>
    )
}

export default UpdateProfile
