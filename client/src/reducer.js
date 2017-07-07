import {
  SUBMIT_ANSWER, NEW_GAME, TOGGLE_INFO_MODAL,
  GET_QUESTIONS_SUCCESS, FLIP_CARD, NEXT_CARD,
  DISABLE_TOGGLE, ADD_TO_CORRECT, ADD_TO_INCORRECT, 
  LOG_OUT, GET_USER_INFO_SUCCESS, ADD_TO_TOTAL_SCORE, 
  UPDATE_USER_QUIZ_CHOICE, UPDATE_FEEDBACK
} from './actions';

import Queue, {swapFirstAndLast, sendBack} from './queue';


console.log(swapFirstAndLast, 'test')

const initialState = {
  value:"",
  index: 0,
  currentQuestion: null,
  isFlipped: false,
  disableToggle: true,
  correct: 0,
  incorrect: 0,
  totalScore: 0,
  userQuizChoice: null,
  feedback: null,
}

const reducer = (state = initialState, action) => {
  if(action.type === UPDATE_USER_QUIZ_CHOICE) {
    return Object.assign({}, state, {
      userQuizChoice: action.userQuizChoice
    })
  }
  if (action.type === GET_USER_INFO_SUCCESS) {
      console.log('SUCCESS');
    return Object.assign({}, state, {
      userInfo: action.userInfo
    })
  }

  if (action.type === GET_QUESTIONS_SUCCESS) {
    return Object.assign({}, state, {
      currentQuestion: action.questions[0],
      questions: action.questions
    })
  }
  if (action.type === FLIP_CARD) {
    return Object.assign({}, state, {
      isFlipped: !state.isFlipped
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
    let swappedQuestion = [state.questions[state.questions.length-1] , ...state.questions.slice(1,-1), state.questions[0]];
    return Object.assign({}, state, {
      questions: swappedQuestion,
      currentQuestion: swappedQuestion[0],
      correct: action.correct,
      feedback: action.feedback 
    })
  }
  if (action.type === ADD_TO_INCORRECT) {
    let repeatCard = state.questions;
    sendBack(repeatCard, 3);
    console.log('STATE.QUESTIONS', state.questions);
    return Object.assign({}, state, {
      incorrect: action.incorrect,
      questions: repeatCard,
      currentQuestion: repeatCard.first.data,
      feedback: action.feedback
    })
  }
  if (action.type === UPDATE_FEEDBACK) {
    return Object.assign({}, state, {
      feedback: action.feedback
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