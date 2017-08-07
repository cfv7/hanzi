import React from 'react';

import './modal.css';
import {connect} from 'react-redux';

class QuizEndModal extends React.Component{
  render() {
    return(
      <div className="modal-container">
        <div className="feedback-card">
          <p className="feedback">
            Thank you for playing Hanzi. You were correct {this.props.correct} out of {this.props.correct + this.props.incorrect} times.
          </p>
          <div><a className="return-btn" href="/">Return to Dashboard
            </a>
          </div>
        </div>
      </div>
    )
  }
} 
const mapStateToProps = state => ({
  correct: state.correct,
  incorrect: state.incorrect,
  quizLength: state.quizLength
})

export default connect(mapStateToProps)(QuizEndModal);