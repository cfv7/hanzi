import React from 'react';
import * as Cookies from 'js-cookie';
import {connect} from 'react-redux';
import {getQuestions} from '../actions'

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

  render() {
    const questions = this.state.questions.map((question, index) =>
      <li key={index}>{question}</li>
    );

    return (
      <ul className="question-list">
        {questions}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  questions: state.questions
})

export default connect(mapStateToProps)(QuestionPage)