import React from 'react';
import './login-page.css';

export default function LoginPage() {
  return (
    
    <section className="login-container">
      <div className="login-header-wrapper">
        <article className="login-header-container">
          {/*<img className="logo" alt="MandarinX logo" className="title-image" src={require('../images/mandarinx2.png')} />*/}
            <div className="login-logo"> 
            <p className="login-logo-script"> 汉字 </p>
          </div>
          <div className="login-title">  
            <h1>hànzì</h1>
          </div>
 
        </article>
      </div>

      <article className="intro">
        <p> 
          Hànzì is a simple spaced repetition game for learning Chinese characters. 
        </p>
        <div className="button-container">
            <a className="login-button" href={'/api/auth/google'}>Google Login</a>
        </div>
      </article>      
  </section>  
  )
}
