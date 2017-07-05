import React from 'react';
import './card.css';
import {connect} from 'react-redux';

class IncorrectCard extends React.Component{
    render(){
    return(
      <div className="card-container">
        <div className="incorrect-card">
          <div className="info-container">
            <p className="meaning">
              Incorrect. <br />
              The correct answer was:
              {this.props.cardInfo.meaning}
            </p>
          </div>
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