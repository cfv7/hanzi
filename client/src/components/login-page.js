import React from 'react';

export default function LoginPage() {
  return (
    
    <div className="login-container">
      <img className="logo" alt="MandarinX logo" className="title-image" src={require('../images/mandarinx.png')} />
      <div className="login-button">
        <a href={'/api/auth/google'}>Google Login</a>
      </div>

      <div className="intro">
        <p> MandarinX is a simple spaced repetition game for learning Chinese characters. </p> 
        <p> Log in with your Google account to begin.</p>  
      </div>
      
      <div className="intro-container"></div>
  </div>  
  )
}
