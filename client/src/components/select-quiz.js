import React from 'react';
import { updateUserQuizChoice, getQuestions } from '../actions';
import { connect } from 'react-redux';

export class SelectQuiz extends React.Component{
  handleQuizChoice(event){
    event.preventDefault();
    let quizChoice = event.target.value;
    this.props.dispatch(updateUserQuizChoice(quizChoice));
    this.props.dispatch(getQuestions(quizChoice))
  }
  render(){
    return(
      <div className="select-quiz-container">
        <button  value="general" onClick={(e)=> this.handleQuizChoice(e)}>
          General Quiz
        </button><br />
        <button  value="numbers" onClick={(e)=> this.handleQuizChoice(e)}>
          Numbers
        </button>
         <button  value="navigation" onClick={(e)=> this.handleQuizChoice(e)}>
          Navigation
        </button>
    </div>
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