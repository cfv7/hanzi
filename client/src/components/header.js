import React from 'react';
import { logOut, signOut } from '../actions'
import { connect } from 'react-redux';


export function Header(props) {
  function getUserName(){
    if(props.userInfo){
      return(
        <div>
          <div className="user-box">
            {props.userInfo.displayName}
            <br/>
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
        <span className="header-title">hànzì</span>
      </div>
        <span id="username">{getUserName()}</span>
    </div>

  )
}
const mapStateToProps = state => ({
  userInfo: state.userInfo
})

export default connect(mapStateToProps)(Header);