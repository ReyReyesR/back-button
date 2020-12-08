import { combineReducers } from 'redux';

import userReducer from './user';
import dealsReducer from './deals';

const rootReducer = combineReducers({
  user: userReducer,
  deals: dealsReducer,
});

export default rootReducer;
