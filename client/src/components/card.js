import React from 'react';
import './question-page.css';
import {connect} from 'react-redux';

class Card extends React.Component{
  render(){
    console.log(this.props.cardInfo);
    return(
      <div className="card-container">
        <div className="dummy-card">
          <h4 className="card-value">{this.props.cardInfo}</h4>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  questions: state.questions,
  index: state.index
})

export default connect(mapStateToProps)(Card)