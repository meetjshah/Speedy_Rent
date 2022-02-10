import React, { useState } from 'react';
import { Button, Card, Alert } from "react-bootstrap";
import { useAuth } from './AuthContext';
import { Link, useHistory } from "react-router-dom";



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
                    {error && <Alert variant = "danger">{error}</Alert>}
                    <strong>Email:</strong>{currentUser.email}
                    <Link to = "/updateprofile" className = "btn btn-primary w-100 mt-3">
                        Update Profile
                    </Link>
                </Card.Body>

            </Card>
            <div className="signUp">
                <Button variant = "link" onClick = {handleLogout}> Log Out </Button>
                
            </div>

        </>
    )
}

export default UserView
