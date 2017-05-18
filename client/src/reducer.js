import {SUBMIT_ANSWER, NEW_GAME, TOGGLE_INFO_MODAL, 
        GET_QUESTIONS_SUCCESS, FLIP_CARD, NEXT_CARD, 
        DISABLE_TOGGLE, ADD_TO_CORRECT, ADD_TO_INCORRECT, LOG_OUT} from './actions'

const initialState = {
  questions: [],
  index: 0,
  isFlipped: false,
  totalAttempts:0,
  correctAnswers:0,
  disableToggle: true,
  correct: 0,
  incorrect: 0
}

const reducer = (state = initialState, action) => {
  if(action.type === SUBMIT_ANSWER) {
   
    if(state.questions[state.index].meaning === action.answer){

      let correct = state.correctAnswers++;
      let attempts = state.totalAttempts++;
      let correctCount = state.correct++;

      Object.assign({}, state, {
        correctAnswers: correct,
        totalAttempts: attempts,
        correct: correctCount,
      });
      window.alert("CORRECT");

    }
    else{
      let incorrectCount = state.incorrect++;
      let attempts = state.totalAttempts++;
      Object.assign({}, state, {
        totalAttempts: attempts,
        incorrect: incorrectCount

      });
      window.alert(`INCORRECT! The correct answer was ${state.questions[state.index].meaning}` );
    };
  }
  if(action.type === GET_QUESTIONS_SUCCESS){
    return Object.assign({}, state, {
      questions: action.questions
    })
  }
  if(action.type === FLIP_CARD){
    return Object.assign({}, state, {
      isFlipped: action.isFlipped
    })
  }
  if(action.type === NEXT_CARD){
    let index = state.index + 1
    if(index < state.questions.length) {
      return {
        ...state,
        index: index
      }
    }
  }
  if(action.type === DISABLE_TOGGLE){
    return Object.assign({}, state, {
      disableToggle: action.disableToggle
    });
  }
  if(action.type === ADD_TO_CORRECT) {
    return Object.assign({}, state, {
      correct: action.correct
    })
  }
  if(action.type === ADD_TO_INCORRECT) {
    return Object.assign({}, state, {
      incorrect: action.incorrect
    })
  }
  if(action.type === LOG_OUT) {

  }
  
  return state;
}

export default reducer;