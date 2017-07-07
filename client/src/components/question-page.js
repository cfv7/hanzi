import React from 'react';
import * as Cookies from 'js-cookie';
import { connect } from 'react-redux';
import { submitAnswer, flipCard, nextCard, disableToggle, addToIncorrect, addToCorrect, getUserInfo, addToTotalScore, updateFeedback } from '../actions';
import FrontCard from './front-card';
import BackCard from './back-card';
import ScoreCounter from './score-counter';
import Header from './header';
import './question-page.css';
import CorrectCard from './correct-card';
import IncorrectCard from './incorrect-card';
import DefaultCard from './default-card';


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
    event.target.value= '';
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
        // this.props.dispatch(++newTotal);
        this.props.dispatch(updateFeedback('Correct'));
    }
    else{
        let newValue = this.props.incorrect;
        this.props.dispatch(addToIncorrect(++newValue));
        // this.props.dispatch(++newTotal);
        this.props.dispatch(updateFeedback('Incorrect'));
    }
    this.props.dispatch(submitAnswer(value));
  }

  handleNextBtn() {
    let toggleValue = this.props.disableToggle
    this.props.dispatch(nextCard());
    this.props.dispatch(disableToggle(!toggleValue));
    this.input.value = '';
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
      feedback = <IncorrectCard cardInfo={ this.props.currentQuestion} />
    }
    else {
      feedback = <DefaultCard />;
    }
    
    let next = this.props.disableToggle;
    let submit = !this.props.disableToggle;
    let card;
    if (this.props.currentQuestion) {
      if (!this.props.isFlipped) {
        card = <div onClick={() => this.handleFlipBtn()}>
                <FrontCard cardInfo={ this.props.currentQuestion} />
              </div>
      }
      else if (this.props.isFlipped) {
        card =  <div onClick={() => this.handleFlipBtn()}> 
                  <BackCard cardInfo={this.props.currentQuestion} onClick={() => this.handleFlipBtn()} />
                </div>
      }

    }
    // if(this.props.nextCard === undefined) return 
    if (this.props.correct >= 10) return alert('game over')
    if (!this.props.questions) { return <div>There are no questions...</div> };

    return (     
        <div>
            <Header />

            <div className="question-container">
                {/*<ul className="question-list">*/}
                {/*<h2 className="question-title">Question #: {this.props.correct + this.props.incorrect}</h2>*/}
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
  totalScore: state.totalScore,
  userQuizChoice: state.userQuizChoice,
  feedback: state.feedback
})

export default connect(mapStateToProps)(QuestionPage)