import React from 'react';
import './LoginPage.css';
import GoogleLogin from 'react-google-login';

function LoginPage() {
    return (
        <div className='loginPage'>
            <h1>This is the login page</h1>
            <GoogleLogin 
            clientId="1031176440021-lru941po7e9f6d3034t9g3bhs2peq74o.apps.googleusercontent.com"
            buttonText="Login"
            // onSuccess={this.responseGoogle}
            // onFailure={this.responseGoogle}
            cookiePolicy={'single_host_origin'}
            />
        </div>
    )
}

export default LoginPage
