import React from 'react';
import './login-page.css';

export default function LoginPage() {
  return ( 
    <section className="login-container">
      <div className="login-header-wrapper">
        <article className="login-header-container">
            <div className="login-logo"> 
              <img src={require('../../../media/login-logo02.png')} />
            </div>
        </article>
        <article className="intro">
        <div className="button-container">
            <a className="login-button" href={'/api/auth/google'}>Google Login</a>
        </div>
      </article>      
      </div>
      <div className="login-pattern-topper"></div>
      <div className="login-pattern"></div>
  </section>  
  )
}
