import { ADD_DATA, LOG_IN } from '../actions/types';

const initialState = {
  data: {
    id: ''
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_DATA:
      return {
        ...state,
        payload: { ...state.data, ...action.payload }
      };
    case LOG_IN:
      return {
        ...state,
        payload: action.payload
      };
    default:
      return state;
  }
};
