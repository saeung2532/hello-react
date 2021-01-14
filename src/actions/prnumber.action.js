import {
    HTTP_PRNUMBER_FETCHING,
    HTTP_PRNUMBER_FAILED,
    HTTP_PRNUMBER_SUCCESS,
    HTTP_PRNUMBER_CLEAR,
  } from "../constants";
  import { server } from "../constants";
  import { httpClient } from "./../utils/HttpClient";
  
  // Information being sent to Reducer
  export const setStatePRNumberToSuccess = (payload) => ({
    type: HTTP_PRNUMBER_SUCCESS,
    payload,
  });
  
  const setStatePRNumberToFetching = () => ({
    type: HTTP_PRNUMBER_FETCHING,
  });
  
  const setStatePRNumberToFailed = () => ({
    type: HTTP_PRNUMBER_FAILED,
  });
  
  const setStatePRNumberToClear = () => ({
    type: HTTP_PRNUMBER_CLEAR,
  });

  export const getPRHeadNumbers = () => {
    return async (dispatch) => {
      dispatch(setStatePRNumberToFetching());
      doGetPRHeadNumbers(dispatch);
    };
  };
  
  const doGetPRHeadNumbers = async (dispatch) => {
    try {
      let result = await httpClient.get(server.PRHEADNUMBER_URL);
      dispatch(setStatePRNumberToSuccess(result.data));
      // alert(JSON.stringify(result.data));
    } catch (err) {
      alert(JSON.stringify(err));
      dispatch(setStatePRNumberToFailed());
    }
  };



