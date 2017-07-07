import React from 'react';
import './results-page.css';
import {connct} from 'react-redux';

class ResultsPage extends React.Component{
  render(){
    return(
      <div className="results-container">
       <h1> HELLO </h1>
       
        {this.props.correct} / {this.props.incorrect + this.props.correct}
      </div>
    )
  }
}