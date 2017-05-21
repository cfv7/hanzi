import React from 'react';

export default function LoginPage() {
  return (
    
    <div className="login-container">
      <img className="title-image" src={require('../images/mandarinx.png')} />
      <div className="login-button">
        <a href={'/api/auth/google'}>Login with Google</a>
      </div>
    <div className="intro">
      <p> MandarinX is a simple spaced repetition game for learning Chinese characters. </p> 
      <p> Log in with your Google account to begin.</p> 
     
    </div>
    </div>
    
  )
}
