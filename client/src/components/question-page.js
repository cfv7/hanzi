import React from 'react';
import * as Cookies from 'js-cookie';
import {connect} from 'react-redux';
import {getQuestions, submitAnswer } from '../actions';
import Card from './card';

import './question-page.css';


class QuestionPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: []
    };
  }

  componentDidMount() {
    this.props.dispatch(getQuestions())
  }

    handleSubmit(event){
        event.preventDefault();
        console.log(this.input.value);
        this.compareValues(this.input.value);
    }
    compareValues(input){
        let value = input.toLowerCase();
        this.props.dispatch(submitAnswer(value));
        // compares the input value with the character meaning.
        // if values match update correct number counter
        // if valus do not match update incorrect number counter 
    }
    displayFeedback(){
    }
  render() {
    const character = this.props.questions[this.props.index];
    const questions = this.state.questions.map((question, index) =>
      <li key={index}>{question}</li>
    );

        return (
            <div className="question-container"> 
                <ul className="question-list">
                    <h2>Quiz Questions</h2>
                    <div>
                     <Card cardInfo={character}/>
                    </div>
                    <form onSubmit={e=> this.handleSubmit(e)}>
                        <input placeholder="meaning" ref={input => this.input = input}/>
                        <input type="submit"/>
                    </form>
                    {questions}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({
  questions: state.questions,
  index: state.index
})

export default connect(mapStateToProps)(QuestionPage)