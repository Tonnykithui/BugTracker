import {
  DISPATCH_PROJECT_TO_STATE,
  FETCH_PROJECT,
  FETCH_PROJECT_FAILURE,
  FETCH_PROJECT_SUCCESS,
} from "./FprojTypes";
import axios from "axios";

export const fetchProject = () => {
  return {
    type: FETCH_PROJECT,
  };
};

export const fetchProjectSuccess = (projects) => {
  return {
    type: FETCH_PROJECT_SUCCESS,
    payload: projects,
  };
};

export const fetchProjectFailure = (error) => {
  return {
    type: FETCH_PROJECT_FAILURE,
    payload: error,
  };
};

export const fetchProjectThunk = () => {
  return (dispatch) => {
    dispatch(fetchProject());
    axios
      .get("https://localhost:44346/api/PROJECTS")
      .then((response) => {
        const data = response.data;
        dispatch(fetchProjectSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchProjectFailure(error.Message));
      });
  };
};

export const dispatchProj = (ticket) => {
  return {
    type: DISPATCH_PROJECT_TO_STATE,
    payload: ticket,
  };
};
