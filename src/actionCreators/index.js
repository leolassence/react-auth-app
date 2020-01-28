import axios from 'axios';

import {
  SET_AUTHENTIFICATIONS,
  PARSE_ERROR,
  RESET_ERROR
} from './actionTypes';

const API_ENDPOINT = 'http://localhost:8080';

export function parseError(errorMessage) {
  return {
    type: PARSE_ERROR,
    payload: errorMessage
  };
}

export function resetError() {
  return {
    type: RESET_ERROR
  };
}

export function setAuthentification(isLoggedIn) {
  return {
    type: SET_AUTHENTIFICATIONS,
    payload: isLoggedIn
  };
}

export function signInUser({ email, password }, history) {
  return async function (dispatch) {
    try {
      const response = await axios.post(`${API_ENDPOINT}/signIn`, {
        email,
        password
      });

      localStorage.setItem('token', response.data.token);

      dispatch(setAuthentification(true));

      history.push('/');
    } catch (error) {
      dispatch(parseError(error.response.data.message));
    }
  };
}

export function signUpUser({ email, password }, history) {
  return async function (dispatch) {
    try {
      const response = await axios.post(`${API_ENDPOINT}/signUp`, {
        email,
        password
      });

      localStorage.setItem('token', response.data.token);

      dispatch(setAuthentification(true));

      history.push('/');
    } catch (error) {
      dispatch(parseError(error.response.data.message));
    }
  };
}

export function signOutUser() {
  return function (dispatch) {
    dispatch(setAuthentification(false));
    localStorage.removeItem('token');
  };
}
