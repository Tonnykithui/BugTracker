import {
  CREATE_PROJECT,
  CREATE_PROJECT_FAILURE,
  CREATE_PROJECT_SUCCESS,
} from "./projTypes";
import axios from "axios";
import { fetchProjectThunk } from "../..";

export const createProject = (project) => {
  return {
    type: CREATE_PROJECT,
    payload: project,
  };
};

export const createProjectSuccess = (success) => {
  return {
    type: CREATE_PROJECT_SUCCESS,
    payload: success,
  };
};

export const createProjectFailure = (error) => {
  return {
    type: CREATE_PROJECT_FAILURE,
    payload: error,
  };
};

export const createProjectThunk = (project) => {
  return (dispatch) => {
    dispatch(createProject());
    axios
      .post("https://localhost:44346/api/projects", project)
      .then((response) => {
        const data = response.data;
        dispatch(createProjectSuccess(data));
        dispatch(fetchProjectThunk());
      })
      .catch((error) => {
        dispatch(createProjectFailure(error.Message));
      });
  };
};
