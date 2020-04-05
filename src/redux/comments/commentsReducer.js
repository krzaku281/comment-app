import {
  FETCH_COMMENTS_PENDING,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_ERROR,
  ADD_COMMENT_PENDING,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_ERROR,
} from './commentsConstants';
import Comment from 'models/comment';

const initialState = {
  comments: null,

  isFetchLoading: false,
  fetchError: null,

  isAddLoading: false,
  addError: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMMENTS_PENDING:
      return { ...state, comments: null, isFetchLoading: true, fetchError: null };
    case FETCH_COMMENTS_SUCCESS:
      return { ...state, comments: action.payload.map(c => new Comment(c)), isFetchLoading: false, fetchError: null };
    case FETCH_COMMENTS_ERROR:
      return { ...state, comments: null, isFetchLoading: false, fetchError: action.payload };
    case ADD_COMMENT_PENDING:
      return { ...state, comments: null, isAddLoading: true, addError: null };
    case ADD_COMMENT_SUCCESS:
      const id = Math.floor(Math.random() * 100000000); // fake id from DB
      return {
        ...state,
        comments: [...state.comments, new Comment({ ...action.payload, id })],
        isAddLoading: false,
        addError: null,
      };
    case ADD_COMMENT_ERROR:
      return { ...state, comments: null, isAddLoading: false, addError: action.payload };
    default:
      return state;
  }
};
