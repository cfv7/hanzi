import React from 'react';
import './question-page.css';
import {connect} from 'react-redux';

class BackCard extends React.Component{
  render(){
    return(
      <div className="card-container">
        <div className="dummy-card">
          <div className="info-container">
            <p className="back-value">{this.props.cardInfo.character}</p>
            <p className="pinyin">{this.props.cardInfo.pinyin}</p>
            <p className="meaning">{this.props.cardInfo.meaning}</p>
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

export default connect(mapStateToProps)(BackCard)