import * as api from '../api';
import { setCurrentUser } from './currentUser';

// signUp Function
export const signup = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(authData);
    dispatch({ type: 'Auth', data });
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))));
    navigate('/');
  } catch (error) {
    console.error(error);
  }
};

export const login = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.logIn(authData);
    dispatch({ type: 'Auth', data });
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))));
    navigate('/');
  } catch (error) {
    console.error(error);
  }
};
