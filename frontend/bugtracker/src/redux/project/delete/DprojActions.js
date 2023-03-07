import {
  DELETE_PROJECT,
  DELETE_PROJECT_SUCCESS,
  DELETE_PROJECT_FAILURE,
} from "./DprojTypes";

import axios from "axios";
import { fetchProjectThunk } from "../..";

export const deleteProject = (id) => {
  return {
    type: DELETE_PROJECT,
    payload: id,
  };
};

export const deleteProjectSuccess = (success) => {
  return {
    type: DELETE_PROJECT_SUCCESS,
    payload: success,
  };
};

export const deleteProjectFailure = (error) => {
  return {
    type: DELETE_PROJECT_FAILURE,
    payload: error,
  };
};

export const deleteProjectThunk = (id) => {
  return (dispatch) => {
    dispatch(deleteProject());
    axios
      .delete(`https://localhost:44346/api/PROJECTS/${id}`)
      .then((response) => {
        const data = response.data;
        dispatch(deleteProjectSuccess(data));
        dispatch(fetchProjectThunk());
      })
      .catch((error) => {
        dispatch(deleteProjectFailure(error.Message));
      });
  };
};
