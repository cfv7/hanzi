import React from 'react';
import * as Cookies from 'js-cookie';
import { connect } from 'react-redux';
import { submitAnswer, flipCard, nextCard, disableToggle, addToIncorrect, addToCorrect, getUserInfo, addToTotalScore, updateFeedback , displayModal} from '../actions';
import FrontCard from './front-card';
import BackCard from './back-card';
import ScoreCounter from './score-counter';
import Header from './header';
import './question-page.css';
import CorrectCard from './correct-card';
import IncorrectCard from './incorrect-card';
import DefaultCard from './default-card';
import QuizEndModal from './quiz-end-modal';


class QuestionPage extends React.Component {
  constructor(props) {
    super(props);
  }
 
  componentDidMount() {
    this.props.dispatch(getUserInfo())
  }

  handleSubmit(event) {
    event.preventDefault();
    this.compareValues(this.input.value);
    if(this.props.isFlipped){
      this.props.dispatch(flipCard());
    }
    this.input.value = '';
  }
  //Comparison logic can be done in reducer.
  compareValues(input) {
    let value = input.toLowerCase();
    let newTotal = this.props.totalScore;
    console.log('newTotal', newTotal);
    // dispatch the value itself to the reducer.

    if(value === this.props.currentQuestion.meaning){
        let newValue = this.props.correct;
        this.props.dispatch(addToCorrect(++newValue));
        this.props.dispatch(updateFeedback('Correct'));
    }
    else{
        let newValue = this.props.incorrect;
        this.props.dispatch(addToIncorrect(++newValue));
        this.props.dispatch(updateFeedback('Incorrect'));
    }
    this.props.dispatch(submitAnswer(value));
  }

  handleFlipBtn() {
    this.props.dispatch(flipCard());
  }

  displayFeedback() {
  }
  
  render() {
    let feedback;
    if (this.props.feedback === 'Correct'){
      feedback = <CorrectCard  />
    }
    else if(this.props.feedback === 'Incorrect') {
      feedback = <IncorrectCard cardInfo={this.props.lastQuestion} />
    }
    else {
      feedback = <DefaultCard />;
    }
    
    let card;
    if (this.props.currentQuestion) {
      if (!this.props.isFlipped) {
        card = 
          <div onClick={() => this.handleFlipBtn()}>
            <FrontCard cardInfo={ this.props.currentQuestion} />
          </div>
      }
      else if (this.props.isFlipped) {
        card =  
          <div onClick={() => this.handleFlipBtn()}> 
            <BackCard cardInfo={this.props.currentQuestion} onClick={() => this.handleFlipBtn()} />
          </div>
      }

    }
    // in the future we should potentially update DB
    if (this.props.correct === this.props.quizLength){
      console.log(this.props.quizLength)
      this.props.dispatch(displayModal(true));
      return <QuizEndModal />
    }
    if (!this.props.questions) { return <div>There are no questions...</div> };

    return (     
      <div>
          <Header />

          <div className="question-container">
            <div className="question-info">
              <h2>{this.props.userQuizChoice}</h2>
                <ScoreCounter 
                  correct={this.props.correct} 
                  incorrect={this.props.incorrect} 
                />
                {feedback}
                {card}
                <p><span id="card-help">Need Help?</span><br /> 
                Click the card</p>
            </div>
            <form onSubmit={e => this.handleSubmit(e)}>
              <input 
                name="search-bar"
                className="input" 
                placeholder="Enter answer" 
                ref={input => this.input = input} 
              />
              <input 
                className="submit-btn" 
                type="submit" 
              />
            </form>

        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  value: state.value,
  questions: state.questions,
  index: state.index,
  isFlipped: state.isFlipped,
  disableToggle: state.disableToggle,
  correct: state.correct,
  incorrect: state.incorrect,
  currentQuestion: state.currentQuestion,
  lastQuestion: state.lastQuestion,
  totalScore: state.totalScore,
  userQuizChoice: state.userQuizChoice,
  feedback: state.feedback,
  quizLength: state.quizLength
})

export default connect(mapStateToProps)(QuestionPage)