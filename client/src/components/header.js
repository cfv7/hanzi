import React from 'react';
import { logOut, signOut } from '../actions'
import { connect } from 'react-redux';

export function Header(props) {
  
  return (
    <div className="header-container">
      <div className="header-title-container">
        <span className="header-title">Mandarin X</span>
      </div>
      <div className="log-out">
        {props.displayName}
        <br/>
        <a className=""href="/api/auth/logout">log out</a>
      </div>
    </div>

  )
}
const mapStateToProps = state => ({
  displayName: state.userInfo.displayName
})

export default connect(mapStateToProps)(Header);