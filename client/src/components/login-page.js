import React from 'react';
import './question-page.css';

export default function LoginPage() {
  return (
    
    <div className="login-container">
      <div className="login-header-wrapper">
      <div className="login-header-container">
        {/*<img className="logo" alt="MandarinX logo" className="title-image" src={require('../images/mandarinx2.png')} />*/}
        <div className="login-logo"> 
          <p className="login-logo-script"> 汉字 </p>
       </div>
       <div className="login-title">  
          <h1>hànzì</h1>
       </div>
      </div>
      </div>

      <div className="intro">
        <p> 
          Hànzì is a simple spaced repetition game for learning Chinese characters. 
        </p>
        <div className="button-container">
          <button className="login-button">
            <a href={'/api/auth/google'}>Log in with Google</a>
          </button>
        </div>
      </div>      
  </div>  
  )
}
