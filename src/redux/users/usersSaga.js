import { put, takeLatest } from 'redux-saga/effects';
import { FETCH_USERS } from './usersConstants';
import { fetchUsersError, fetchUsersPending, fetchUsersSuccess } from './usersActions';

function* fetchUsers(action) {
  try {
    put(fetchUsersPending());

    const response = yield fetch(
      process.env.REACT_APP_API_URL + '?action=query&list=allusers&auprefix=user&format=json'
    ).then(resp => resp.json());
    yield put(fetchUsersSuccess(response.query.allusers));
  } catch (e) {
    yield put(fetchUsersError(e));
  }
}

function* usersSaga() {
  yield takeLatest(FETCH_USERS, fetchUsers);
}

export default usersSaga;
