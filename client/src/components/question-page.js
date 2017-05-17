import React from 'react';
import * as Cookies from 'js-cookie';
import {connect} from 'react-redux';
import {getQuestions, submitAnswer, updateIndex, flipCard } from '../actions';
import FrontCard from './front-card';
import BackCard from './back-card';

import './question-page.css';


class QuestionPage extends React.Component {
  constructor(props) {
    super(props);

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
    handleNextBtn(){
        let newVal = this.props.index;
        this.props.dispatch(updateIndex(++newVal));
    }
    handleFlipBtn(){
        console.log('FLIP BUTTON WAS CLICKED');
        if(this.props.isFlipped === true){
            this.props.dispatch(flipCard(false));
        }
        else{
            this.props.dispatch(flipCard(true));
        }
        
    }
    displayFeedback(){
    }
  render() {
      let disabled = this.props.isAnswerSubmitted ? false: true;
      let card;
      if(this.props.questions.length>0){
        if(!this.props.isFlipped){
            card = <FrontCard cardInfo={this.props.questions[this.props.index]}/>
        }
        else if(this.props.isFlipped){
            card = <BackCard cardInfo={this.props.questions[this.props.index]}/>
        }
        else{
            setInterval(function(){console.log('It was WRONG!')}, 3000);
        }
      }
      if (!this.props.questions) { return <div>There are no questions...</div> };
   

        return (
            <div className="question-container"> 
                <ul className="question-list">
                    <h2>Quiz Questions</h2>
                    <div>
                        <div> 
                          {card}
                        </div>
                        
                    </div>
                    <form onSubmit={e=> this.handleSubmit(e)}>
                        <input placeholder="meaning" ref={input => this.input = input}/>
                        <input type="submit"/>
                    </form>
                    <button onClick={() => this.handleFlipBtn()} className="flip-btn">flip</button> 
                    <button disabled={disabled} onClick={()=> this.handleNextBtn()} className="next-btn">next</button>
    
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({
  questions: state.questions,
  index: state.index,
  isFlipped: state.isFlipped,
  isAnswerSubmitted: state.isAnswerSubmitted
})

export default connect(mapStateToProps)(QuestionPage)