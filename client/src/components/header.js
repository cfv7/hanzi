import React from 'react';
import { logOut, signOut } from '../actions'
import { connect } from 'react-redux';

export function Header(props) {
  function getUserName(){
    if(props.userInfo){
      return(
        <div className="log-out">
          {props.userInfo.displayName}
          <br/>
          <a className="logout-btn"href="/api/auth/logout">log out</a>
        </div>
      )
    }
  }
  
  return (
    <div className="header-container">
      <div className="header-title-container">
        <span className="header-title">hànzì</span>
      </div>
      {getUserName()}
    </div>

  )
}
const mapStateToProps = state => ({
  userInfo: state.userInfo
})

export default connect(mapStateToProps)(Header);