import React from 'react';
import { updateUserQuizChoice } from '../actions';
import { connect } from 'react-redux';

export class SelectQuiz extends React.Component{
  handleQuizChoice(event){
    event.preventDefault();
    console.log(event.target.value);
    this.props.dispatch(updateUserQuizChoice(event.target.value));
  }
  render(){
    return(
      <button  value="General Quiz" onClick={(e)=> this.handleQuizChoice(e)}>
        General Quiz
      </button>
    )
  }
}
const mapStateToProps = state => ({
  questions: state.questions,
  index: state.index,
  isFlipped: state.isFlipped,
  disableToggle: state.disableToggle,
  correct: state.correct,
  incorrect: state.incorrect,
  currentQuestion: state.currentQuestion,
  totalScore: state.totalScore,
  userQuizChoice: state.userQuizChoice,
})

export default connect(mapStateToProps)(SelectQuiz);