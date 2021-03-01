import * as c from './ActionTypes';

export const requestFact = () => ({
  type: c.REQUEST_FACT
});

export const getFactSuccess = (fact) => ({
  type: c.GET_FACT_SUCCESS,
  fact
});

export const getFactFailure = (error) => ({
  type: c.GET_FACT_FAILURE,
  error
});

export const makeApiCall = () => {
  return dispatch => {
    dispatch(requestFact);
    return fetch(`https://catfact.ninja/fact`)
      .then(response => response.json())
      .then((jsonifiedResponse) => {
        dispatch(getFactSuccess(jsonifiedResponse.fact));
      })
    .catch((error) => {
      dispatch(getFactFailure(error));
    });
  }
}