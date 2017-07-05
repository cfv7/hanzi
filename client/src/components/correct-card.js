import React from 'react';
import './card.css';
import {connect} from 'react-redux';


class CorrectCard extends React.Component{
  render(){
    return(
        <div className="card-container">
          <div className="correct-card">
            <h4 className="feedback">
              CORRECT
            </h4>
          </div>
        </div>
    )
  }
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps)(CorrectCard);