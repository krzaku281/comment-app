import {
  FETCH_COMMENTS,
  FETCH_COMMENTS_PENDING,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_ERROR,
  ADD_COMMENT,
  ADD_COMMENT_PENDING,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_ERROR,
} from './commentsConstants';

export const fetchComments = () => ({
  type: FETCH_COMMENTS,
});

export const fetchCommentsPending = () => ({
  type: FETCH_COMMENTS_PENDING,
});

export const fetchCommentsSuccess = comments => ({
  type: FETCH_COMMENTS_SUCCESS,
  payload: comments,
});

export const fetchCommentsError = error => ({
  type: FETCH_COMMENTS_ERROR,
  payload: error,
});

export const addComment = comment => ({
  type: ADD_COMMENT,
  payload: comment,
});

export const addCommentPending = comment => ({
  type: ADD_COMMENT_PENDING,
  payload: comment,
});

export const addCommentSuccess = comment => ({
  type: ADD_COMMENT_SUCCESS,
  payload: comment,
});

export const addCommentError = error => ({
  type: ADD_COMMENT_ERROR,
  payload: error,
});
