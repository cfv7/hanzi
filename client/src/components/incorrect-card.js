import React from 'react';
import './card.css';
import {connect} from 'react-redux';

class IncorrectCard extends React.Component{
    render(){
    return(
      <div className="feedback-card-container">
        <div className="incorrect-card">
            <p className="feedback">
              <strong>Incorrect. </strong><br />
              The correct answer was:<br/>
              {this.props.cardInfo.meaning}
            </p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  questions: state.questions,
  index: state.index
})

export default connect(mapStateToProps)(IncorrectCard)