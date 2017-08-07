import React from 'react';
import { logOut, signOut } from '../actions'
import { connect } from 'react-redux';


export function Header(props) {
  function getUserName(){
    if(props.userInfo){
      return(
        <div>
          <div className="user-box">
            <div className="user-title">{props.userInfo.displayName}
            <br/></div>
            <a 
              className="return-btn"
              href="/"
            >
              <i 
                className="fa fa-home" 
                aria-hidden="true" 
                title="dashboard" 
                alt="home button"
              ></i>
            </a>    
            <a 
              className="logout-btn"
              href="/api/auth/logout"
            >
              <i 
              className="fa fa-sign-out" 
              aria-hidden="true" 
              title="logout" 
              alt="logout button"
              ></i>
            </a>        
          </div>
        </div>
      )
    }
  }
  
  return (
    <div className="header-container">
      <div className="header-title-container">
        <img src={require('../../../media/header-logo.png')} />
      </div>
        <span id="username">{getUserName()}</span>
    </div>

  )
}
const mapStateToProps = state => ({
  userInfo: state.userInfo
})

export default connect(mapStateToProps)(Header);