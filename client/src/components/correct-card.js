import React from 'react';
import './card.css';
import {connect} from 'react-redux';


class CorrectCard extends React.Component{
  render(){
    return(
        <div className="feedback-card-container">
          <div className="correct-card">
            <p className="feedback">
              Correct
            </p>
          </div>
        </div>
    )
  }
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps)(CorrectCard);