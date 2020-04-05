import { all } from 'redux-saga/effects';

import commentsSaga from 'redux/comments/commentsSaga';
import usersSaga from 'redux/users/usersSaga';

export default function* rootSaga() {
  yield all([commentsSaga(), usersSaga()]);
}
