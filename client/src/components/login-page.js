import React from 'react';

export default function LoginPage() {
    return(
        <div className="login-container">
            <img className="title-image" src={require('../images/mandarinx.png')} />
            <div className="login-button"> 
                <a href={'/api/auth/google'}>Login with Google</a>
            </div>
            
        </div>
    )
}
