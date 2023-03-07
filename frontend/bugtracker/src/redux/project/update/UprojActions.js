import {
  UPDATE_PROJECT,
  UPDATE_PROJECT_FAILURE,
  UPDATE_PROJECT_SUCCESS,
} from "./UprojTypes";
import axios from "axios";
import { fetchProjectThunk } from "../..";

export const updateProject = () => {
  return {
    type: UPDATE_PROJECT,
  };
};

export const updateProjectSuccess = (success) => {
  return {
    type: UPDATE_PROJECT_SUCCESS,
    payload: success,
  };
};

export const updateProjectFailure = (error) => {
  return {
    type: UPDATE_PROJECT_FAILURE,
    payload: error,
  };
};

export const updateProjectThunk = (id, project) => {
  return (dispatch) => {
    dispatch(updateProject());
    axios
      .put(`https://localhost:44346/api/projects/${id}`, project)
      .then((response) => {
        const data = response.data;
        dispatch(updateProjectSuccess(data));
        dispatch(fetchProjectThunk());
      })
      .catch((error) => {
        dispatch(error.Message);
      });
  };
};
