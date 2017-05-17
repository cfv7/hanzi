import {SUBMIT_ANSWER, NEW_GAME, TOGGLE_INFO_MODAL, GET_QUESTIONS_SUCCESS, FLIP_CARD, NEXT_CARD} from './actions'

const initialState = {
  questions: [],
  index: 0,
  isFlipped: false,
  totalAttempts:0,
  correctAnswers:0
}

const reducer = (state = initialState, action) => {
  if(action.type === SUBMIT_ANSWER) {
   
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
  
  return state;
}

export default reducer;