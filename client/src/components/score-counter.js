import React from 'react'

export default function ScoreCounter(props) {
  return(
    <div className="score-container">
      <p> &#x2713;: {props.correct} &#10005;: {props.incorrect} </p>
    </div>
  )
}
