import * as c from '../actions/ActionTypes';

const initialState = {
  error: null,
  isLoading: false,
  fact: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case c.REQUEST_FACT:
      return Object.assign({}, state, {
        isLoading: true
      });
    case c.GET_FACT_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        fact: action.fact
      });
    case c.GET_FACT_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error
      });
    default:
      return state;
  }
};
