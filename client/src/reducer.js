import {SUBMIT_ANSWER, NEW_GAME, TOGGLE_INFO_MODAL, GET_QUESTIONS_SUCCESS} from './actions'

const initialState = {
  questions: [],
  index: 0
}

const reducer = (state = initialState, action) => {
  if(action.type === SUBMIT_ANSWER) {
    // check if it is a string
    // check if it matches the 'meaning' property in db
    // if wrong, increment wrongTally
    // if right, increment
    // console.log(state.questions[0].meaning, action.answer);
    if(state.questions[state.index].meaning === action.answer){
      console.log('CORRECT');
    }
    else console.log('INCORRECT');
  }
  if(action.type === GET_QUESTIONS_SUCCESS){
    return Object.assign({}, state, {
      questions: action.questions
    })
  }
  return state;
}

export default reducer;