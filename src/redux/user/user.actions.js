import {UserActionTypes} from './user.types';
export const setCurrentUser = userr => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: userr
});
