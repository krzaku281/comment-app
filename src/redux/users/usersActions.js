import { FETCH_USERS, FETCH_USERS_PENDING, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR } from './usersConstants';

export const fetchUsers = () => ({
  type: FETCH_USERS,
});

export const fetchUsersPending = () => ({
  type: FETCH_USERS_PENDING,
});

export const fetchUsersSuccess = users => ({
  type: FETCH_USERS_SUCCESS,
  payload: users,
});

export const fetchUsersError = error => ({
  type: FETCH_USERS_ERROR,
  payload: error,
});
