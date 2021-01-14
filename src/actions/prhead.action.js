import {
    HTTP_PRHEAD_FETCHING,
    HTTP_PRHEAD_FAILED,
    HTTP_PRHEAD_SUCCESS,
    HTTP_PRHEAD_CLEAR,
  } from "../constants";
  import { server } from "../constants";
  import { httpClient } from "./../utils/HttpClient";
  
  // Information being sent to Reducer
  export const setStatePRHeadToSuccess = (payload) => ({
    type: HTTP_PRHEAD_SUCCESS,
    payload,
  });
  
  const setStatePRHeadToFetching = () => ({
    type: HTTP_PRHEAD_FETCHING,
  });
  
  const setStatePRHeadToFailed = () => ({
    type: HTTP_PRHEAD_FAILED,
  });
  
  const setStatePRHeadToClear = () => ({
    type: HTTP_PRHEAD_CLEAR,
  });

  export const getPRHeads = () => {
    return async (dispatch) => {
      dispatch(setStatePRHeadToFetching());
      doGetPRHeads(dispatch);
    };
  };
  
  const doGetPRHeads = async (dispatch) => {
    try {
      let result = await httpClient.get(server.PRHEAD_URL);
      dispatch(setStatePRHeadToSuccess(result.data));
      // alert(JSON.stringify(result.data));
    } catch (err) {
      alert(JSON.stringify(err));
      dispatch(setStatePRHeadToFailed());
    }
  };

  export const getPRHeadNumbers = () => {
    return async (dispatch) => {
      dispatch(setStatePRHeadToFetching());
      doGetPRHeadNumbers(dispatch);
    };
  };
  
  const doGetPRHeadNumbers = async (dispatch) => {
    try {
      let result = await httpClient.get(server.PRHEADNUMBER_URL);
      dispatch(setStatePRHeadToSuccess(result.data));
      // alert(JSON.stringify(result.data));
    } catch (err) {
      alert(JSON.stringify(err));
      dispatch(setStatePRHeadToFailed());
    }
  };



