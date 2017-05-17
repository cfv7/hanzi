import {SUBMIT_ANSWER, NEW_GAME, TOGGLE_INFO_MODAL} from './actions'

const initialState = {
  questions: []
}

export default function(state = initialState, action) {
  if(action.type === SUBMIT_ANSWER) {
    // check if it is a string
    // check if it matches the 'meaning' property in db
    // if wrong, increment wrongTally
    // if right, increment
    const guess = String;
  }
  return state;
}