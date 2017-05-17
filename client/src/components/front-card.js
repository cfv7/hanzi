import React from 'react';
import './question-page.css';
import {connect} from 'react-redux';

class FrontCard extends React.Component{
  render(){
    return(
      <div className="card-container">
        <div className="dummy-card">
          <h4 className="card-value">{this.props.cardInfo.character}</h4>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  questions: state.questions,
  index: state.index
})

export default connect(mapStateToProps)(FrontCard)