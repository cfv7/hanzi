import React from 'react';
import { connect } from 'react-redux';
import * as Cookies from 'js-cookie';
import './question-page.css';
import './dashboard.css';
import './header.css'
import Header from './header.js';
import QuestionPage from './question-page';
import SelectQuiz from './select-quiz';
import { getUserInfo }from '../actions';

export class Dashboard extends React.Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.dispatch(getUserInfo());
  }
  render(){
    return(
      <div className="dashboard-container">
        <Header />
        <div className="scales-footer"></div>
        <div className="dashboard-info">
          <p>
            Welcome to Hanzi, the fun way to learn Mandarin!<br />
            Become a master of Mandarin by challenging yourself with a series of
            spaced repetition flashcards that are sure to advance your
            language skills!
          </p>
          <h2>Quiz Category</h2>
          <SelectQuiz />
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({})

export default connect(mapStateToProps)(Dashboard);