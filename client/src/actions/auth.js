import * as api from '../api';

// signUp Function
export const signup = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(authData);
    dispatch({ type: 'Auth', data });
    navigate('/');
  } catch (error) {
    console.error(error);
  }
};

export const login = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.logIn(authData);
    dispatch({ type: 'Auth', data });
    navigate('/');
  } catch (error) {
    console.error(error);
  }
};
