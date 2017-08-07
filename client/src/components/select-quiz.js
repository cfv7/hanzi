import React from 'react';
import { updateUserQuizChoice, getQuestions } from '../actions';
import { connect } from 'react-redux';
import './select-quiz.css';

export class SelectQuiz extends React.Component{
  handleQuizChoice(event){
    event.preventDefault();
    console.log('this is working');
    let quizChoice = event.currentTarget.value;
    console.log('this is working', quizChoice);
    this.props.dispatch(updateUserQuizChoice(quizChoice));
    this.props.dispatch(getQuestions(quizChoice))
  }
  render(){
    return(
      <div className="select-quiz-container">
        <button value="nature" onClick={(e)=> this.handleQuizChoice(e)}>
          <img src={require('../../../media/art_general-quiz.png')} className="quiz-item general" alt="nature quiz"/>
        </button>
        <button className="middle-quiz-choice " value="numbers" onClick={(e)=> this.handleQuizChoice(e)}>
          <img src={require('../../../media/art_numbers-quiz.png')} className="quiz-item numbers" alt="numbers quiz"/>
        </button>
        <button value="navigation"onClick={(e)=> this.handleQuizChoice(e)}>
          <img src={require('../../../media/art_navigation-quiz.png')} className="quiz-item navigation" alt="navigation quiz" />
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