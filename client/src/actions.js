
import * as Cookies from 'js-cookie';
import Queue from './queue';
console.log(Queue);

export const NEW_QUIZ = 'NEW_QUIZ';
export const newQuiz = () => ({
  type: NEW_QUIZ
})

export const SUBMIT_ANSWER = 'SUBMIT_ANSWER';
export const submitAnswer = (answer, disabledNext) => ({
  type: SUBMIT_ANSWER,
  answer,
  disabledNext
})

export const GET_QUESTIONS_SUCCESS = 'GET_QUESTIONS_SUCCESS';
export const getQuestionsSuccess = (questions) => ({
  type: GET_QUESTIONS_SUCCESS,
  questions
})

export const GET_QUESTIONS_ERROR = 'GET_QUESTIONS_ERROR';
export const getQuestionsError = (err) => ({
  type: GET_QUESTIONS_ERROR,
  error: err
})

export const NEXT_CARD = 'NEXT_CARD';
export const nextCard = () => ({
  type: NEXT_CARD
})

export const FLIP_CARD = 'FLIP_CARD';
export const flipCard = (isFlipped) => ({
  type: FLIP_CARD,
  isFlipped
})

export const DISABLE_TOGGLE = 'DISABLE_TOGGLE';
export const disableToggle = (disableToggle) => ({
  type: DISABLE_TOGGLE,
  disableToggle
})

export const ADD_TO_CORRECT = 'ADD_TO_CORRECT';
export const addToCorrect = (correct) => ({
  type: ADD_TO_CORRECT,
  correct
})

export const ADD_TO_INCORRECT = 'ADD_TO_INCORRECT';
export const addToIncorrect = (incorrect) => ({
  type: ADD_TO_INCORRECT,
  incorrect
})

// export const LOG_OUT = 'LOG_OUT';
// export const logOut = () => ({
//   type: LOG_OUT  
// })
export const logOut = () => dispatch => {
  const accessToken = Cookies.get('accessToken');
  console.log('LOGOUT DISPATCH');
  fetch('/api/auth/logout', {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    },
    method: 'GET'
  })
}


export const getQuestions = () => dispatch => {
  const accessToken = Cookies.get('accessToken');
  fetch('/api/questions', {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  }).then(res => {
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return res.json();
  }).then(questions => {
    let q = new Queue(questions);
    dispatch(getQuestionsSuccess(q))}
    );
}



export const createQueue = () => dispatch => ({

})



export const TOGGLE_INFO_MODAL = 'TOGGLE_INFO_MODAL';
export const toggleInfoModal = () => ({
  type: TOGGLE_INFO_MODAL
})

