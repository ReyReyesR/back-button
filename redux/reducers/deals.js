import { GET_DEALS } from '../../config/constants/action-types';

const initialState = {
  deals: '',
};

const userReducer = (state = initialState, { type }) => {
  switch (type) {
    case GET_DEALS: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export default userReducer;
