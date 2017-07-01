import React from 'react';
import './question-page.css';
import './dashboard.css';
import './header.css'
import Header from './header.js';
import QuestionPage from './question-page';
export default class Dashboard extends React.Component{
  render(){
    return(
      <div className="dashboard-container">
        <Header />
        {/*<div className="score-board">
          <h2>Score Board</h2>
          <p>Score Total:  #</p>
        </div>*/}
        <div className="dashboard-info">
          <h2>Quiz Category</h2>
          <button><a href={'/api/questions'} >General Quiz</a></button>
        </div>
      </div>
    )
  }
}