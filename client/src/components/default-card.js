import React from 'react';
import './card.css';
import {connect} from 'react-redux';


export default class DefaultCard extends React.Component{
  render(){
    return(
        <div className="feedback-card-container">
          <div className="default-card">
          </div>
        </div>
    )
  }
}

