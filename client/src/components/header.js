import React from 'react';
import { logOut } from '../actions'
import { connect } from 'react-redux';

export function Header(props) {
  return (
    <div className="header-container">
      <div className="header-title">
        <bold>Mandarin X</bold>
      </div>
      <div className="log-out">
        <button onClick={() => props.dispatch(logOut())} >Log Out</button>
      </div>
    </div>

  )
}
const mapStateToProps = state => ({

})

export default connect(mapStateToProps)(Header);