import "./firebase.js"
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert} from 'react-bootstrap';
import { useAuth } from './AuthContext';
import './SignUp.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useHistory } from "react-router-dom";

const auth = firebase.auth();
const firestore = firebase.firestore();

let disabled = "Sign in with Google";
let disabled_login = false;
function SignUp() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function signInWithGoogle() {
        if(auth.currentUser){
            auth.signOut();
            history.push("/");
            disabled = "Sign in with Google";
            disabled_login = false;
        }
        else{
        const provider = new firebase.auth.GoogleAuthProvider();
        await auth.signInWithPopup(provider);
        disabled = "Sign out";
        history.push("/userview");
        disabled_login = true;
        } 
    }
    
    
    
    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }

        try {
            setError("")
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push("/login_1")
        } catch {
            setError('Failed to create an account')
        }

        setLoading(false)
    }


    return (
        <>
            <div className='top_div'>
                <Link className="admin_button" to = '/alogin'>
                    AdminPage
                </Link>
                <Link className ="owner_button" to = '/ologin'> 
                    OwnerPage
                </Link>
                
            </div>
            <Card>
                <Card.Body className='cardBody'>
                    <h2 className='cardBody_title'>Sign Up</h2>
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

                        <Form.Group id = "password-confirm">

                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} required/>

                        </Form.Group>

                        <Button disabled = {loading,disabled_login} className = "signup__button" type = "submit" >Sign Up</Button>
                        <Button className="sign_in" onClick={signInWithGoogle}>{disabled}</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="signUp">
                Already have an account?
                <br/>
                <Link to = "/login_1"> Log In </Link>
            </div>
        </>
    )
}

export default SignUp
