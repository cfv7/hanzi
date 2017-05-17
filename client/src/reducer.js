import {SUBMIT_ANSWER, NEW_GAME, TOGGLE_INFO_MODAL, GET_QUESTIONS_SUCCESS, UPDATE_INDEX, FLIP_CARD} from './actions'

const initialState = {
  questions: [],
  index: 0,
  isAnswerSubmitted: false,
  isFlipped: false,
  totalAttempts:0,
  correctAnswers:0
}

const reducer = (state = initialState, action) => {
  if(action.type === SUBMIT_ANSWER) {
    // check if it is a string
    // check if it matches the 'meaning' property in db
    // if wrong, increment wrongTally
    // if right, increment
    // console.log(state.questions[0].meaning, action.answer);

    if(state.questions[state.index].meaning === action.answer){
      let correct = state.correctAnswers++;
      let attempts = state.totalAttempts++;
      
      Object.assign({}, state, {
        isAnswerSubmitted: true,
        correctAnswers: correct,
        totalAttempts: attempts
        
      });
      // window.alert("CORRECT");

    }
    else{
      console.log('INCORRECT')
      let attempts = state.totalAttempts++;
      Object.assign({}, state, {
        totalAttempts: attempts
      });
      // window.alert(`INCORRECT! The correct answer was ${state.questions[state.index].meaning}` );
    };
  }
  if(action.type === GET_QUESTIONS_SUCCESS){
    return Object.assign({}, state, {
      questions: action.questions
    })
  }
  if(action.type === UPDATE_INDEX){
    return Object.assign({}, state, {
      index: action.index,
      isAnswerSubmitted: false
    })
  }
  if(action.type === FLIP_CARD){
    return Object.assign({}, state, {
      isFlipped: action.isFlipped
    })
  }
  
  return state;
}

export default reducer;