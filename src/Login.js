import "./firebase.js"
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert} from 'react-bootstrap';
import { useAuth } from './AuthContext';
import './SignUp.css';
import './Login.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useHistory } from "react-router-dom";

const auth = firebase.auth();

let disabled = "Sign in with Google";
let disabled_login = false;
function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    
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
        disabled_login = true;
        history.push("/userview");
        } 
    }
    
    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/userview")
        } catch {
            setError('Failed to log in')
        }

        setLoading(false)
    }


    return (
        <>
            <Card>
                <Card.Body className='cardBody'>
                    <h2 className='cardBody_title'>User Log In</h2>
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

                        <Button disabled = {loading,disabled_login} className = "signup__button" type = "submit" >Log In</Button>
                        <Button className="sign_in" onClick={signInWithGoogle}>{disabled}</Button>
                        {/* <Link className='sign_in_with_g_button' to onClick={signInWithGoogle}> hi </Link> */}
                    </Form>

                    <div className="forgotpassword">
                        <Link to = "forgotpassword">Forgot Password?</Link>

                    </div>

                </Card.Body>
            </Card>
            <div className="signUp">
                Need an account? <Link to = "/signup">Sign Up</Link>
                
            </div>
            <section>
        
      </section>
        </>
    )
}

export default Login
