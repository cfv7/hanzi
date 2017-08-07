
import * as Cookies from 'js-cookie';

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

export const GET_USER_INFO_SUCCESS = 'GET_USER_INFO_SUCCESS';
export const getUserInfoSuccess = (userInfo) => ({
  type: GET_USER_INFO_SUCCESS,
  userInfo
})

export const GET_USER_INFO_ERROR = 'GET_USER_INFO_ERROR';
export const getuserInfoError = (err) => ({
  type: GET_USER_INFO_ERROR,
  err
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

export const UPDATE_FEEDBACK = 'UPDATE_FEEDBACK';
export const updateFeedback = (feedback) => ({
  type: UPDATE_FEEDBACK,
  feedback
})

export const ADD_TO_TOTAL_SCORE = 'ADD_TO_TOTAL_SCORE';
export const addToTotalScore = (totalScore) => ({
  type: ADD_TO_TOTAL_SCORE,
  totalScore
})

export const SIGN_OUT = 'SIGN_OUT';
export const SignOut = () => ({
    type: SIGN_OUT
});

export const UPDATE_USER_QUIZ_CHOICE = 'UPDATE_USER_QUIZ_CHOICE';
export const updateUserQuizChoice = (userQuizChoice) => ({
  type: UPDATE_USER_QUIZ_CHOICE,
  userQuizChoice
}) 

export const DISPLAY_MODAL = 'DISPLAY_MODAL';
export const displayModal = (isModalOn) => ({
  type: DISPLAY_MODAL,
  isModalOn
}) 

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

export const getUserInfo = () => dispatch => {
  const accessToken = Cookies.get('accessToken');
  fetch('/api/me', {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  }).then(res => {
    if(!res.ok){
      throw new Error(res.statusText);
    }
    return res.json();
  }).then(userInfo => {
    console.log('userInfo ->',userInfo);
    dispatch(getUserInfoSuccess(userInfo))
  });
}

export const getQuestions = (quizChoice) => dispatch => {
  const accessToken = Cookies.get('accessToken');
  console.log('QuizCHOICE', quizChoice);
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
    let array = [];
    questions.forEach(question => {
      if(question.category === quizChoice) {
        array.push(question);
      }
    });
    dispatch(getQuestionsSuccess(array))
    console.log(array)
  });
}