import { put, takeLatest } from 'redux-saga/effects';
import {
  fetchCommentsError,
  fetchCommentsPending,
  fetchCommentsSuccess,
  addCommentError,
  addCommentPending,
  addCommentSuccess,
} from './commentsActions';
import { FETCH_COMMENTS, ADD_COMMENT } from './commentsConstants';
import Comment from 'models/comment';

function* fetchComments(action) {
  try {
    put(fetchCommentsPending());
    // fake payload from DB
    const fakeComments = [
      new Comment({ id: 1, content: 'great job @@@Marek|userid|999@@@!', date: new Date('2020-01-01T00:01:00.000Z') }),
      new Comment({
        id: 2,
        content: '@@@Marek|userid|999@@@ well done, really @@@Marek|userid|999@@@',
        date: new Date('2020-02-01T00:02:00.000Z'),
      }),
    ];
    yield put(fetchCommentsSuccess(fakeComments));
  } catch (e) {
    yield put(fetchCommentsError(e));
  }
}

function* addComment(action) {
  try {
    put(addCommentPending(action.payload));
    const comment = action.payload;
    yield put(addCommentSuccess(comment));
  } catch (e) {
    yield put(addCommentError(e));
  }
}

function* commentsSaga() {
  yield takeLatest(FETCH_COMMENTS, fetchComments);
  yield takeLatest(ADD_COMMENT, addComment);
}

export default commentsSaga;
