import * as Cookies from 'js-cookie';

export const NEW_QUIZ = 'NEW_QUIZ';
export const newQuiz = () => ({
  type: NEW_QUIZ
})

export const SUBMIT_ANSWER = 'SUBMIT_ANSWER';
export const submitAnswer = (answer) => ({
  type: SUBMIT_ANSWER,
  answer
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

export const UPDATE_INDEX = 'UPDATE_INDEX';
export const updateIndex = (index) => ({
  type: UPDATE_INDEX,
  index
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

export const TOGGLE_SUBMIT = 'TOGGLE_SUBMIT';
export const toggleSubmit = (isAnswerSubmitted) => ({
  type: TOGGLE_SUBMIT,
  isAnswerSubmitted
})


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
  }).then(questions =>
    dispatch(getQuestionsSuccess(questions))
  );
}




export const TOGGLE_INFO_MODAL = 'TOGGLE_INFO_MODAL';
export const toggleInfoModal = () => ({
  type: TOGGLE_INFO_MODAL
})

