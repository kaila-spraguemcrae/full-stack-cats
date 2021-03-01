import * as c from './../Actions/ActionTypes';

const defaultState = {
  error: null,
  isLoaded: false,
  fact: []
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
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
