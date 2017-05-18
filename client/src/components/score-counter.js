import React from 'react'

export default function ScoreCounter(props) {
  return(
    <div className="score-container">
      <p>Score: &#x2713;: {props.correct} &#10005;: {props.incorrect} </p>
    </div>
  )
}
