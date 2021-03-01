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