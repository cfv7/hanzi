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

