import {
  FETCH_SINGLE_PROJECT_FAILURE,
  FETCH_SINGLE_PROJECT_REQUEST,
  FETCH_SINGLE_PROJECT_SUCCESS,
} from "./FsingleTypes";
import axios from "axios";

export const fetchSingleProject = () => {
  return {
    type: FETCH_SINGLE_PROJECT_REQUEST,
  };
};

export const fetchSingleProjectSuccess = (success) => {
  return {
    type: FETCH_SINGLE_PROJECT_SUCCESS,
    payload: success,
  };
};

export const fetchSingleProjectFailure = (error) => {
  return {
    type: FETCH_SINGLE_PROJECT_FAILURE,
    payload: error,
  };
};

export const fetchSingleProjectThunk = (id) => {
  return (dispatch) => {
    dispatch(fetchSingleProject());

    axios
      .get(`https://localhost:44346/api/projects/${id}`)
      .then((response) => {
        const data = response.data;
        dispatch(fetchSingleProjectSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchSingleProjectFailure(error.Message));
      });
  };
};
