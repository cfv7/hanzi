import React from 'react';
import * as Cookies from 'js-cookie';
import { connect } from 'react-redux';
import { getQuestions, submitAnswer, flipCard, nextCard, disableToggle, addToIncorrect, addToCorrect } from '../actions';
import FrontCard from './front-card';
import BackCard from './back-card';
import ScoreCounter from './score-counter';
import Header from './header';

import './question-page.css';


class QuestionPage extends React.Component {
  constructor(props) {
    super(props);
  }
 

  componentDidMount() {
    this.props.dispatch(getQuestions())
  }

  handleSubmit(event) {
    event.preventDefault();
    this.compareValues(this.input.value);
    let toggleValue = this.props.disableToggle
    this.props.dispatch(disableToggle(!toggleValue));
    this.input.value = '';
  }
  compareValues(input) {
    let value = input.toLowerCase();
    if(value === this.props.currentQuestion.meaning){
        let newValue = this.props.correct;
        this.props.dispatch(addToCorrect(++newValue));
        window.alert("CORRECT");
    }
    else{
        let newValue = this.props.incorrect;
        this.props.dispatch(addToIncorrect(++newValue));
        window.alert(`INCORRECT! The correct answer was ${this.props.currentQuestion.meaning}`);
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
    if (this.props.isFlipped === true) {
      this.props.dispatch(flipCard(false));
    }
    else {
      this.props.dispatch(flipCard(true));
    }

  }
  displayFeedback() {
  }
  render() {
    let next = this.props.disableToggle;
    let submit = !this.props.disableToggle;
    let card;
    if (this.props.currentQuestion) {
      if (!this.props.isFlipped) {
        card = <FrontCard cardInfo={this.props.currentQuestion} />
      }
      else if (this.props.isFlipped) {
        card = <BackCard cardInfo={this.props.currentQuestion} />
      }
    }
    if (!this.props.questions) { return <div>There are no questions...</div> };


    return (     
        <div>
            <Header />

            <div className="question-container">
                <ul className="question-list">
                <h2>Quiz Questions</h2>
                <div>
                    <div>
                    <ScoreCounter correct={this.props.correct} incorrect={this.props.incorrect} />
                    {card}
                    {/*<FrontCard />*/}
                    </div>

                </div>
                 <button onClick={() => this.handleFlipBtn()} className="flip-btn" >cheat?</button>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <input className="input" placeholder="meaning" ref={input => this.input = input} />
                    <input className="submit-btn" type="submit" />
                </form>
               
                {/*<button disabled={next} onClick={() => this.handleNextBtn()} className="next-btn" >next</button>*/}

                </ul>
            </div>
        </div>
    );
  }
}

const mapStateToProps = state => ({
  questions: state.questions,
  index: state.index,
  isFlipped: state.isFlipped,
  disableToggle: state.disableToggle,
  correct: state.correct,
  incorrect: state.incorrect,
  currentQuestion: state.currentQuestion
})

export default connect(mapStateToProps)(QuestionPage)