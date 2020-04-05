import { combineReducers } from 'redux';

import usersReducer from 'redux/users/usersReducer';
import commentsReducer from 'redux/comments/commentsReducer';

export default combineReducers({
  usersReducer,
  commentsReducer,
});
