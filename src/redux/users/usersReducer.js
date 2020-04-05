import { FETCH_USERS_PENDING, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR } from './usersConstants';
import User from 'models/user';

const initialState = {
  users: null,
  isLoading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_PENDING:
      return { ...state, users: null, isLoading: true, error: null };
    case FETCH_USERS_SUCCESS:
      return { ...state, users: action.payload.map(u => new User(u)), isLoading: false, error: null };
    case FETCH_USERS_ERROR:
      return { ...state, users: null, isLoading: false, error: action.payload };
    default:
      return state;
  }
};
