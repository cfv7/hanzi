import {
  SUBMIT_ANSWER, NEW_GAME, TOGGLE_INFO_MODAL,
  GET_QUESTIONS_SUCCESS, FLIP_CARD, NEXT_CARD,
  DISABLE_TOGGLE, ADD_TO_CORRECT, ADD_TO_INCORRECT, 
  LOG_OUT, GET_USER_INFO_SUCCESS, ADD_TO_TOTAL_SCORE
} from './actions';

import Queue, {swapFirstAndLast, sendBack} from './queue';


console.log(swapFirstAndLast, 'test')

const initialState = {
  index: 0,
  currentQuestion: null,
  isFlipped: false,
  disableToggle: true,
  correct: 0,
  incorrect: 0,
  totalScore: 0,
}

const reducer = (state = initialState, action) => {
  if (action.type === GET_USER_INFO_SUCCESS) {
      console.log('SUCCESS');
    return Object.assign({}, state, {
      userInfo: action.userInfo
    })
  }

  if (action.type === GET_QUESTIONS_SUCCESS) {
    return Object.assign({}, state, {
      currentQuestion: action.questions.first.data,
      questions: action.questions
    })
  }
  if (action.type === FLIP_CARD) {
    return Object.assign({}, state, {
      isFlipped: action.isFlipped
    })
  }
  if (action.type === NEXT_CARD) {
    let index = state.index + 1
    if (index < state.questions.length) {
      return {
        ...state,
        currentQuestion: state.questions.first.data,
        index: index
      }
    }
  }
  if (action.type === DISABLE_TOGGLE) {
    return Object.assign({}, state, {
      disableToggle: action.disableToggle
    });
  }
  if (action.type === ADD_TO_CORRECT) {
    let changedQ = swapFirstAndLast(state.questions);
      console.log('ADTOCORRECT', state.questions, changedQ)
    return Object.assign({}, state, {
      questions: changedQ,
      currentQuestion: changedQ.first.data,
      correct: action.correct 
    })
  }
  if (action.type === ADD_TO_INCORRECT) {
    let repeatCard = state.questions;
    sendBack(repeatCard, 3);
    console.log('TESTFORADDTOINCORRECT', repeatCard);
    return Object.assign({}, state, {
      incorrect: action.incorrect,
      questions: repeatCard,
      currentQuestion: repeatCard.first.data
    })
  }
  if (action.type === ADD_TO_TOTAL_SCORE){
    Object.assign({}, state, {
      totalScore: action.totalScore
    })
  }
  if (action.type === LOG_OUT) {
  }
  return state;
}
export default reducer;