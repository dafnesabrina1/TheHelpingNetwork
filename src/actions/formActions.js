import { ADD_DATA, GET_DATA, LOG_IN } from './types';

export const addData = values => async dispatch => {
  try {
    dispatch({
      type: GET_DATA,
      payload: values
    });
  } catch (err) {
    console.log(err);
  }
};

export const logIn = () => async dispatch => {
  try {
    dispatch({
      type: LOG_IN
    });
  } catch (err) {
    console.log(err);
  }
};

/*
export const getData = () => async dispatch => {
    try {
        const res = await fetch();
        const data = await res.json();

        dispatch({
            type: GET_DATA,
            payload: data
        })

    } catch (err) {
        console.log(err);
    }
}
*/
