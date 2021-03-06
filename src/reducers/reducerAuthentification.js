import { SET_AUTHENTIFICATIONS } from '../actionCreators/actionTypes';

const initialState = {
  isLoggedIn: false
};

export default function AuthentificationReducer(state = initialState, action) {
  switch (action.type) {
    case SET_AUTHENTIFICATIONS: {
      return {
        isLoggedIn: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
