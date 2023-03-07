import axios from "axios";
import { fetchUsersFromEnd } from "../..";
import {
  DELETE_USER_FAILURE,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
} from "./DuserTypes";

export const deleteUser = (id) => {
  return {
    type: DELETE_USER_REQUEST,
    payload: id,
  };
};

export const deleteUserSuccess = (success) => {
  return {
    type: DELETE_USER_SUCCESS,
    payload: success,
  };
};

export const deleteUserFailure = (error) => {
  return {
    type: DELETE_USER_FAILURE,
    payload: error,
  };
};

export const deleteUserFromEnd = (id) => {
  return (dispatch) => {
    dispatch(deleteUser(id));
    axios
      .delete(`https://localhost:44346/api/users/${id}`)
      .then((response) => {
        const data = response.date;
        dispatch(deleteUserSuccess(data));
        dispatch(fetchUsersFromEnd());
      })
      .catch((error) => {
        dispatch(deleteUserFailure(error.Message));
      });
  };
};
