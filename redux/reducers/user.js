import { SET_AUTHENTICATED } from '../../config/constants/action-types';

const initialState = {
  username: '',
};

const userReducer = (state = initialState, { type }) => {
  switch (type) {
    case SET_AUTHENTICATED: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export default userReducer;
