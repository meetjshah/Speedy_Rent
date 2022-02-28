import React, { useState } from 'react';
import { Button, Card, Alert } from "react-bootstrap";
import { useAuth } from './AuthContext';
import { Link, useHistory } from "react-router-dom";
import "./UserView.css";

function UserView() {

    const [error, setError] = useState('')
    const {currentUser, logout} = useAuth()
    const history = useHistory()

    async function handleLogout() {
        setError("")

        try{
            await logout()
            history.push('/')
            // history.push('/login_1')
        } catch {
            setError("Failed to log out")
        }
        
    }

    return (
        <>
            
            <Card>
                <Card.Body>
                    <h2 className='cardBody'>Profile</h2>
                    <div className ="user_page_button_div">
                        <Link className ="user_page_button" to = '/user_page'> 
                            User Page
                        </Link>
                    </div>
                    <Link className="update_profile_button" to = "/updateprofile">
                        Update Profile
                    </Link>
                    <br/>
                    <div className ="buttom_div">
                        {error && <Alert variant = "danger">{error}</Alert>}
                        <strong>Email:</strong>{currentUser.email}
                    </div>
                </Card.Body>

            </Card>
            <div className="signUp">
                <Button variant = "link" onClick = {handleLogout}> Log Out </Button>
            </div>

        </>
    )
}

export default UserView
