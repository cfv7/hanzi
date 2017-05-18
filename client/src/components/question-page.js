import React from 'react';
import * as Cookies from 'js-cookie';
import { connect } from 'react-redux';
import { getQuestions, submitAnswer, flipCard, nextCard, disableToggle } from '../actions';
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
  }



  compareValues(input) {
    let value = input.toLowerCase();
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
    console.log('This is a TEEST',next,submit );
    let card;
    if (this.props.questions.length > 0) {
      if (!this.props.isFlipped) {
        card = <FrontCard cardInfo={this.props.questions[this.props.index]} />
      }
      else if (this.props.isFlipped) {
        card = <BackCard cardInfo={this.props.questions[this.props.index]} />
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
                    </div>

                </div>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <input disabled={submit} placeholder="meaning" ref={input => this.input = input} />
                    <input disabled={submit} type="submit" />
                </form>
                <button onClick={() => this.handleFlipBtn()} className="flip-btn" >flip</button>
                <button disabled={next} onClick={() => this.handleNextBtn()} className="next-btn" >next</button>

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
  incorrect: state.incorrect
})

export default connect(mapStateToProps)(QuestionPage)